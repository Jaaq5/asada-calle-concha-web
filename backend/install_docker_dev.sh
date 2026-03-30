#!/bin/bash

#

# install_docker_dev.sh

#

# Instala Docker Engine y Docker Compose (plugin) en Debian 13

# siguiendo buenas prácticas del Google Shell Style Guide.

#

set -o errexit
set -o nounset
set -o pipefail

# ==============================

# Constants

# ==============================

readonly DOCKER_GPG_URL="https://download.docker.com/linux/debian/gpg"
readonly DOCKER_REPO_URL="https://download.docker.com/linux/debian"

# ==============================

# Logging

# ==============================

log() {
echo "[INFO] $*"
}

err() {
echo "[ERROR] $*" >&2
}

# ==============================

# Checks

# ==============================

check_root() {
if [[ "${EUID}" -ne 0 ]]; then
    err "Este script debe ejecutarse con sudo o como root"
    exit 1
fi
}

# ==============================

# Remove old versions

# ==============================

remove_old_docker() {
log "Removiendo versiones antiguas de Docker (si existen)..."
apt-get remove -y docker.io docker-compose docker-doc podman-docker 
containerd runc || true
}

# ==============================

# Install dependencies

# ==============================

install_dependencies() {
log "Instalando dependencias..."
apt-get update
apt-get install -y ca-certificates curl
}

# ==============================

# Setup Docker repository

# ==============================

setup_docker_repo() {
    log "Configurando repositorio oficial de Docker..."

    install -m 0755 -d /etc/apt/keyrings

    curl -fsSL "${DOCKER_GPG_URL}" -o /etc/apt/keyrings/docker.asc

    chmod a+r /etc/apt/keyrings/docker.asc

    local codename
    codename="$(. /etc/os-release && echo "${VERSION_CODENAME}")"

    echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] ${DOCKER_REPO_URL} ${codename} stable" \
    | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
}

# ==============================

# Install Docker

# ==============================

install_docker() {
log "Instalando Docker Engine y plugins..."

apt-get update

apt-get install -y docker-ce docker-ce-cli containerd.io
}

# ==============================

# Post install steps

# ==============================

post_install() {
local user_name
user_name="${SUDO_USER:-}"

if [[ -n "${user_name}" ]]; then
    log "Agregando usuario '${user_name}' al grupo docker..."
usermod -aG docker "${user_name}"
fi

log "Habilitando servicio Docker..."
systemctl enable docker
systemctl start docker
}

# ==============================

# Verify installation

# ==============================

verify_installation() {
log "Verificando instalación de Docker..."

if ! docker run hello-world >/dev/null 2>&1; then
err "Docker no funciona correctamente"
exit 1
fi

log "Docker instalado correctamente"
docker --version
docker compose version
}

# ==============================

# Main

# ==============================

main() {
check_root
remove_old_docker
install_dependencies
setup_docker_repo
install_docker
post_install
verify_installation

log "Instalación completada ✅"
log "IMPORTANTE: Cierra sesión o ejecuta 'newgrp docker'"
}

main "$@"

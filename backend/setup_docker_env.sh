#!/bin/bash
#
# setup_docker_strapi.sh
#
# Configura entorno Docker dev para Node.js 24 + PostgreSQL 17 + Strapi
#

set -o errexit
set -o nounset
set -o pipefail

# ==============================
# Logging
# ==============================
log() {
  echo "[INFO] $*"
}

# ==============================
# Crear estructura de carpetas
# ==============================
create_structure() {
  log "Creando estructura de carpetas..."
  mkdir -p nodejs
  mkdir -p postgres
  mkdir -p strapi
}

# ==============================
# Dockerfile para Node.js 24 / Strapi
# ==============================
create_nodejs_dockerfile() {
  log "Creando Dockerfile de Node.js 24 para Strapi..."
  cat > nodejs/Dockerfile <<'EOF'
# Dockerfile Node.js 24 (Strapi dev)
FROM node:24-slim

# Crear directorio de trabajo
WORKDIR /usr/src/app

# Instalar dependencias necesarias para Strapi
RUN apt-get update && apt-get install -y python3 build-essential git

# Copiar package.json y package-lock.json si existen
COPY ../strapi/package*.json ./

# Instalar dependencias
RUN npm install

# Copiar todo el proyecto Strapi
COPY ../strapi/ .

# Exponer puerto de Strapi
EXPOSE 1337

# Comando por defecto para desarrollo
CMD ["npm", "run", "develop"]
EOF
}

# ==============================
# Dockerfile para PostgreSQL 17
# ==============================
create_postgres_dockerfile() {
  log "Creando Dockerfile de PostgreSQL 17..."
  cat > postgres/Dockerfile <<'EOF'
# Dockerfile PostgreSQL 17 (dev)
FROM postgres:17

# Variables de entorno por defecto
ENV POSTGRES_USER=strapi
ENV POSTGRES_PASSWORD=strapi
ENV POSTGRES_DB=strapi_dev

EXPOSE 5432
EOF
}

# ==============================
# docker-compose.yml
# ==============================
create_docker_compose() {
  log "Creando docker-compose.yml..."
  cat > docker-compose.yml <<'EOF'
version: "3.9"

services:
  strapi:
    build: ./nodejs
    volumes:
      - ./strapi:/usr/src/app
      - /usr/src/app/node_modules
    ports:
      - "1337:1337"
    environment:
      DATABASE_CLIENT: postgres
      DATABASE_HOST: postgres
      DATABASE_PORT: 5432
      DATABASE_NAME: strapi_dev
      DATABASE_USERNAME: strapi
      DATABASE_PASSWORD: strapi
    depends_on:
      - postgres

  postgres:
    build: ./postgres
    volumes:
      - pgdata:/var/lib/postgresql/data
    environment:
      POSTGRES_USER: strapi
      POSTGRES_PASSWORD: strapi
      POSTGRES_DB: strapi_dev
    ports:
      - "5432:5432"

volumes:
  pgdata:
EOF
}

# ==============================
# Main
# ==============================
main() {
  create_structure
  create_nodejs_dockerfile
  create_postgres_dockerfile
  create_docker_compose
  log "¡Entorno Strapi Docker dev preparado! ejecuta: docker compose up --build"
}

main "$@"
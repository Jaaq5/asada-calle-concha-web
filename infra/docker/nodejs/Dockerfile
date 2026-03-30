# backend/nodejs/Dockerfile
FROM docker.io/node:24

WORKDIR /usr/src/app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar código
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
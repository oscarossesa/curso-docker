# Dependecias de desarrollo
FROM node:19.2-alpine3.17 AS deps
WORKDIR /app
COPY package.json ./
RUN npm install 

# Build y Tests
FROM node:19.2-alpine3.17 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run test

# Dependencias de producción
FROM node:19.2-alpine3.17 AS prod-deps
WORKDIR /app
COPY package.json ./
RUN npm install --prod

# Ejectar la aplicación
FROM node:19.2-alpine3.17 AS runner
WORKDIR /app
COPY --from=prod-deps /app/node_modules ./node_modules
COPY app.js ./
COPY tasks/ ./tasks
CMD ["node", "app.js"]

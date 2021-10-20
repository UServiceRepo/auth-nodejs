ARG VERSION=latest
FROM node:$VERSION AS base
WORKDIR /app
COPY package*.json .
RUN npm install

FROM base AS builder
COPY . .
RUN npm run build

FROM base AS final
COPY --from=builder /app/dist .
WORKDIR /app/dist
EXPOSE 8080
ENTRYPOINT [ "node", "service" ]

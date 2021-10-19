ARG VERSION=latest
FROM node:$VERSION
WORKDIR /app
COPY . .
RUN npm install && npm run build
WORKDIR /app/dist
EXPOSE 8080
ENTRYPOINT [ "node", "service" ]

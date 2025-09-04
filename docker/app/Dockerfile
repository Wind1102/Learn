FROM node:20-alpine
WORKDIR /app
COPY . .
RUN yarn install --production
EXPOSE 80
CMD ["node", "src/index.js"]

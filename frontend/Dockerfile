FROM node:20-alpine AS builder
WORKDIR /app/nextjs
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

CMD ["npm", "run", "start"]
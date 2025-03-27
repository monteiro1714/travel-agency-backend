# # Build Environment
# FROM node:20.18-alpine as builder

# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# # Production Environment
# FROM node:20.18-alpine

# WORKDIR /app
# COPY --from=builder /app/dist ./dist
# COPY --from=builder /app/package*.json ./
# RUN npm install --production

# EXPOSE 3000
# CMD ["node", "dist/main.js"]
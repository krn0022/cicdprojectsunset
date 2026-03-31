# Stage 1: Build environment
FROM node:20-alpine AS build
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source and build
COPY . .
# Next.js build typically creates a .next folder
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:stable-alpine
# Copy custom nginx config if needed
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build artifacts to nginx public folder
# Note: For Next.js, static export (output: 'export') would go to /out
# But for a standard app with a server, we would use node. 
# For this CI/CD demo, we assume a static export or simple serve.
COPY --from=build /app/out /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
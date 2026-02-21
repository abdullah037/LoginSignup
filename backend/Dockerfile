FROM node:22.17.1-slim


WORKDIR /app

# Copy package files first to leverage Docker cache
COPY package*.json ./

# This compiles bcrypt specifically for Linux
RUN npm install

# Copy the rest of the code (ignoring node_modules because of .dockerignore)
COPY . .

EXPOSE 3000
CMD ["npm", "start"]
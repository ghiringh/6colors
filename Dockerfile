# Use an official Node.js runtime as a parent image
FROM node:19-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app to the container
COPY . .

# Build the Vue.js app for production
RUN npm run build

# Expose port 80
EXPOSE 80

# Start the server
CMD [ "node", "server.js" ]

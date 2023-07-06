# Base image
FROM node:16

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application code
COPY .. .

# Build TypeScript
RUN npm run build

# Expose port
EXPOSE 4000

# Command to start the application
CMD ["npm", "start"]

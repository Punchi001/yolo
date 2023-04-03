# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Copy .env file to the working directory
COPY .env ./

# Expose the port on which the app will run
EXPOSE 5000

# Start the Node.js app
CMD ["npm", "start"]

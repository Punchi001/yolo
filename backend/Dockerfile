# Use an official Node.js runtime as a parent image
FROM node:14.5.0-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies,production dependencies and not the development dependencies, which will further reduce the size of the image.
RUN npm install --only=prod

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port on which the app will run
EXPOSE 5000

# Start the React app
CMD ["npm", "start"]
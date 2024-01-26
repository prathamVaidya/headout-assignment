# Use the official Node.js 20 image as a base
FROM node:20

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application files to the working directory
COPY . .

# Build the TypeScript project
RUN npm run build

# Run the seed command
RUN npm run seed

# Expose port 8080
EXPOSE 8080

# Define environment variables, if necessary
ENV NODE_ENV=production

# Specify the memory and CPU limits
# Note: The CPU limit is set to 2000m, which means 2 CPU cores.
# If you want to limit memory, you can use the --memory flag when running the container.
CMD ["npm", "start"]

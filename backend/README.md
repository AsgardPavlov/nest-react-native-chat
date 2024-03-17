## Overview

This guide provides step-by-step instructions for setting up the backend microservices, utilizing Docker and Docker Compose for a streamlined development and deployment process.

## Prerequisites

Before proceeding, ensure you have the following installed on your system:

- **Docker**: A platform that allows you to automate the deployment, scaling, and management of applications within containers.
- **Docker Compose**: A tool for defining and running multi-container Docker applications.

## Environment Setup

1. **Set Up Environment Variables**: Copy the sample environment file and customize it as needed.

```$ cp .env-sample .env```

## Running the Application with Docker Compose

1. **Build and Start the Services**: Use Docker Compose to build the images and start the containers.

This command will build the Docker images for your services and start them in the background.

## WebSocket Connection Instructions

For real-time communication, the Chat App uses WebSockets. Here's how to set up a WebSocket connection using Postman or Insomnia:

1. **Install Postman or Insomnia**: Choose either Postman or Insomnia as your API testing tool.

2. **Create a New Request**: In your chosen tool, create a new request.

3. **Select Socket.IO**: Ensure you select Socket.IO as the protocol for your request.

4. **Connect to the Server**: Enter the WebSocket URL `http://localhost:3001/` to connect.

5. **Subscribe to Events**: Subscribe to the `newMessage` and `getAllMessages` events to receive real-time updates.

6. **Sending Messages**: To send a message, use the `sendMessage` event with the following template:

```json
{ "username": "pasgard9@gmail.com", "message": "Don't eat alone!" }
```

Replace the `username` and `message` fields with your desired values.

## Additional Information

For more detailed instructions and troubleshooting, refer to the [Video Instruction](https://www.loom.com/share/37d9c7d67deb4cf9bf1e203e6485619e).

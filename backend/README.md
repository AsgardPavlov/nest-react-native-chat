# Chat App Microservices Setup Guide


## Prerequisites

- Docker
- Docker Compose


## Set Up Environment Variables

```bash
$ cp .env-sample .env
```

## Run Docker-Compose

```bash
$ docker-compose up --build
```


# WebSocket connection instruction: [Video Instruction]{https://www.loom.com/share/37d9c7d67deb4cf9bf1e203e6485619e}

- Install Postman or Insomnia
- Create request and select Socket.IO
- Connect to http://localhost:3001/
- Subscribe to `newMessage` and `getAllMessages` events
- To send message use this template (`sendMessage` event name to send message):
```
  {
    "username": "pasgard9@gmail.com",
    "message": "Down't eat alone! "
  }
```




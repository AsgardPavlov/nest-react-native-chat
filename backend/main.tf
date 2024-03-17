terraform {
  required_providers {
    docker = {
      source = "kreuzwerker/docker"
      version = "~> 3.0.1"
    }
  }
}

provider "docker" {
  host = "unix:///Users/asgard/.docker/run/docker.sock"
}

resource "docker_network" "shared_network" {
  name = "shared_network"
}

resource "docker_image" "rabbitmq" {
  name = "rabbitmq:3-management"
}

resource "docker_container" "rabbitmq" {
  name = "rabbitmq"
  image = docker_image.rabbitmq.name
  ports {
    internal = 5672
    external = 5672
  }
  ports {
    internal = 15672
    external = 15672
  }
  env = [
    "RABBITMQ_DEFAULT_USER=${local.vars.}",
    "RABBITMQ_DEFAULT_PASS=${var.rabbitmq_default_pass}",
    "RABBITMQ_USER=${var.rabbitmq_user}",
    "RABBITMQ_HOST=${var.rabbitmq_host}",
    "RABBITMQ_PASS=${var.rabbitmq_pass}",
  ]
  networks_advanced {
    name = docker_network.shared_network.name
  }
}

resource "docker_image" "postgres" {
  name = "postgres"
}

resource "docker_container" "postgres" {
  name = "postgres"
  image = docker_image.postgres.name
  ports {
    internal = 5432
    external = 5433
  }
  env = [
    "POSTGRES_USER=${var.postgres_user}",
    "POSTGRES_PASSWORD=${var.postgres_password}",
    "POSTGRES_DB=${var.postgres_db}",
  ]
  networks_advanced {
    name = docker_network.shared_network.name
  }
}

resource "docker_image" "consumer" {
  name = "your_consumer_image_name"
}

resource "docker_container" "consumer" {
  name = "consumer"
  image = docker_image.consumer.name
  ports {
    internal = 3000
    external = 3000
  }
  env = [
    "POSTGRES_URI=${var.postgres_uri}",
    "RABBITMQ_CHAT_QUEUE=${var.rabbitmq_chat_queue}",
  ]
  networks_advanced {
    name = docker_network.shared_network.name
  }
}

resource "docker_image" "producer" {
  name = "your_producer_image_name"
}

resource "docker_container" "producer" {
  name = "producer"
  image = docker_image.producer.name
  ports {
    internal = 3001
    external = 3001
  }
  env = [
    "POSTGRES_URI=${var.postgres_uri}",
    "RABBITMQ_CHAT_QUEUE=${var.rabbitmq_chat_queue}",
  ]
  networks_advanced {
    name = docker_network.shared_network.name
  }
}

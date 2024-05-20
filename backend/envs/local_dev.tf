locals {
  local_dev = {
    project    = "terrajet"
    POSTGRES_USER = "postgres"
    POSTGRES_PASSWORD = "root"
    POSTGRES_DB = "postgres"

    POSTGRES_URI="postgres://postgres:root@postgres:5432/postgres"

    RABBITMQ_DEFAULT_USER = "user"
    RABBITMQ_DEFAULT_PASS = "password"
    RABBITMQ_USER = "user"
    RABBITMQ_HOST="rabbitmq:5672"
    RABBITMQ_PASS = "password"

    RABBITMQ_CHAT_QUEUE = "chat_queue"


  }
}
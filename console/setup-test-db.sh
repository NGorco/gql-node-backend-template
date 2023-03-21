#!/bin/sh

source .env

docker run -v $(pwd)/backups:/var/lib/backups --name test_postgres_db -p $DB_PORT:5432 \
  -e POSTGRES_DB=$DB_NAME \
  -e POSTGRES_PASSWORD=$DB_PASSWORD \
  -e POSTGRES_USER=$DB_USER \
  -d postgres -c fsync=off -c synchronous_commit=off -c full_page_writes=off -c random_page_cost=1.0

sleep 1
env-cmd -f .env.test knex db:migrate
env-cmd -f .env.test knex db:seed:all

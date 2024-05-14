FROM postgres as dock-to-do-db
WORKDIR /app
COPY ./init.sh /docker-entrypoint-initdb.d
COPY ./dump.sql ./scripts/db/dump.sql
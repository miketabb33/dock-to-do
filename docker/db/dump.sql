CREATE TABLE IF NOT EXISTS list (
  "id" VARCHAR(50) NOT NULL,
  "message" VARCHAR(255) NOT NULL,
  "created_on" timestamp NOT NULL,
  PRIMARY KEY ("id")
);

INSERT INTO list (id, message, created_on) VALUES ('4732', 'Seeded Value', '1995-12-17T03:24:00');
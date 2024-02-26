CREATE TABLE "Users" (
    id integer DEFAULT nextval('users_id_seq'::regclass) PRIMARY KEY,
    email text,
    name text,
    password text,
    "yearOfBirth" date,
    weight double precision,
    height double precision
);
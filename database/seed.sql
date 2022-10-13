CREATE DATABASE mentor_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';

CREATE TABLE IF NOT EXISTS public.users
(
    user_id integer NOT NULL DEFAULT nextval('users_user_id_seq'::regclass),
    user_name text COLLATE pg_catalog."default",
    user_description text COLLATE pg_catalog."default",
    user_email text COLLATE pg_catalog."default",
    user_status integer DEFAULT 0,
    user_password text COLLATE pg_catalog."default",
    user_verification_code text COLLATE pg_catalog."default",
    CONSTRAINT users_pkey PRIMARY KEY (user_id)
)

INSERT INTO public.users (user_id, user_name, user_description, user_email, user_status, user_password, user_verification_code) VALUES (1, 'John Doe', 'A guy', 'guy@gmail.com', 0, '12345678', NULL);

SELECT pg_catalog.setval('public.users_user_id_seq', 1, true);
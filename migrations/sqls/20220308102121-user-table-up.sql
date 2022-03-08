create table store_user(
    store_user_id serial primary key,
    first_name varchar,
    last_name varchar,
    email varchar unique,
    hash_password varchar
)
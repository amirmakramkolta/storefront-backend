create table product(
    product_id serial primary key,
    name varchar,
    price int,
    category_id int,
    constraint fk_category
        foreign key(category_id)
        references category(category_id)
        on delete cascade
)
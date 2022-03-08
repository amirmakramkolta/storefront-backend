create table s_order (
    order_id serial primary key,
    store_user_id int,
    status_of_order varchar(20),
    constraint fk_store_user
        foreign key (store_user_id)
        references store_user(store_user_id)
        on delete cascade
)
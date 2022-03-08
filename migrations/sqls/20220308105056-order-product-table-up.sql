create table product_order (
    order_id int,
    product_id int,
    quantity int,
    constraint fk_order
        foreign key (order_id)
        references s_order(order_id)
        on delete cascade,
    constraint fk_product
        foreign key (product_id)
        references product(product_id)
        on delete cascade,
    primary key(order_id,product_id)
)
alter table category
    add constraint unique_category_name unique (name);

alter table product
    add constraint unique_product_name unique (name);

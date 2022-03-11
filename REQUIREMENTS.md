# Storefront backend

## Endpoints
### category Endpoints
- "/create-category": -post- for create new category (token needed) and the body of your request will be like this:
`{
    "name":/*category_name*/
    "token":/*token*/
}`
- "/categories": -get- for show all categories (no token needed, no body needed)
- "/categories/:id" -get- for show specfic category (no token needed, no body needed)
- "/productsIncategory/" -get- for show all products with category name (no token needed, no body needed)
- "/productsIncategory/:id" -get- for show specfic product with category name (no token needed, no body needed)
### order Endpoints
- "/create-order" -post- for create new empty order (token needed) and the body of your request will be like this:` {
    "token":/*your token*/
}`
- "/add-product/:id" -post- for add products in your order(token needed) and the body of your request will be like this:` {
    "productId":/*your product id*/,
    "quantity":/*your quantity*/,
    "token":/*your token*/
}`
- "/my-orders" -get- for getting your all orders with your product(token needed) and the body of your request will be like this:`{
    "token":/*your token*/
}`
### product Endpoints
- "/create-product" -post- for creating new product (token needed) and the body of your request will be like this: `{
    "name":/*product name*/,
    "price:/*product price*/,
    "categoryId":/*your product category id*/
    "token":/*your token*/
}`
- "/products" -get- for show all products with category id (no token needed, no body needed)
- "/products/:id" -get- for show specfic product with category id (no token needed, no body needed)
### user Endpoints
- "/create-user" -post- for creating user (no token needed) and the body of your request will be like this: `{
    "firstname":/*firstname*/,
    "lastname":/*lastname*/,
    "email":/*email*/,
    "password":/*password*/
}`
- "/signin" -post- for signing in (no token needed) and the body of your request will be like this: `{
    "email":/*email*/,
    "password":/*password*/
}`
-"/users": -get- for getting all user (token needed) and the body of your request will be like this: `{
    "token":/*your token*/
}`
-"/user" -get- for getting your user (token needed) and the body of your request will be like this: `{
    "token":/*your token*/
}`

## database schema

### store_user
- store_user_id as primary key
- first_name
- last_name
- email (Unique value)
- hash_password

### category
- category_id as primary key
- name (Unique value)

### product
- product_id as primary key
- name (Unique value)
- price
- category_id as foreign key to category table

### s_order
- order_id as primary key
- store_user_id as foreign key to store_user table
- status_of_order
### product_order
- order_id as foreign key to s_order table and composite primary key
- product_id as foreign key to product table and composite primary key
- quantity

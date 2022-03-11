# Storefront backend

## thing to do first

- run `npm i` to get all node modules
- run `db-migrate up` to get all tables in database
- create a .env file and put excect same variable name to not getting any errors during running the project
    * host 
    * user 
    * password 
    * database 
    * database_test 
    * env_node `for you env variable` 
    * salt `for salt round` 
    * pepper 
    * secret `for token secert`
- create `database.json` for your db-migrate config

Now you are ready to start

## command that you should know about
- npm run build: to build your project
- npm run jasmine: to test your build
- npm run pre-test: it just compane between the previous two commands
- npm run test: to build and test and set you env to test and clear your test database after the test end (I used this a lot)
- npm run start: to run nodemon (I used this a lot)
- npm run clear-test-db: to clear the test database if tests failed (I hope that you do not use this command)

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

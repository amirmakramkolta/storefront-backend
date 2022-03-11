# Storefront backend

## thing to do first

- run `npm i` to get all node modules
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
- create two databases one for your development environment and the another one for your testing environment
- put your development database in `database` variable in .env file and your testing database in `database_test` in .env file
- run `db-migrate up` to get all tables in your development environment database

Now you are ready to start

## Quick notes

the project design to run on your localhost on port 3000 so your url will be like this:
- http://localhost:3000/your-endpoint

## command that you should know about
- npm run build: to build your project
- npm run jasmine: to test your build
- npm run pre-test: it just compane between the previous two commands
- npm run test: to build and test and set you env to test and clear your test database after the test end (I used this a lot)
- npm run start: to run nodemon (I used this a lot)
- npm run clear-test-db: to clear the test database if tests failed (I hope that you do not use this command)


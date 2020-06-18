# Opgave 1 
## The project uses mongodb and mongoose
So make sure you have a mongodb installed and compass
The database it uses is called susprise 
and the two collections are categories and products
So make sure you also have these two installed.

I would also highly recommend using postman or insomnia to test the data.

# endpoins:
## Category
GET:
localhost:8080/api/category 
localhost:8080/api/category/id

POST:
localhost:8080/api/category/id

DELETE:
localhost:8080/api/category/id

PUT:
localhost:8080/api/category/id

## Products

GET:
localhost:8080/api/products 
localhost:8080/api/products/id

POST:
localhost:8080/api/products/id

DELETE:
localhost:8080/api/products/id

PUT:
localhost:8080/api/products/id

## Notes:

**NOTE: That when you create a product then you HAVE to make sure it has a category, so call the GET:
localhost:8080/api/category and make sure the category has the right ObjectId**
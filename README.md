# FuberEats-Backend

## Fubar Eats API

This project is a CRUD REST API that returns an array of products data.

### Prerequisites

- must have node installed
- must have mongodb installed

## Deployment

- Railway

- all products link: https://fubereats-backend-production.up.railway.app/products

## Built With

- nodejs
- express
- mongoDB

## Contributing

fork, clone, create a new feature, and submit a pull request!

## Authors

- **Tony Wu**
- **Chelsea Douglas**
- **Nichole De La Rosa**
- **Khristopher Patrick**
- **Mohamed Akeel Khan**

## 3rd-party api used

- https://ig-food-menus.herokuapp.com

## API DOCUMENTATION IN POSTMAN

<!-- https://documenter.getpostman.com/view/23919886/2s84DhX6oc -->

## API DOCUMENTATION

#### main crud routes / create - read - update - delete

- https://fubereats-backend-production.up.railway.app/products
- https://fubereats-backend-production.up.railway.app/products/:id

#### other routes

- https://fubereats-backend-production.up.railway.app/products/name/:name
- https://fubereats-backend-production.up.railway.app/products/limit/:num

- **GET ALL PRODUCTS endpoint: GET /products**
- link: https://fubereats-backend-production.up.railway.app/products
- status code: 200 ok
- description: gets all products.
- example response:

```json
[
    {
        "_id": "6367e5cdf31be39cd94b0fcc",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66752/carolina-bbq-oink-sampler.1340b5a10cedc238cb2280306dd1d5a5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Kings BBQ",
        "dsc": "Carolina BBQ Oink Sampler",
        "price": 89,
        "rate": 4,
        "country": "Kinston, NC",
        "__v": 0
    },
    {
        "_id": "6367e5cdf31be39cd94b0fcb",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/79619/joes-kc-ribs-brisket-and-burnt-ends.6710e994980e485e6441b794717ad6fb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Joe's KC BBQ",
        "dsc": "Joe's KC Ribs, Brisket & Burnt Ends",
        "price": 110.99,
        "rate": 5,
        "country": "Kansas City, KS",
        "__v": 0
    },
    ...........
]
```

- **GET A SINGLE PRODUCT endpoint: GET /products/:id**
- link: https://fubereats-backend-production.up.railway.app/products/:id
- status code: 200 ok
- description: gets a single product.
- example response:

```json
{
  "_id": "6367e5cdf31be39cd94b0fcb",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/79619/joes-kc-ribs-brisket-and-burnt-ends.6710e994980e485e6441b794717ad6fb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Joe's KC BBQ",
  "dsc": "Joe's KC Ribs, Brisket & Burnt Ends",
  "price": 110.99,
  "rate": 5,
  "country": "Kansas City, KS",
  "__v": 0
}
```

- **CREATE A PRODUCT endpoint: POST /products/**
- link: https://fubereats-backend-production.up.railway.app/products}
- status: 201 created
- description: creates a single product.
- body

```json
{
  "name": "TEST PRODUCT",
  "dsc": "TEST DESCRIPTION"
}
```

- example response

```json
{
  "name": "TEST PRODUCT",
  "dsc": "TEST DESCRIPTION",
  "_id": "63683fd1a48de6cfeee9c0e4",
  "__v": 0
}
```

- **UPDATE A PRODUCT endpoint: PUT /products/:id**
- link: https://fubereats-backend-production.up.railway.app/products/:id}
- status: 201 created
- description: updates a single product.
- body

```json
{
  "name": "NEW NAME FOR FOOD",
  "dsc": "NEW DESCRIPTION FOR FOOD"
}
```

- example response:

```json
{
  "_id": "6367e5cdf31be39cd94b0fd0",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/110384/whole-brisket-texas-barbecue-bbq-sauce.e07ee4818b20ed43d217bf67fedd41ce.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "NEW NAME FOR FOOD",
  "dsc": "NEW DESCRIPTION FOR FOOD",
  "price": 249,
  "rate": 5,
  "country": "Austin, TX",
  "__v": 0
}
```

- **GET PRODUCT BY NAME endpoint: GET /products/name/:name**
- status: 200 OK
- link ex: https://fubereats-backend-production.up.railway.app/products/name/Franklin Barbecue
- description: gets a product by name
- example response:

```json
[
  {
    "_id": "6367e5cef31be39cd94b0fdc",
    "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131846/whole-brisket-sausage-texas-barbecue-bbq-sauce.ffb470cab2f454fd848faa5dddfe65f5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    "name": "Franklin Barbecue",
    "dsc": "Whole Brisket + Sausage + Texas Barbecue BBQ Sauce",
    "price": 289,
    "rate": 5,
    "country": "Austin, TX",
    "__v": 0
  }
]
```

- **GET LIMITED # OF PRODUCTS endpoint: GET /products/limit/:num**
- status: 200 OK
- description: gets a certain amount of products
- link example: https://fubereats-backend-production.up.railway.app/products/limit/2
- example response:

```json
[
  {
    "_id": "6367e5cdf31be39cd94b0fcb",
    "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/79619/joes-kc-ribs-brisket-and-burnt-ends.6710e994980e485e6441b794717ad6fb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    "name": "Joe's KC BBQ",
    "dsc": "Joe's KC Ribs, Brisket & Burnt Ends",
    "price": 110.99,
    "rate": 5,
    "country": "Kansas City, KS",
    "__v": 0
  },
  {
    "_id": "6367e5cdf31be39cd94b0fcf",
    "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/110287/barbeque-sampler-for-4-6.edb4e60564852c9d0227634c31fab279.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    "name": "Arthur Bryant's Barbeque",
    "dsc": "Barbeque Sampler for 8",
    "price": 139,
    "rate": 5,
    "country": "Kansas City, MO",
    "__v": 0
  }
]
```

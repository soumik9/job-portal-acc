# Tour Management API

* /tours [GET]
* /tours?page=5&limit=2 [GET]
* /tours?category=gold&name=Bandarban tour [GET]
* /tours?sort=name || /tours?sort=price name [GET]
* /tours?fields=name -_id [GET]
* /tour/cheapest [GET]
* /tour/trending [GET]
* /tours [POST]
* /tours/:id [PATCH]

## Features

* Get all tours.
* Get all tours with pagination flexiblity.
* Get all tours with filtering flexiblity.
* Get all tours with sorting flexiblity.
* Get all tours with select any filed flexiblity.
* Get three cheapest tours.
* Get three trending tours by viewers count.
* Save tour information with validation.
* Update tour information with validation.


## Technologies

* NodeJS
* ExpressJS
* MongoDB/Mongoose





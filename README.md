# Job Portal API

* /user/signup [POST]
* /user/login [POST]
* /user/me [GET] ['Verify Login']
* /jobs [POST] ['Verify Login', 'verifyRole'] [HR role]
* /manager/jobs [GET] ['Verify Login', 'verifyRole'] [HR role]
* /jobs/:id [PATCH] ['Verify Login', 'verifyRole'] [HR role]
* /jobs [GET] [Public route] [Filtering and Sorting flexiblity]

## Features

* Signup a new user as [admin, hr, candidate].
* Login and Genarate token with user data.
* Verify accesstoken get logged user data.
* Verify accesstoken and hr role to create new job.
* Verify accesstoken and 'hr' role to get that manager created jobs.
* Verify accesstoken and 'hr' role to update job details.
* Get all jobs for candidate filtering and sorting flexiblity.


## Technologies

* NodeJS
* ExpressJS
* MongoDB/Mongoose





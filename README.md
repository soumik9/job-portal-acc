# Job Portal API

* /user/signup [POST]
* /user/login [POST]
* /user/me [GET] ['Verify Login']
* /jobs [POST] ['Verify Login', 'verifyRole'] [HR role]
* /manager/jobs [GET] ['Verify Login', 'verifyRole'] [HR role]

## Features

* Signup a new user as [admin, hr, candidate].
* Login and Genarate token with user data.
* Verify accesstoken get logged user data.
* Verify accesstoken and hr role to create new job.
* Verify accesstoken and 'hr' role to get that manager created jobs.


## Technologies

* NodeJS
* ExpressJS
* MongoDB/Mongoose





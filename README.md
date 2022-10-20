# Job Portal

Live Website [Click here](https://job-portal-tszz.onrender.com/)

# Job Portal API

* /user/signup [POST]
* /user/login [POST]
* /user/me [GET] ['Verify Login']
* /jobs [POST] ['Verify Login', 'verifyRole'] [HR role]
* /manager/jobs [GET] ['Verify Login', 'verifyRole'] [HR role]
* /jobs/:id [PATCH] ['Verify Login', 'verifyRole'] [HR role]
* /jobs [GET] ['Verify Login', 'verifyRole'] [Candidate role] [Filtering and Sorting flexiblity]
* /manager/jobs/:id [GET] ['Verify Login', 'verifyRole'] [HR role]
* /jobs/:id/apply [GET] ['Verify Login', 'verifyRole'] [Candidate role]
* /jobs/:id [GET] ['Verify Login', 'verifyRole'] [Candidate role]

## Features

* Signup a new user as [admin, hr, candidate].
* Login and Genarate token with user data.
* Verify accesstoken get logged user data.
* Verify accesstoken and hr role to create new job.
* Verify accesstoken and 'hr' role to get that manager created jobs.
* Verify accesstoken and 'hr' role to update job details.
* Get all jobs for candidate filtering and sorting flexiblity.
* Get specific job details with candidates and resume url.
* Apply to a job with pdf and if deadline expired can not apply.
* Get single job details with id.


* All routes can be accessd by admin.


## Technologies

* NodeJS
* ExpressJS
* MongoDB/Mongoose





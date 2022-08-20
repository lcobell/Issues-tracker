# Issues-tracker
The Issue Tracker Application is designed to be a full stack application with an Express backend and a React front-end utilizing the Material UI component library. The purpose of the application is to allow users to track trouble shooting tickets such as ones that would be created and addressed by a software development team. There are two roles for users of this app, an administrator with additional permissions that allow them to manage the team and tickets and a team member that can work on and edit certain properties of tickets such as updating the status and writing comments. Additionally the application will have a built in chat feature for communication amongst team members.

##Technologies
For this application many technologies were used along with the Express backend from Node.js and the React front-end and the Material-UI library amongs them are:
- dotenv for storing environment variables - Joi for data validation, Mongoose was utilized for more validation and integrating to our database; MongoDB  - Lodash for its modular methods  - bcrypt for password hashing - JSON Web Token for secure logins and operations - chart js for various graphics used throughout.

##Issues
This is a large project and as such it is not yet fully functional.  Some key components that were the focus of this project were the ability to securely create a user and sign in.  Once signed in the user is directed to the Tracker Inc. Dashboard where they can access different tabs, the main one being the Dashboard that displays data in a visually appealing way.  When accessing the "All Tickets" view a table of tickets is visible as well as a button that takes the user to the "new-ticket" form. Administrative features to manage team members and assign roles are coming soon as well as an in app chat feature.

## Get started

1 - Fork and clone the repo to your computer  
2 - CD into fronted and run npm install to install the dependencies the npm satrt to lunch the project in your browser  
3 - CD into server and run npm install to install the dependencies then node index.js or nodemon

### Configurations

Create a file named .env in the server folder and set the values for these variables:

PORT= 9000  
MONGODB_URI="" paste in your mongodb connection string  
jwtPrivateKey="" create a private key

## The frontend new routes

1- The main route http://localhost:3000/ is now redirecting to . On successful login, the user is redirected to the dashboard.  
2- You may access the dashboard directly by going to http://localhost:3000/user/dashboard. This route is going to be protected and only made available to authenticated users.  
3- To access the sign up page visit http://localhost:3000/user/create-account or use the link on the login page

## API endpoints

1 - To create a new user, send a POST req to http://localhost:9000/api/users  
2 - To Login, send a POST request to http://localhost:9000/api/authn  
3- Get the current user (Protected route, requies authentication and authorization) http://localhost:9000/api/users/me


//Dependencies
dotenv.config(); //Make sure this is at the top of your file otherwise your app can't access the .env file
import mongoose from 'mongoose';
import Express from 'express';
import dotenv from 'dotenv';
import users from './controllers/user.js';
import authn from './controllers/authn.js';
import tickets from './controllers/ticket.js';

//Connection to MongoDB
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to IssueTracker Mongo Database ...'))
    .catch((err) =>
        console.error('Connected to Tracker Mongo Database ...', err.message)
    );

//Variables
const app = Express();

//Controllers
app.get('/', (req, res) => {
    res.send('You have reached Tracker Inc. api');
});

//Middleware
app.use(Express.json());
app.use('/api/users', users); // add new user
app.use('/api/tickets', tickets);
app.use('/api/authn', authn); //login

//For deploying the app
const __dirname = path.resolve();
app.use(Express.static(path.join(__dirname, '/frontend/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/frontend/build/index.html'));
});

//Port
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`server started on port ${port} ...`);
});

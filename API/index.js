const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors'); // Include the CORS package
const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const postRouter = require('./routes/posts');

dotenv.config();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Successfully connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// Enable CORS for all routes
app.use(cors());

// the middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/posts', postRouter);

app.listen(3001, () => {
    console.log('listening on port 3001');
});

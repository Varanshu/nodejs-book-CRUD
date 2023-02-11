const express = require('express')
const mongoose = require('mongoose');
const { routes } = require('./routes/routes');
const app = express()
const cors = require('cors')

mongoose.connect(`mongodb://localhost:27017/bookDB`, (error) => {
    if (error) {
        console.log("Error", error);
    } else {
        console.log("Successfully Connected");
    }
})

const corsOptions = {
    origin: "http://localhost:8080"
};

app.use(cors(corsOptions));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

routes(app)

app.listen(8080, () => {
    console.log("Port is successfully running on 8080");
})

// app.use({urlEncode})
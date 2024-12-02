const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")


const app = express();

const PORT = process.env.PORT || 5000

dotenv.config();

// kahsjdkfhajkdfhkjadshfkj
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log("NOT CONNECTED TO NETWORK", err))

    app.listen(PORT, () => {
        console.log(`Server started at port no. ${PORT}`)
    })

    // helloewa;vj ds z
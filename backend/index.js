// import mongoose from "mongoose";
const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const app = express();
const Routes = require("./routes/route.js")
const PORT = process.env.PORT || 5001
dotenv.config();

app.use(express.json({ limit: '10mb' }));
app.use(cors());



try {
    mongoose.connect(
        "mongodb+srv://manasvi1238274:Manasvi1238274@cluster0.p8zho.mongodb.net/classprojectdatabase"
    );
    console.log("Db Connection success")
} catch (error) {
    console.error("DB connection failed with error: ", error)
}


// mongoose.connect(process.env.MONGO_URL, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })
//     .then(console.log("Connected to MongoDB"))
//     .catch((err) => console.log("NOT CONNECTED TO NETWORK", err))

app.use('/', Routes);

app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`)
});
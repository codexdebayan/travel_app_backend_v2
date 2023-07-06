const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
dotenv.config();

const connectDB = require("./config/dbconfig");

const hotelDataAddedToDBRouter = require("./routes/dataimport.router");
const categoryDataAddedToDBRouter = require("./routes/categoryimport.router");

const hotelRouter = require("./routes/hotel.router");
const categoryRouter = require("./routes/category.router");
const singleHotelRouter = require("./routes/singlehotel.router");
const authRouter = require("./routes/auth.router");
const wishlistRouter = require("./routes/wishlist.router");

const app = express();

app.use(cors());
app.use(express.json());
connectDB();
const PORT = 3500;

app.get("/",(req,res)=>{
    res.send("Frontend under construction")
})

app.use("/api/hotels",hotelRouter);
app.use("/api/hoteldata",hotelDataAddedToDBRouter);
app.use("/api/categorydata",categoryDataAddedToDBRouter);
app.use("/api/category",categoryRouter);
app.use("/api/hotels",singleHotelRouter);
app.use("/api/auth",authRouter);
app.use("/api/wishlist",wishlistRouter);


mongoose.connection.once("open",()=>{
    console.log("Connected to DataBase")
    app.listen(process.env.PORT || PORT ,()=>{
        console.log("Server is Up and Running")
    })
})
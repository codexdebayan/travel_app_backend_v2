const express = require('express');
const mongoose = require('mongoose');

const Hotel = require("../model/hotel.model");
const hotels = require("../data/hotels");

const router = express.Router();

router.route("/")
    .post(async (req, res) => {
        try{
            // await Hotel.remove();
            await Hotel.deleteMany();
            const hotelsInDB = await Hotel.insertMany(hotels.data);
            res.json(hotelsInDB)
        }catch(err){
            console.log(err);
            res.json({ message: "Could not add data to DB"})
        }
    })

module.exports = router;
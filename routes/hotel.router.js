const express = require ('express');
const router = express.Router();

const getAllHotelHandler = require("../controllers/hotelController");

router.route("/") //localhost:3500/api/hotels/ 
    .get(getAllHotelHandler)

module.exports = router;

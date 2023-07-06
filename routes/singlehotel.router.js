const express = require ('express');
const router = express.Router();

const singleHotelhandler = require("../controllers/singleHotelController");

router.route("/:id")
    .get(singleHotelhandler)

module.exports = router;    
const express = require("express");

const {
  getAllData,
  CreateData,
} = require("../Controller/CarController");

const router = express.Router();
router.route("/car").get(getAllData);
router.route("/newcar").post(CreateData);
module.exports = router;

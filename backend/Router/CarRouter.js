const express = require("express");

const {
  getAllData,
  CreateData,
  getSingleData,
  Updatedata
} = require("../Controller/CarController");

const router = express.Router();
router.route("/car").get(getAllData);
router.route("/newcar").post(CreateData);
router.route("/:id").get(getSingleData).put(Updatedata);
module.exports = router;

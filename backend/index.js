require('dotenv/config');
const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");


const carRouter = require("./Router/CarRouter");


const app = express();
app.use(cors());
app.use(express.json());

app.use("/", carRouter);
// app.use("/pay", paymentRouter);


// db connection URl
const db_URL =
  "mongodb+srv://admin:CarRental@cluster0.wxay6.mongodb.net/Rental?retryWrites=true&w=majority";

// make asyn function to connect BD and server
const Dbconnection = async () => {
  try {
    await mongoose.connect(db_URL, {
      // useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("db conected");
  } catch (error) {
    console.log(error);
  }
};
Dbconnection();

// const PORT=process.env.PORT || 5000;
// app.listen(PORT, console.log(`port run on ${PORT}`));

app.listen(process.env.PORT, () => {
  console.log(`server is running ${process.env.PORT}`);
});

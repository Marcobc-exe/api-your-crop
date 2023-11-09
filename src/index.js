require('dotenv').config();

const express = require("express");

const PORT = process.env.PORT || 3000; //  chose port from here like 8080, 3001

const app = express();

app.use(express.json());

app.use((res) => {
  res.status(404).json({
    message: "Not found",
    status: 404,
  });
});

console.log("new branch created, development!")

app.listen(PORT, () => {
  console.log(`Your Crop API is listening on ${PORT}!`);
});

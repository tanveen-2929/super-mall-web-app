const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//create a database connection ->u can also craete a separate file for this and then import/use that file here
mongoose.connect("mongodb+srv://tanveenk66:rXHMaiaxQzoqQXqb@cluster0.k5i5obj.mongodb.net/")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",   
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);
 
app.use(cookieParser());
app.use(express.json());


app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));
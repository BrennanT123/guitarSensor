import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/APIRouter.js";

const app = express();

dotenv.config();

console.log(process.env.FRONTEND_URL); //You dont need this for ESP32, but if you want to make a frontend you will need to set this up
const corsOptions = {
  origin: process.env.FRONTEND_URL, 
  optionsSuccessStatus: 200,
  credentials: true,
};



app.use(cors(corsOptions));

// JSON parsing middleware
app.use(express.json());



// Parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);




// Start the session
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`));


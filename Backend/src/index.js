import { app } from "./app.js";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";

dotenv.config();

const PORT = 5000;

connectDB()
  .then(() =>
    app.listen(process.env.PORT || PORT, () =>
      console.log(`Server running on port ${PORT}`)
    )
  )
  .catch((err) => console.log("Mongodb error: " + err));

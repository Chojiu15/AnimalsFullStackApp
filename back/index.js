const express = require("express");
const app = express();
const port = process.env.PORT || 3002;
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

require("dotenv").config();
const cors = require("cors");
app.use(cors());

const animalsRouter = require("./routes/animalsRouter");
const populationsRouter = require("./routes/populationsRouter");
app.use("/api/animals", animalsRouter);
app.use("/api/populations", populationsRouter);

app.listen(port, console.log(`Server is listening on port ${port}`));

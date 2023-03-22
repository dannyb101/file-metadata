const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const multer = require("multer");
const getFileMetadata = require("./controller");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(cors());
app.use(express.static("./public"));

const PORT = process.env.PORT || 3000;

app.post("/", upload.single("upfile"), getFileMetadata);

app.listen(PORT, console.log(`Listening on port ${PORT}...`));

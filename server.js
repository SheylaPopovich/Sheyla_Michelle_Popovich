require("dotenv").config
const express = require("express")
const cors = require("cors")
const path = require("path");
const { asapScheduler } = require("rxjs");

const app = express();

app.use(express.json())
app.use(cors())
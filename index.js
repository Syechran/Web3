require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.static(_dirname));
app.use(express.json());
const path = require("path");
const ethers = require('ethers');

var port = 3000;

app.get("/",(req,res) => {
  res.sendFile(path.join(_dirname."index.html"));
})

app.get("/index.html", (req,res) => {
  res.sendFile(path.join(_dirname,"index.html"));
})

const API_URL = process.env.API_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_KEY;

const{}

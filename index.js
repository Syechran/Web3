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

const { abi } = require('./artifacts/contracts/TaskToDo.sol/TaskToDo.json');
const provider = new ethers.provider.JsonRpcProvider(API_URL);

const signer = new ethers.Wallet(PRIVATE_KEY, provider);

const contractInstance = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);

app.post("/changeStatus", async (req, res) => {
    var id = req.body.id;

    async function storeDataInBlockchain(id) {
        console.log("Changing the task status...");
        const tx = await contractInstance.markAsFinished(id);
        await tx.wait();
    }

    await storeDataInBlockchain(id);

    res.send("The task has been changed in the smart contract");
});

app.listen(port, function() {
  console.log("App is listening on port 3000");
});


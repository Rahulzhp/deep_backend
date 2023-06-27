const express = require("express");
const cors = require("cors");

const { connection } = require("./config/db");
const { PostModel } = require("./Model/post")

require('dotenv').config()



const app = express()

app.use(express.json())
app.use(
    cors({
        origin: "*",
    })
);


app.get("/", async (req, res) => {
    try {
        let data = await PostModel.find()
        res.send({ data })
    } catch (err) {
        res.send({ "err": "Something went wrong" })
    }
})

app.post("/add", async (req, res) => {
    let data = req.body
    try {
        let project = new PostModel(data)
        await project.save()
        res.send("posted")

    } catch (er) {
        console.log("er", er)
    }
})

app.listen(process.env.port, async () => {
    try {
        await connection;
        console.log("connected to db")

    } catch (er) {
        console.log(er)
    }
    console.log(`server is running in port ${process.env.port}`)
})
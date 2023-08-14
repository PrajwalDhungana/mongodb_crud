const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/StudentRoute')

require('dotenv').config()
const cors = require('cors')

const app = express()
const PORT = process.env.PORT | 5000

app.use(express.json())
app.use(cors())

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected!"))
    .catch((error) => console.log("ERROR CONNECTING TO MONGO_DB :: ", error))

app.use("/api", routes)

app.listen(PORT, () => {
    console.log(`Listening to PORT: ${PORT}`)
})
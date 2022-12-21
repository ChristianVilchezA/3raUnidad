const express = require("express");
const mongoose = require("mongoose")

require("dotenv").config()
mongoose.set('strictQuery', true)

const userRoutes = require("./routes/user")
const clienteRoutes = require("./routes/cliente")

const cors = require ('cors')

const app = express();
const port = process.env.PORT || 9000; 


//middleware
app.use(express.json())
app.use(cors())
app.use('/api', userRoutes)
app.use('/api', clienteRoutes)

//routes
app.get("/", (req, res) =>{
    res.send("Welcome tu my API")
})
 
//mongodb connection 
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log("Connected to MongoDb Atlas"))
.catch((error) => console.error(error));


app.listen(9000, () => console.log("server listening on port", port))

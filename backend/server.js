import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import userRoutes from './routes/user.route.js'
import exploreRoutes from './routes/explore.route.js'
import connectMongoDB from './db/connectMongoDB.js'

dotenv.config();

const app = express();
app.use(cors())

app.get("/", (req,res) => {
    res.send("Server is ready")
})

//Fetch user profiles and repos
app.use("/api/users", userRoutes)
//Get the explore page
app.use("/api/explore", exploreRoutes)

app.listen(5000, () => {
    console.log('Server started on http://localhost:5000');
    connectMongoDB();
})
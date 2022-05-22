import express from "express";
import mongoose from 'mongoose';
import router from "./routes/user-routes";
import blogRouter from "./routes/blog-routes";
import cors from "cors";
import 'dotenv/config'
const app = express();
app.use(cors());    //cors is used so that we can send request from on server to another, which is restricted in most browsers
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

//mongoose.connect always carries a then and catch request with it
mongoose.connect(
    "mongodb+srv://Adya78:7654321@cluster0.b2rqf.mongodb.net/Blog?retryWrites=true&w=majority"
    ).then(()=> app.listen(process.env.PORT || 5000)).then(()=>console.log("Connected TO Database and Listensing TO Localhost 5000"))
.catch((err)=> console.log(err));





 
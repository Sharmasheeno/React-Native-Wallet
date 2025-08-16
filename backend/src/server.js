import express from "express";
import dotenv, { config } from "dotenv";
import {initDB} from "./config/db.js";
import transactionsRoute from "./routes/transactionsRoute.js"
import rateLimiter from "./middleware/rateLimiter.js";
dotenv.config();

const app=express();
//Middleware
app.use(rateLimiter);
 app.use(express.json());

// app.use((req,res,next)=>{
//     console.log("Hi we hit a req ,and method res is ",req.method)
//     next();
// })

const PORT=process.env.PORT || 5001

app.get("/",(req,res)=>{
    res.send("its working")
})

app.use("/api/transactions",transactionsRoute);

initDB().then(()=>{  
app.listen(PORT,()=>{
    console.log("server is up and running on port",PORT);
});
})
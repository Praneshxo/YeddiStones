import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
import {sql} from "./config/db.js"

dotenv.config();
const app =express();
const PORT =process.env.Port;

console.log(PORT);

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use("/api/products" ,productRoutes);

async function initDB() {
    try{
        await sql`
        CREATE TABLE IF NOT EXISTS test(
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL,
            price DECIMAL(10,2) NOT NULL
        );
        `
            ;

            console.log("Vetri");
    }
    catch(error){
        console.log("Error initDB",error);
    }
}


app.listen(PORT, ()=>{
    console.log("server is running");
});


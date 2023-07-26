const swaggerUI=require("swagger-ui-express")
const swaggerJsDoc=require("swagger-jsdoc")
const express=require('express');
const cors=require('cors')

const PORT=4001;
const app=express();
require('dotenv').config();

app.use(cors())
app.use(express.json())

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Crypto Hunter's Documentation",
            version: "1.0.0",
            description: "A simple API Documentation for Crypto Hunter",
        },
        servers: [
            {
                url: process.env.cryptoHunterAPI,
            },
            {
                url: process.env.local,
            }
        ],
    },
    apis: ["./routes/try.yaml"],
};

const specs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
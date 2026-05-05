import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import mongoose from 'mongoose';
require("dotenv").config();
const app = express();
app.use (express.json());

mongoose.connect(process.env.mongo_uri)
.then(()=>console.log("Db connected"))
.catch(err =>console.log("failed"));

const user = mongoose.model("User",{
    name = String,
    email = String,
    passward = String
});

const task = mongoose.model("Task",{
    userId = String,
    title = String
});


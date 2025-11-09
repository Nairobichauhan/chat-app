import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.post("/register", async (req,res)=>{
  try{
    const {name,email,password} = req.body;
    await User.create({name,email,password});
    res.json({message:"registered"});
  }catch(err){
    res.status(500).json({message:"register failed"});
  }
});

router.post("/login", async (req,res)=>{
  try{
    const {email,password} = req.body;
    const user = await User.findOne({email,password});
    if(!user) return res.status(400).json({message:"invalid"});
    res.json({message:"login success"});
  }catch(err){
    res.status(500).json({message:"login failed"});
  }
});

export default router;

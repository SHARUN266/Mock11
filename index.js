const express = require("express");
const mongoose = require("mongoose");
const cors=require("cors")
const ProductModel=require("./Models/Product.Schema")
const BookMarkModel=require("./Models/Bookmark.schema")
const app = express();
app.use(cors());
const PORT=process.env.PORT||8080
app.use(express.json());
app.get("/",async (req,res)=>{
    const {filter}=req.query
    console.log(filter)
    
    let prod=await ProductModel.find()
   
    res.send(prod)
})
app.post("/",async (req,res)=>{
    const {title,quantity,priority,Description}=req.body
    try{
        const product=new ProductModel({title,quantity,priority,Description});
        await product.save()
        res.status(200).send("Product Add successfully")
    }catch(e){
        res.status(404).send("Error")
    }
   
})
app.get("/bookmark",async (req,res)=>{
   
    
    let prod=await BookMarkModel.find()
   
    res.send(prod)
})
app.post("/bookmark",async (req,res)=>{
    const {title,quantity,priority,Description}=req.body
    try{
        const product=new BookMarkModel({title,quantity,priority,Description});
        await product.save()
        res.status(200).send("Bookmark Add successfully")
    }catch(e){
        res.status(404).send("Error")
    }
   
})

app.delete("/delete/:id",async (req,res)=>{
  
 
    //res.send("hello")
    try{
       await ProductModel.findByIdAndDelete({_id:id})
        //await product.save()
        res.status(200).send("Delete Add successfully")
    }catch(e){
        res.status(404).send(e)
    }
})
mongoose
  .connect(
    "mongodb+srv://sharun:123@atlascluster.qwa1fxi.mongodb.net/mock11?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(PORT, () => {
      console.log("Your app is running now 8080");
    });
  });

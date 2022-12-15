const {Schema,model} =require("mongoose");

const Bookmark=new Schema({
    title:String,
    quantity:Number,
    priority:String,
    Description:String,
},
{
    timestamps:true
},
{
    versionKey:false
},

)

const  BookModel=model("bookmark",Bookmark)
module.exports=BookModel
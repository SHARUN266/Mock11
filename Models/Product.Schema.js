const {Schema,model} =require("mongoose");

const Product=new Schema({
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

const ProductModel=model("product",Product)
module.exports=ProductModel
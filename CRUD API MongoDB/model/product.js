const mongoose = require('mongoose');
const productSchema= mongoose.Schema({

    
    FirstName:{type:String,maxlength:15},

     LastName:{type:String,maxlength:15},

     Phone:{type:Number,unique:true,
        validate(value){if(value.toString().length!=10||value<0){
        throw new Error("Enter a valid number")}}},
     Age:{type:Number,validate(value){if(value<0){
        throw new Error("Enter a valid Age")}}},

     City:String,

     Salary:{type:Number,max:50000,min:5000},

     Date:{type:Date,default:Date.now},

     Active:Boolean
});

module.exports= mongoose.model("collection3",productSchema);

// imports
const express = require("express") //importing express package
const app = express() // creates a express application
const data = require ('./data')
const dotenv = require('dotenv').config()


console.log(process.env.ZAID_MESSAGE)

app.get('/',(req,res)=>{
res.render('./homepage.ejs')
})

app.get('/resturaunts',(req,res)=>{
    res.render('./all-resturaunts.ejs' , {data: data})
})

app.get('/resturaunts/:resturantId',(req,res)=>{
    const foundResturant = data.find((oneResturant)=>{
      return oneResturant.id === Number( req.params.resturantId)
    })
    res.render('./resturaunts-details.ejs',{data:foundResturant})
})







app.use(express.static('public')); //all static files are in the public folder






// Routes go here


 
 
 




app.listen(3000,()=>{
    console.log("Listening on port " + 3000)
}) // Listen on port 3000



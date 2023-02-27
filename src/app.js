const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = 8000;
//process.env.PORT || 3000

const static_path = path.join(__dirname,"../public");
const templates_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");


app.set('view engine','hbs');
app.set('views',templates_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));





//Routing
app.get("",(req,res) =>{
    res.render("index");

})

app.get("/about",(req,res) =>{
    res.render('about');

})

app.get("/weather",(req,res) =>{
    res.render("weather");

})

// If all of this does not match then throw 404 error.
// We use "*"
app.get("*",(req,res) =>{
    res.render("error404");

})



app.listen(port,()=>{
    console.log(`Listening to Port no ${port}`);
})


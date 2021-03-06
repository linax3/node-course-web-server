const express = require('express'); 
const hbs = require('hbs');
const fs =require('fs');

const port = process.env.PORT || 3000;
var app = express(); 

hbs.registerPartials(__dirname + '/views/partials')

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public')); 

app.use((req, res, next) => { 
    var now = new Date().toString();

    console.log(`${now}: ${req.method} ${req.url}`); 
    next(); 
}); 

hbs.registerHelper('getCurrentYear', () => {
   return new Date().getFullYear()
}); 

hbs.registerHelper('screamIt', (text) => {
    return text 
}); 

app.get('/', (req, res) => {
   res.render('Home.hbs' ,{
       pageTitle: 'home page', 
       welcomeMessage: 'Welcome', 
       currentYear: new Date().getFullYear()
   });
   });
; 

app.get('/about', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'About page', 
    }); 
}); 

app.get('/bad', (req,res) => {
    res.send({
        errorMessage: 'not reachable'
    });
}); 

app.get('/projects', (req,res) => {
    res.render('projects.hbs' , {
        pageTitle: 'Projects'
    });
}); 

app.listen(port, ()=> {
    console.log(`Server is up on ${port}`);
}
); 
const express=require('express');
const morgan=require('morgan');
const mongoose=require('mongoose');
const blogRoutes=require('./routes/blog');

//Create Express App
const app=express();


//Connect to mongodb 
const dbURI = "mongodb+srv://rep_ninja:199mauli@nodecc.rhsfk.mongodb.net/node-cc?retryWrites=true&w=majority";


//Listen if connection is initialized
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err))


//Set View Engine
app.set('view engine', 'ejs');


//Middleware and Static Files

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));



//Home Page
app.get('/', (req, res) => {

    res.redirect('/blogs');
});

app.use('/blogs',blogRoutes);


//About Page
app.get('/about', (req, res) => {
      res.render('about', {title: 'About Page'});
});




//404 Page
app.use((req, res) => {
    res.render('404');
})




const express = require("express")
const path = require("path")
const app=express()
const bodyparser=require("body-parser")
var mongoose=require('mongoose')
mongoose.connect('mongodb://localhost/AASANAinfo' ,{useNewUrlParser: true }  )
const port =80

var infoSchema = new mongoose.Schema({
    name: String,
    age: String,
    gender: String,
    Phone: String,
    whatsapp: String,
    email: String,
    medical: String,
    mypt: String,
    myday: String,
    mytime: String,
    address: String
})

var info=mongoose.model('info',infoSchema )

app.use(express.static('static'))
app.use('/static', express.static('static'))
app.use(express.urlencoded())

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req,res)=>{
    res.status(200).render('home.pug')
})
app.get('/pt', (req,res)=>{
    res.status(200).render('pt.pug')
})
app.get('/on', (req,res)=>{
    res.status(200).render('on.pug')
})
app.get('/session', (req,res)=>{
    res.status(200).render('session.pug')
})
app.get('/tut', (req,res)=>{
    res.status(200).render('tut.pug')
})
app.get('/fit', (req,res)=>{
    res.status(200).render('fit.pug')
})
app.get('/headache', (req,res)=>{
    res.status(200).render('headache.pug')
})
app.get('/hbp', (req,res)=>{
    res.status(200).render('hbp.pug')
})
app.get('/back', (req,res)=>{
    res.status(200).render('back.pug')
})
app.get('/digestion', (req,res)=>{
    res.status(200).render('digestion.pug')
})
app.get('/asthma', (req,res)=>{
    res.status(200).render('asthma.pug')
})
app.get('/onnext', (req,res)=>{
    res.status(200).render('onnext.pug')
})
app.get('/ptnext', (req,res)=>{
    res.status(200).render('ptnext.pug')
})
app.get('/sessionnext', (req,res)=>{
    res.status(200).render('sessionnext.pug')
})

//POST requets

app.post('/on', (req,res)=>{
    var myData=new info(req.body);
    myData.save();
    res.status(200).render('onnext.pug')
})

app.post('/pt', (req,res)=>{
    var myData=new info(req.body);
    myData.save();
    res.status(200).render('ptnext.pug')
})
app.post('/session', (req,res)=>{
    var myData=new info(req.body);
    myData.save();
    res.status(200).render('sessionnext.pug')
})

//Server port
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
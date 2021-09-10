
const express = require('express');
const mongoose = require('mongoose');
const Feedback = require('./models/messages')
require('dotenv').config();

const app = express();




// MONGODB CONNECTION------------------------------------

const dbURI = process.env.API_KEY;
const PORT = process.env.PORT || 5000;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => app.listen(PORT, console.log('listening to PORT ' + `${PORT}`)))
.catch((err) => console.log(err))

// MIDDLEWARE----------------------------------

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json()); 



// ROUTES ---------------------------------------

app.get('/', (req, res) => {
    res.render('index.ejs', {title: 'DibDevs'}) 
});

app.post('/api/feedback', (req, res) => {

     const feedback = new Feedback(req.body)

     console.log(feedback)

     feedback.save()
    .then((result) => {
        res.redirect('/')
    }).catch((err) => console.log(err))

})

app.get('/getFeedback', async (req, res) => {

    const feedback = await Feedback.find({})
    res.json(feedback)

    
})


app.use((req, res) => {
    res.status(404).render('404', {title:'Page Not Found'})
});



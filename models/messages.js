const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const feedbackSchema = new Schema({

    name: { 
            type: String
           
    },

    feedback: {

            type: String
      
    }
       
});


const Feedback = mongoose.model('Message', feedbackSchema) 

module.exports = Feedback;


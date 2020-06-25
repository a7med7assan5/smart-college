var mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://marwan:M@r0M@r01212@cluster0-uheai.mongodb.net/Smart-College?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
//     console.log("Your DB (smart-college) Connected");
// });

mongoose.connect('mongodb://localhost:27017/smart-college', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Your DB (smart-college) Connected");
});
require('dotenv').config();
let express = require('express');
const app = express();
const sequelize = require('./db');

const user = require('./controllers/usercontroller');
const journal = require('./controllers/journalcontroller');


sequelize.sync();

//===========================================================//
// NEW CODE START********

// app.use('/test', function(req, res) {
//     res.send("This is a message from the test endpoint on the server")
// });

// app.use('/Tommy', function(req, res) {
//     res.send("My name is Tommy and I am 41 years old")
// });

// NEW CODE END*******
//==================================================================//

// Have endpoint of journal/ practice
// Send a response from that endpoint (This is a practice route)

app.use(require('./middleware/headers'));
app.use(express.json());

// All OPTIONS requests return a simple status: 'OK'
app.options('*', (req, res) => {
    res.json({
        status: 'OK'
    });
});



app.use('/user', user);

app.use(require('./middleware/validate-session'));
app.use('/journal', journal);


app.listen(3000, function() {
    console.log("App is listening on part 3000");
});
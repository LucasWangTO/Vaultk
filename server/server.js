require('dotenv').config({path: '../.env'})
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Link = require('./models/link')
const Count = require('./models/count')
const cors = require('cors')

app.use(cors())
app.use(express.json())

// Connect to MongoDB
const mongoUrl = process.env.MONGODB_URI

console.log("Connecting to ", mongoUrl)

mongoose.connect(mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true})
.then(result => {
    console.log("Connected to MongoDB")
})
.catch((error) => {
    console.log("Error connecting to MongoDB: ", error.message)
})


// Controllers

app.get('/', (req, res) => {
    res.send("<pre>Vaultk API</pre>")
})

app.post('/api/urls', async (req, res) => {
    const body = req.body;
    const link = await Link.find({ending: body.ending});

    if (link.length === 0) {
        const newLink = new Link({
            url: body.url,
            ending: body.ending
        });
        let savedLink = await newLink.save();


        // Find total shortened urls
        const count = await Count.find({});
        let savedCount = null;

        if (count.length === 0) {
            const newCount = new Count({
                totalShortened: 1
            });
            savedCount = await newCount.save();
        } else {
            count[0].totalShortened += 1;
            savedCount = await count[0].save();
        }

        res.json(savedCount);
    } else {
        res.status(409).json({
            error: "Already used ending"
        });
    }
})

app.get('/api/count', (req, res) => {
    Count.findOne({})
    .then(count => {
        if (count) {
            res.send(`${count.totalShortened}`);
        } else {
            res.send("0");
        }
    })
})

app.get('/:ending', (req, res) => {
    Link.findOneAndRemove({ending: req.params.ending})
    .then(link => {
        if (link) {
            res.send(link.url)
         } else {
            res.send("https://vaul.tk")
        }
    })
})

// Setup Server

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`)
})
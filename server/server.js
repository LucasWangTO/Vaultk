require('dotenv').config({path: '../.env'})
const express = require('express')
const app = express()
const Link = require('./models/link')
const cors = require('cors')

app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.send("<pre>Vaultk API</pre>")
})

app.post('/api/urls', (req, res) => {
    const body = req.body
    Link.find({ending: body.ending})
    .then(link => {
        if (link.length === 0) {
            const link = new Link({
                url: body.url,
                ending: body.ending
            })
            link.save().then(savedLink => {
                res.json(savedLink)
            })
        } else {
            res.status(409).json({
                error: "Already used ending"
            })
        }
    })
})

app.get('/:ending', (req, res) => {
    Link.findOneAndRemove({ending: req.params.ending})
    .then(link => {
        if (link) {
            res.redirect(link.url)
         } else {
            res.redirect('/')
        }
    })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log("Server Running!")
})
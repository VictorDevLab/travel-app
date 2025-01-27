const express = require('express')
const { engine } = require('express-handlebars');

const app = express()

const PORT = process.env.PORT || 3000;
//configure handlebars views engine
app.engine('handlebars', engine({
    defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')

app.get("/", (req, res) => res.render("home"))
app.get("/about", (req, res) => res.render("about"))
//custom 404
app.use((req, res)=> {
    res.type('text/plain')
    res.status(404)
    res.send("404 - Not Found!")
})
//custom 500
app.use((err, req, res, next)=> {
    console.log(err)
    res.type('text/plain')
    res.status(500)
    res.send("500 - Not Found!")
})

app.listen(PORT, ()=> {
    console.log(`app started running on port ${PORT} `)
})
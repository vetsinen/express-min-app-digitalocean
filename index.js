const express = require('express')
const path = require("path");
const nunjucks = require("nunjucks");
const app = express()
const port = 8080

// set the view engine to ejs
app.set('view engine', 'nunjucks');
nunjucks.configure('views', {
    autoescape: true,
    express: app
});
app.use(express.static( path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    const data = ['fdfsdf','4fsdf44','vndssxgs','jxgwxhww']
    res.render('index.html', {data:data});
    // res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
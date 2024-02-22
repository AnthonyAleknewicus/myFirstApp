const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome To the Homepage!')
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit!</h1>`)
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing Post Id: ${postId} on the ${subreddit} subreddit!</h1>`)
})

app.get('/cats', (req, res) => {
    res.send('MEOW!!')
})

app.get('/dogs', (req, res) => {
    res.send('WOOF!!')
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send('<h1>NOTHING FOUND IF NOTHING SEARCHED!!!')
    }
    res.send(`<h1>Search Results for: ${q}</h1>`);
})
// Catch all
app.get('*', (req, res) => {
    res.send('I do not know this route!')
})



// any time we get an incoming request, app.use runs. params are incoming REQuest by parsing the incoming http request info and outgoing RESponse
// app.use((req, res) => {
//     console.log("WE HAVE A NEW REQUEST!")
//     res.send("Hello! We got your request! This is a response!")
    // res.send({color: 'red', name: 'blue', age: 8});
    // res.send('<h1>Scandinavian Honkys!</h1>')
// })

// the listen method starts the server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
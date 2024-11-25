import express from "express" // this is module js improt  // new way  // asyncronus 
// const express = require('express') // this is comman js import  // old way // ayncronus 
const app = express()
const Port = process.env.PORT || 2000

app.get('/', (req, res) => {
    res.send('<h1>home</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h1>youtube</h1>')

})

// get a list of joks 
app.get('/jokes', (req, res) => {
    const jokes = [
        {
            setup: 'Why don\'t scientists trust atoms?',
            punchline: 'Because they make up everything!'
        },
        {
            setup: 'Why was the math book sad?',
            punchline: 'It had too many problems.'
        },
        {
            setup: 'Why did the scarecrow win an award?',
            punchline: 'Because he was outstanding in his field!'
        },
        {
            setup: 'Why don\'t skeletons fight each other?',
            punchline: 'They don\'t have the guts.'
        },
        {
            setup: 'What do you call fake spaghetti?',
            punchline: 'An impasta!'
        },
        {
            setup: 'Why did the bicycle fall over?',
            punchline: 'Because it was two-tired.'
        },
        {
            setup: 'Why can\'t you give Elsa a balloon?',
            punchline: 'Because she will let it go.'
        },
        {
            setup: 'How does a penguin build its house?',
            punchline: 'Igloos it together.'
        },
        {
            setup: 'What do you call cheese that isn\'t yours?',
            punchline: 'Nacho cheese.'
        },
        {
            setup: 'Why did the golfer bring two pairs of pants?',
            punchline: 'In case he got a hole in one.'
        }
    ];

    res.send(jokes)

})

app.listen(Port, () => {
    console.log(`${Port} is running , server is seccsefuly running on  port ${Port}`);
})
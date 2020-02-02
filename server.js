const express = require('express');

const wizdom = require('./wizdom');
const mrrogers = require('./mrrogers');


const app = express();

const yellow = "\x1b[33m"
const magenta = "\x1b[35m"
const cyan = "\x1b[36m"


app.listen(3000, () => {
    console.log('Server listening on port 3000, but more importantly:')
    
    console.log(magenta, wizdom.einstein() + ' - Einstein')
    console.log(cyan, wizdom.mencius() + ' - Mencius')
    console.log(yellow, wizdom.twain() + ' - Mark Twain')

    console.log(cyan, mrrogers() + ' - Mr. Rogers')
})
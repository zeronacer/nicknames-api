'use strict';

const fs = require('fs');
const express = require('express');
const app = express();
const port = 3000;

// routes
// informative base route
app.get('/', (req, res) => {
	res.send('Hello World!');
});

// routes for words
// get adjective
app.get('/api/adjective', (req, res) => {
	return res.json({
		success: true,
		data: {
            word: chooseRandomWord('adjective')[0]
        },
	});
});
// get compound
app.get('/api/compound', (req, res) => {
	return res.json({
		success: true,
		data: {
            word: chooseRandomWord('compound')[0]
        },
	});
});
// get subject
app.get('/api/subject', (req, res) => {
    let word = chooseRandomWord('subject')
	return res.json({
		success: true,
		data: {
            word: word[0],
            genus: word[1]
        },
	});
});

// start application
app.listen(port, () => {
	console.log('Nickname API listening on port ' + port);
});

function chooseRandomWord(type) {
	let word = ['',0];
	switch (type) {
		case 'adjective':
			word[0] = readFromFS('data/adjektive.json');
			break;
		case 'compound':
			word[0] = readFromFS('data/compounds.json');
			break;
		case 'subject':
			let type = Math.floor(Math.random() * 3);
            word[1] = type;
			switch (type) {
				case 0:
					word[0] = readFromFS('data/maskulin.json');
					break;
				case 1:
					word[0] = readFromFS('data/feminin.json');
					break;
				case 2:
					word[0] = readFromFS('data/neutrum.json');
                    break;
			}
			break;
	}
	return word;
}

function readFromFS(path) {
	let raw = fs.readFileSync(path);
    let data = JSON.parse(raw);
    let max = data.length;
    let random = Math.floor(Math.random()*max);
    return data[random];
}


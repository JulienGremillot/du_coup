let recognizer;

function showAlert(score) {
 document.querySelector('#score').textContent = Math.round(score * 100)
 $("#success-alert").fadeTo(2000, 500).slideUp(500, function() {
   $("#success-alert").slideUp(500);
 });
}

function predictWord() {
 // Array of words that the recognizer is trained to recognize.
 const words = recognizer.wordLabels();
 recognizer.listen(({scores}) => {
   // Turn scores into a list of (score,word) pairs.
   scores = Array.from(scores).map((s, i) => ({score: s, word: words[i]}));
   showAlert(scores[1].score)
 }, {probabilityThreshold: 0.5});
}

$("#success-alert").hide();

async function app() {
 recognizer = speechCommands.create(
        'BROWSER_FFT',
        null,
        'http://localhost:8000/model.json',  // URL to the custom model's model.json
        'http://localhost:8000/metadata.json'  // URL to the custom model's metadata.json
 );
 await recognizer.ensureModelLoaded();
 predictWord()
}

//import * as tf from '@tensorflow/tfjs-core';
//import * as tfl from '@tensorflow/tfjs-layers';
//import * as speechCommands from '@tensorflow-models/speech-commands';


app();

let recognizer;

function showAlert(score) {
 document.querySelector('#score').textContent = Math.round(score * 100)
 $("#success-alert").fadeTo(2000, 500).slideUp(500, function() {
   $("#success-alert").slideUp(500);
 });
}

const THRESHOLD = 0.75
function predictWord() {
 // Array of words that the recognizer is trained to recognize.
 const words = recognizer.wordLabels();
 console.log("0:"+words[0]+ " 1:"+words[1] + " 2:" + words[2])
 recognizer.listen(({scores}) => {
   // Turn scores into a list of (score,word) pairs.
   console.log(scores[2])
   scores = Array.from(scores).map((s, i) => ({score: s, word: words[i]}));
   if (scores[2].score > THRESHOLD) {
        showAlert(scores[2].score)
   }
 }, {probabilityThreshold: THRESHOLD});
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

app();

// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = 'This is the text string that you will generate with your script';
// Arrays based on the assignment (nouns, verbs, adjectives, other nouns, places)
var nouns = ["dog", "teacher", "book", "car", "tree"]; // Subject nouns
var verbs = ["runs", "jumps", "teaches", "writes", "drives"];
var adjectives = ["fast", "brilliant", "funny", "quiet", "colorful"];
var otherNouns = ["garden", "classroom", "road", "building", "ocean"]; // Object nouns
var places = ["Paris", "New York", "Tokyo", "Toronto", "London"];

// Buttons
var nounButton = document.getElementById('nounButton');
var verbButton = document.getElementById('verbButton');
var adjectiveButton = document.getElementById('adjectiveButton');
var noun2Button = document.getElementById('noun2Button');
var placeButton = document.getElementById('placeButton');
var speakButton = document.querySelector('button');


/* Functions
-------------------------------------------------- */
// Function to pick a random item from an array
function getRandomItem(array) {
	return array[Math.floor(Math.random() * array.length)];
}

// Function to update the sentence display
function updateDisplayedSentence() {
	document.getElementById('sentence').textContent = textToSpeak;
}


function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for each button to concatenate words to textToSpeak
nounButton.addEventListener('click', function() {
	textToSpeak += " " + getRandomItem(nouns);
	updateDisplayedSentence();
});

verbButton.addEventListener('click', function() {
	textToSpeak += " " + getRandomItem(verbs);
	updateDisplayedSentence();
});

adjectiveButton.addEventListener('click', function() {
	textToSpeak += " " + getRandomItem(adjectives);
	updateDisplayedSentence();
});

noun2Button.addEventListener('click', function() {
	textToSpeak += " " + getRandomItem(otherNouns);
	updateDisplayedSentence();
});

placeButton.addEventListener('click', function() {
	textToSpeak += " in " + getRandomItem(places) + ".";
	updateDisplayedSentence();
});
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function() {
	speakNow(textToSpeak);
}

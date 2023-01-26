
const wordList = [
    {
        word: "football",
        hint: "it is called soccer in other countries"
    },
    {
        word: "spatula",
        hint: "spongebob uses this item to cook"
    },
    {
        word: "toes",
        hint: "head, shoulders, knees, and ...."
    }
    
]
// console.log(wordList)
const input=document.querySelector(".inputs"),
hintTag=document.querySelector(".hint span"),
guessLeft=document.querySelector(".guess-left span"),
wrongLetter=document.querySelector(".wrong-letter span"),
resetBtn=document.querySelector(".reset-btn")

let word,maxGuesses,incorrectLetters=[],correctLetters=[];

function randomWords() {
    let randItem=wordList[Math.floor(Math.random)* wordList.length];
    maxGuesses=word.length>=5 ? 8 : 6;
    correctLetters=[];
    incorrectLetters=[];
    wrongLetter.innerText=incorrectLetters;
    let html="";
    for(let i = 0; i < word.length; i++) {
        html+= <input type
    }

}

//set up event listener for input//
//use e.target.value//




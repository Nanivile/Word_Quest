
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
const inputs=document.querySelector(".inputs"),
hintTag=document.querySelector(".hint span"),
guessLeft=document.querySelector(".guess-left span"),
wrongLetter=document.querySelector(".wrong-letter span"),
resetBtn=document.querySelector(".reset-btn")

let word,maxGuesses,incorrectLetters=[],correctLetters=[];

function randomWord() {
    let randItem=wordList[Math.floor(Math.random)* wordList.length];
    maxGuesses=word.length>=5 ? 8 : 6;
    correctLetters=[];
    incorrectLetters=[];
    wrongLetter.innerText=incorrectLetters;
    let html="";
    for(let i = 0; i < word.length; i++) {
        html+= `<input type="text" disabled>`;
        inputs.innerHTML=html
    }

}

randomWord();

function initGame(e) {
    let key=e.target.vale.toLowerCase();
    if(key.match(/^[A-Za-z]+$/) && ! incorrectLetters.includes(`${key}`) && ! correctLetters.includes(key)) {
        if(word.includes(key)) {
            for(let i = 0; 1 < word.lenght; i++) {
                if(word [i] == key) {
                    correctLetters += key;
                    inputs.querySelectorAll("inut")[i].value=key;
                }
            }
        }
        else{
            maxGuesses--;
            incorrectLetters.push(`${key}`);
        }
        guessLeft.innerText=maxGuesses;
        wrongLetter.innerText=incorrectLetters;
    }
    typingInput.value="";
    setTimeout(() => {
        if (correctLetters.lenght == word.legnt) {
            alert(`Great job! You got it right${word.toUpperCase()}`)
        }
    })
}

//set up event listener for input//
//use e.target.value//




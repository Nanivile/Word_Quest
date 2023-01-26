
const wordList = [
    {
        word: "shoe",
        hint: "you wear it over your socks"
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
typingInput=document.querySelector(".typing-input");

let word,maxGuesses,incorrectLetters=[],correctLetters=[];

function randomWord() {
    let randItem=wordList[Math.floor(Math.random()* wordList.length)];
    word=randItem.word;
    hintTag.innerText=randItem.hint;
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
    let key=e.target.value.toLowerCase();
    if(key.match(/^[A-Za-z]+$/) && ! incorrectLetters.includes(`${key}`) && ! correctLetters.includes(key)) {
        if(word.includes(key)) {
            for(let i = 0; 1 < word.lenght; i++) {
                if(word [i] === key) {
                    correctLetters += key;
                    inputs.querySelectorAll("input")[i].value=key;
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
        if (correctLetters.lenght === word.legnth) {
            alert(`Great job! You got it right ${word.toUpperCase()}`);
            return randomWord();
        
        }
        else{
            if(maxGuesses < 1) {
                alert("Oh no! Out of Guesses, try again");
                for(let i = 0; i < word.length; i++) {
                    inputs.querySelectorAll("input")[i].value=word[i];
                }
            }
        }
    },100);
}

resetBtn.addEventListener("click",randomWord);
typingInput.addEventListener("input",initGame);
inputs.addEventListener("click",()=>typingInput.focus());
document.addEventListener("keydown",()=>typingInput.focus());

//set up event listener for input//
//use e.target.value//





const wordList = [
    {
        word: "shoe",
        hint: "You wear it over your socks"
    },
    {
        word: "clarinet",
        hint: "Squidwards musical instrument of choice"
    },
    {
        word: "toes",
        hint: "Head, shoulders, knees, and ...."
    },
    {
        word: "spider",
        hint: "Insect that wraps its pray like a burrito"
    },
    {
        word: "chair",
        hint: "You use it to sit"
    },
    {
        word: "island",
        hint: "Land surrounded by water"
    },
    {
        word: "github",
        hint: "A code hosting platform"
    },
    {
        word: "html",
        hint: "Markup language for the web"
    },
    {
        word: "vapor",
        hint: "The gas state of water"
    },
    {
        word: "computer",
        hint: "A bigger version of a laptop"
    },
    {
        word: "bride",
        hint: "A woman getting married"
    },
    {
        word: "dog",
        hint: "A mans best friend"
    },
    {
        word: "venus",
        hint: "A planet in our solar system"
    },
    {
        word: "toph",
        hint: "She taught the avatar to earth bend"
    },
    {
        word: "thanos",
        hint: "The antagonist of End Game"
    },
    {
        word: "shrek",
        hint: "Dream works movie with a donkey"
    },
    {
        word: "piano",
        hint: "Instrument with keys"
    },
    {
        word: "calm",
        hint: "opposite of anxious"
    },
    {
        word: "becon",
        hint: "Delicious treat made from pigs"
    },
    {
        word: "movie",
        hint: "A cinematic film"
    },
    {
        word: "twin",
        hint: "Two people who look alike"
    },
    {
        word: "timber",
        hint: "Wood used for building"
    },
    {
        word: "healthy",
        hint: "Physicaly and mentally"
    },
    {
        word: "gravity",
        hint: "The force that pull us down"
    },
    {
        word: "herb",
        hint: "Another word for weed"
    },
    {
        word: "piano",
        hint: "Instrument with keys"
    },
    {
        word: "novel",
        hint: "People read this in their past time"
    },
    {
        word: "confuse",
        hint: "Your lost"
    },
    {
        word: "truck",
        hint: "Ford f-150 "
    }

    
]

const inputs=document.querySelector(".inputs"),
hintTag=document.querySelector(".hint span"),
guessLeft=document.querySelector(".guess-left span"),
wrongLetter=document.querySelector(".wrong-letter span"),
resetBtn=document.querySelector(".reset-btn"),
typingInput=document.querySelector(".typing-input")

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
            for(let i = 0; i < word.length; i++) {
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
        if (correctLetters.length === word.length) {
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






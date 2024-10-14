 

/// first js file
// timer
const timer = document.querySelector("[data-timer]");

const startBtn = document.querySelector("[data-start-btn]")

const repeatBtn = document.querySelector("[data-repeat-test]")

const textarea = document.querySelector("[data-input-quote]");

const quoteText = document.querySelector("[data-quote]");

const scorebox = document.querySelector("[data-scorebox]");

const score = document.querySelector("[data-score]");

 
var minutes=1;
 
 



/**
 * TIMER FUNCTION
 */
let timerStarted=false;
const startTimer = function (minutes){
    let seconds = minutes * 60-1;
    timerStarted=true;
    const timerInterval = setInterval(() => {
        if (seconds < 0){
            clearInterval(timerInterval);
            window.location.href="./result.html"
            correctChecker()
            setToDefualt()
            return
        }

        let minute=Math.floor(seconds/60);
        let second = seconds % 60;

        if (second < 10){
            second=`0${second}`;
        }
        
        if (minute < 10){
            minute=`0${minute}`
        }

        timer.textContent=` ${minute}:${second}`
        seconds-- 

    },1000)

}
/**
 * starte test
 */
document.addEventListener('DOMContentLoaded',()=>{
    textarea.addEventListener("input",function(){
        if(!timerStarted){
            timer.style.display="block"
            startTimer(minutes)
        }
    })
})

 
/**
 *  quote words collectore
 */

const quotewords =(quoteText.textContent).split(" ");

 

/**
 *  written word collectors
 */

var written =[];
var word;
textarea.addEventListener('keydown', function (e) {
    if (e.code === "Space") {
        word = (textarea.value).split(" ").filter(w => w.trim() !== "");
        let lastWord = word[word.length - 1];  
        if (lastWord !== "") {
            written.push(lastWord);
        }
    }
});




/**
 *  nums of correct words checker

 */
 
var numCorrectWords = 0;

const correctChecker = function(){
    for(let i = 0;i < written.length;i++){
        if(written[i]===quotewords[i]){
            numCorrectWords++
        }
    }
    accCalculator()
    localStorage.setItem('correct-words',numCorrectWords)
}


var acc =0
const accCalculator = function(){
    let acc = (numCorrectWords / quotewords.length) * 100;
    acc = acc.toFixed(2);
    localStorage.setItem('acc',acc);
}

const setToDefualt= function (){
    textarea.value=""
    timerStarted=false
}

 
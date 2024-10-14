/**
 * RESULT PAGE
 */
const repeatTest = document.querySelector("[data-repeat-test]")

const wpm = document.querySelector("[data-wpm]")

const acc = document.querySelector("[data-acc]")


document.addEventListener('DOMContentLoaded',()=>{
    repeatTest.addEventListener("click",function(){
        window.location.href="./type.html"      
    })
})

 
wpm.textContent=localStorage.getItem('correct-words')
acc.textContent=`${localStorage.getItem('acc')}%`
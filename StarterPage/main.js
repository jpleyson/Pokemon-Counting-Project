var oakWords = document.getElementById('oakText');

const wordsArr = ["First, what is your name?", "Right! So your name is", 
"Your very own Pokémon legend is about to unfold! A world of dreams and adventures with Pokémon awaits! Let's go!"];
var index = 0;
var string1 = "hello world";
oakWords.onclick = function() {
    if(index<wordsArr.length){
        if(index == 1){
            string1 = prompt("Prof Oak: What is your name?");
            oakWords.innerHTML = wordsArr[index] + " " + string1 + "!";
        }
        else{
            oakWords.innerHTML = wordsArr[index];
        }
        index++;
    }
    else{
        //Opens the new page when at the end of the wordsArr 
        window.location="../MainPage/index.html"
    }
};
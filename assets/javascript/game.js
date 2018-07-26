
var word_count = 0;
var word_list = ["soccer","football","racquetball","swimming","tennis","basketball","volleyball", "bowling"];

var buttonsClicked = ["1"];

var s;
var count = 0;
var answerArray = [];
var wrongGuess = '';
var wins = 0;

function startPoint(){
    var words = newWord();
    for (var i = 0; i < words.length; i++){
        answerArray[i] = "_";
    }
    s = answerArray.join(" ");
    document.getElementById("answer").innerHTML = s;
    document.getElementById("counter").innerHTML = "Number Of Guesses Left: ";
    document.getElementById("wrong_guess").innerHTML = "Wrong Guesses: ";
    document.getElementById("wins").innerHTML = "Wins: ";
    return words
}

function newWord(){
    var randomWord = word_list[word_count];
    word_count = word_count + 1;
    return randomWord
}

function reset(){

    startPoint();
    var count = 0;
    document.getElementById("counter").innerHTML = "Number Of Guesses Left: " + (10 - count);
    document.getElementById("wrong_guess").innerHTML = "Wrong Guesses: ";
    buttonsClicked = ["1"];
}

function isDuplicate(user_answer){
    for (i=0;i<buttonsClicked.length;i++){
        if(buttonsClicked[i] === user_answer){
            return true;
        }
    }
    return false;
}


document.onkeyup = function(event) {
    var randomWord = word_list[word_count-1];
    var user_answer = event.key;
    var answer = user_answer.toString();
    var overflow = 0;

    var bool = isDuplicate(answer);
    if (bool === false) {
        for (var i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === user_answer) {
                answerArray[i] = user_answer;
                overflow = overflow + 1;
            }
            else {
                wrongGuess = user_answer;
            }
        }

        var arrayList = answerArray.join("");
        if (arrayList === randomWord) {
            wins = wins + 1;
            reset();
            count = -1;
            buttonsClicked = ["1"];
        }
        if (overflow === 0){
            count++
        }
        document.getElementById("counter").innerHTML = "Number Of Guesses Left: " + (10 - count);
        document.getElementById("answer").innerHTML = answerArray.join(" ");
        document.getElementById("wrong_guess").append(wrongGuess + ', ');
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        buttonsClicked.push(answer);


        if (count === 10) {
            reset();
            count = 0;
            buttonsClicked = ["1"];
        }
    }
};

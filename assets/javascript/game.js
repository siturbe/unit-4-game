

    //Make variables global to the runtime of our application
    let winCount = 0;
    let lossCount = 0;
    let totalScore = 0;
    let bluePoints = 0;
    let redPoints = 0;
    let greenPoints = 0;
    let yellowPoints = 0;
    let randomNumberOutput;

//FUNCTIONS
    //Use a function to initialize each game
    function initializeGame(){
        

        //create the needed random variables
        randomNumberOutput = Math.floor(Math.random()*102+19);
        $('#random-number-output').text('Target to sum to:   ' + randomNumberOutput);    

        $('#total-score').text(totalScore);
        $('#wins-output').text('Wins:    ' + winCount);
        $('#losses-output').text('Losses:  ' + lossCount);

        bluePoints = Math.floor(Math.random()*12+1);
        console.log(bluePoints);

        redPoints = Math.floor(Math.random()*12+1);
         console.log(redPoints);

        greenPoints = Math.floor(Math.random()*12+1);
        console.log(greenPoints);

        yellowPoints = Math.floor(Math.random()*12+1);
        console.log(yellowPoints);
    
    }

    // could have put in initialization, but liked separating out
    function reset(){
        totalScore = 0;
        bluePoints = 0;
        redPoints = 0;
        greenPoints = 0;
        yellowPoints = 0;
    }
    
    function checkNumber(){
        if(totalScore === randomNumberOutput){
            winCount = winCount + 1;
            alert("You won one game!");
            reset();
            initializeGame();
        } else if (totalScore > randomNumberOutput){
            lossCount = lossCount + 1;
            alert("You lost one game!");
            reset();
            initializeGame();
        }
    }


//run game

initializeGame();

$('#blue-crystal').on("click", function(){
    totalScore = totalScore + bluePoints;
    $('#total-score').text(totalScore);
    checkNumber();
})

$('#green-crystal').on("click", function(){
    totalScore = totalScore + greenPoints;
    $('#total-score').text(totalScore);
    checkNumber();
})

$('#red-crystal').on("click", function(){
    totalScore = totalScore + redPoints;
    $('#total-score').text(totalScore);
    checkNumber();
})

$('#yellow-crystal').on("click", function(){
    totalScore = totalScore + yellowPoints;
    $('#total-score').text(totalScore);
    checkNumber();
})




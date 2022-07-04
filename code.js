//Function for countdownTimer V1 for week1-2 
function blastoffTimerV1(){
    console.log("blastoffTimerV1() function started");
    // created variable currTime, set it equal to 10
    var currTime = 10;
    //Logs currTime to the console
    console.log(currTime);
    setTimeout(function(){
        //What we do after the delay
        //Countdown 10
        document.getElementById("countdownStatus").innerHTML = currTime;
    }, 1000)

    //Countdown 9
    setTimeout(function(){
        //What we do after the delay
        //Subtracts 1 from currTime everytime the timer goes down 1 second to display the correct number on the webpage
        currTime = currTime -1;
        document.getElementById("countdownStatus").innerHTML = currTime;
    }, 2000)
    
    //Countdown 8
    setTimeout(function(){
        //What we do after the delay
        currTime = currTime -1;
        //Logs currTime to the console
        console.log(currTime);
        document.getElementById("countdownStatus").innerHTML = currTime;
    }, 3000)

    //Countdown 7
    setTimeout(function(){
        //What we do after the delay
        currTime = currTime -1;
        //Logs currTime to the console
        console.log(currTime);
        document.getElementById("countdownStatus").innerHTML = currTime;
    }, 4000)
    
    //Countdown 6
    setTimeout(function(){
        //What we do after the delay
        currTime = currTime -1;
        //Logs currTime to the console
        console.log(currTime);
        document.getElementById("countdownStatus").innerHTML = currTime;


    }, 5000)
    
    //Countdown 5
    setTimeout(function(){
        //What we do after the delay
        currTime = currTime -1;
         //Logs currTime to the console
        console.log(currTime);
        document.getElementById("countdownStatus").innerHTML = currTime;
    }, 6000)
    
    //Countdown 4
    setTimeout(function(){
        //What we do after the delay
        //Logs currTime to the console
        currTime = currTime -1;
        document.getElementById("countdownStatus").innerHTML = currTime;
    }, 7000)

   //Countdown 3
    setTimeout(function(){
        //What we do after the delay
        currTime = currTime -1;
        //Logs currTime to the console
        console.log(currTime);
        document.getElementById("countdownStatus").innerHTML = currTime;
    }, 8000)
    
    //Countdown 2
    setTimeout(function(){
        //What we do after the delay
        currTime = currTime -1;
        //Logs currTime to the console
        console.log(currTime);
        document.getElementById("countdownStatus").innerHTML = currTime;
    }, 9000)

    //Countdown 1
    setTimeout(function(){
        //What we do after the delay
        currTime = currTime -1;
        //Logs currTime to the console
        console.log(currTime);
        document.getElementById("countdownStatus").innerHTML = currTime;
    }, 10000)
    
    //Countdown Blastoff
    setTimeout(function(){
        //What we do after the delay
        document.getElementById("countdownStatus").innerHTML = "Blastoff!";
    }, 11000)
}

//every line of code commented on...
function playCraps(){
    console.log("playCraps started")
    //generate variables
    var die1;
    var die2;
    var sum;
    var diceImage;
    var diceImage2;   

    //Roll dice
    //Die is rolled using Math.random which will generate a random number between 1 and 6
    die1 = Math.floor(Math.random() * 6) + 1;
    console.log(die1);
    //A second die is rolled using the same rules as the first one.
    die2 = Math.floor(Math.random() * 6) + 1;
    console.log(die2);

    //Determine the sum of the two dice and save it in sum
    sum = die1 + die2;
    console.log("sum is equal to " + sum);
    //follow the rules of Craps and tell the status in crapsStatus
  
    //If statements below here for assigning an image based on the result of die1 and die2
//-------------------------------------------------------------------------------------------------
    if(die1 == 1){
        diceImage = "images/dice1.png"
    }
    if(die2 == 1){
        diceImage2 = "images/dice1.png"
    }

    if(die1 == 2){
        diceImage = "images/dice2.png"
    }
    if(die2 == 2){
        diceImage2 = "images/dice2.png"
    }

    if(die1 == 3){
        diceImage = "images/dice3.png"
    }
    if(die2 == 3){
        diceImage2 = "images/dice3.png"
    }

    if(die1 == 4){
        diceImage = "images/dice4.png"
    }
    if(die2 == 4){
        diceImage2 = "images/dice4.png"
    }

    if(die1 == 5){
        diceImage = "images/dice5.png"
    }
    if(die2 == 5){
        diceImage2 = "images/dice5.png"
    }

    if(die1 == 6){
        diceImage = "images/dice6.png"
    }
    if(die2 == 6){
        diceImage2 = "images/dice6.png"
    }
//-------------------------------------------------------------------------------------------------


    //If statement which says that if sum is equal to 7 or 11 you lose.
    if(sum == 7 || sum == 11){
        //Displays losing statement to the user.
        document.getElementById("crapsStatus").innerHTML = "Craps!! You lose!"
        //Displays the correct die image to diceImage and diceImage2 accordingly
        document.getElementById("diceImage").src = diceImage;
        document.getElementById("diceImage2").src = diceImage2;
        //Else if statement checks if die1 equals die2 and checks that they are both even, if these conditions are met you win.
    } else if(die1 == die2 && die1%2 == 0){
        //Displays winning statement to the user.
        document.getElementById("crapsStatus").innerHTML = "You win!!"
        //Displays the correct die image to diceImage and diceImage2 accordingly
        document.getElementById("diceImage").src = diceImage;
        document.getElementById("diceImage2").src = diceImage2;
        
    }
    
    //If sum is not equal to any of the conditions specified above the below statement will be displayed to the user.
    else {
        document.getElementById("crapsStatus").innerHTML = "You did not win or lose, please roll again."
        //Displays the correct die image to diceImage and diceImage2 accordingly
        document.getElementById("diceImage").src = diceImage;
        document.getElementById("diceImage2").src = diceImage2;
        
    }

}

function blastoffTimerV2(){
    console.log("blastoffTimerV2() function started");
    //Want a loop that runs 11 times, 10-1 and then blastoff
    var countdownTimer = 10;
    for(var i = 0; i < 10; i = i + 1){
        setTimeout(function(){
            document.getElementById("countdownStatus").innerHTML = countdownTimer;
            countdownTimer = countdownTimer - 1;
        }, 1000 * i)

    }
    setTimeout(function(){
        //What we do after the delay
        document.getElementById("countdownStatus").innerHTML = "Blastoff!";
    }, 10000)
}

function blastoffTimerV3(){
    console.log("blastoffTimerV2() function started");
    //Want a loop that runs 11 times, 10-1 and then blastoff
    //Sets countdownTimer variable to 10
    var countdownTimer = 10;
    //start the loop at 0, add 1 each time until 10 is reached
    for(var i = 0; i <= 10; i = i + 1){
        setTimeout(function(){
            //Set parameters for different numbers in the countdown, when the timer is completed it will print "Blastoff!", when it is less than 5 it will display a warning.
            if(countdownTimer <= 0){
                document.getElementById("countdownStatus").innerHTML = "Blastoff!";
            } else if(countdownTimer < 5){
                document.getElementById("countdownStatus").innerHTML = "Warning, less than halfway to launch!" + countdownTimer;
            } else {
                document.getElementById("countdownStatus").innerHTML = countdownTimer;
            }
            //subtracts 1 from countdownTimer
            countdownTimer = countdownTimer - 1;
        }, 1000 * i)

    }
}

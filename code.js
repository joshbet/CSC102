//Function for countdownTimer V1 for week1-2 
function start(){
    console.log("start() function started");
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
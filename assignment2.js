/* Assignment 2
Task 1: Create a countdown timer
-Starts from a user-defined duration in seconds
-updates every second until it reaches 0
-use setInterval to update the display

Task 2: Implement a function that displays a notification after a specific delay
-in milliseconds
-use setTimeout

Task 3: Develop a function that repeatedly displays a notification at fixed intervals
until the user dismisses it
-use setIterval to schedule notifications
*/
function countDownTimer(seconds) {
    let timeLeft = seconds;
  
    // Task 1
    let timer = setInterval(function() {
        const tickMessage = document.getElementById("tickMessage");
        if (timeLeft < 0) {
            clearInterval(timer);
            // Task 2
            setTimeout(function() {
                tickMessage.textContent = "Countdown Finished!";
                console.log("Countdown Finished!");
                alert("Countdown Finished!"); 
            }, 2000);
        } else {
            tickMessage.textContent = "Current Count: " + timeLeft +" seconds!";
            console.log("Current Count: " + timeLeft + "s");
        }
        timeLeft -= 1;
    }, 1000);  
};
countDownTimer(10)
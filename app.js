let url = "https://www.numerator.com/sites/default/files/styles/banner_960x380_/public/image/2019-08/Meal%20Kit.jpg?itok=s8frvbbA"

function userName(){
    let userName = prompt("Please enter your name: ");
    console.log(userName);
    document.write("<h2>" + userName + "</h2>");
    return userName;
}

function userAnswer(){
    let userAnswer = prompt("Are you interested in meal delivery kits from your local farmer's market?")
    console.log(userAnswer);

    if (userAnswer == "yes") {
        console.log(userName);
        document.write("<h2>Please be sure to register for an account via the register link on our homepage!</h3>");

    } else {
        document.write("<h2>Check out the other services we provide!<h2>");
        return userName;
    }
}

function userGuessingGame(){
    correctAnswer = 17;
    console.log(correctAnswer)
    userAttempts = 3;
    for (let i = 0; i < userAttempts; i++){
        let userGuess = prompt("How many years does it take for a Cicada brood to hatch? Choose 1-50");
        while(userGuess < 1 || userGuess > 50){
            userGuess = prompt("Not within the Range. Please enter a number between 1 and 50");
        }
        if (userGuess == correctAnswer){
            alert("Yes, cicada broods hatch every 17 years!");
            break;
        } else if(userGuess < correctAnswer){
            alert("too low, try again")
        } else if(userGuess > correctAnswer){
            alert("too high, try again")
        } else {
            alert("Something Else Went Wrong.");
        }
        console.log(i);
        if (i == userAttempts -1){
            alert("You did not guess the correct brood. The correct answer is: " + correctAnswer);
        }
        }
    }


function mealKit(){
    let numberMealKit = prompt("How many meal kits would you like to see?")
    for (let i = 0; i < numberMealKit; i ++){
        document.write('<img src="' + url + '">')
    }
}
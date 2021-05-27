function userName(){
    let userName = prompt("Please Enter Your Email: ");
    console.log(userName);
    document.write("<h2>" + userName + "</h2>");
    return userName;
}

function userAnswer(){
    let userAnswer = prompt("Would you like to sign up for Farm to Table?")
    console.log(userAnswer);

    if (userAnswer == "yes") {
        console.log(userName);
        document.write("<h2>We will send you an email with a link to register for your account!</h3>");

    } else {
        document.write("<h2>Support Your Local Farmer's Market!<h2>");
        return userName;
    }
}
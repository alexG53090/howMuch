function howMuch() {

    $("#calc").hide();
    var amount = document.getElementById('amountCups').value;
    var userInput = amount * .38;

    if (userInput === 0) {
        $("#result").append("You need to specify how much <br> coffee you want, silly.");
        $("#refresh").show();
    } else if (userInput < .39) {
        $("#result").append("For one cup, you will need<br> ~" + userInput + " oz(s).");
        $("#refresh").show();
    } else if (userInput < .77) {
        $("#result").append("For two cups, you will need<br> ~" + userInput + " oz(s).");
        $("#refresh").show();
    } else if (userInput < 1.15) {
        $("#result").append("For three cups, you will need<br> ~" + userInput + " oz(s).");
        $("#refresh").show();
    } else {
        $("#result").append("You will need<br> ~" + userInput + " oz(s).");
        $("#refresh").show();
    } // dang, should've used a loop for this!!
}
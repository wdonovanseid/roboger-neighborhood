$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    
    const num = parseInt($("#input").val());
    let numArray = [];
    let finalArray = [];
    let tempArray = [];

    for (i=0; i<=num; i++) {
      let temp = i.toString();
      numArray.push(temp);
    }

    numArray.forEach(function(number) {
      tempArray = number.split("");
      if (tempArray.includes("2")) {
        finalArray.push("Boop!");
      } else if (tempArray.includes("1")) {
        finalArray.push("Beep!");
      } else {
        finalArray.push(number)
      }
    });

    $("#answer").text(finalArray);
  });
});
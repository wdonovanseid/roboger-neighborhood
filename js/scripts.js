$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    
    let num = parseInt($("#input").val());
    let numArray = [];
    let finalArray = [];
    for (i=0; i<=num; i++) {
      numArray.push(i);
    }

    numArray.forEach(function(number) {
      if (number === 3) {
        finalArray.push("Won't you be my neighbor?");
      } else if (number === 2) {
        finalArray.push("Boop!");
      } else if (number === 1) {
        finalArray.push("Beep!");
      } else {
        finalArray.push(number);
      }
    });

    $("#answer").text(finalArray);
  });
});
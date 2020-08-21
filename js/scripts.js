$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    
    const num = parseInt($("#input").val());
    let numArray = [];
    let tempArray = [];
    let finalArray = [];

    for (i=0; i<=num; i++) {
      let iString = i.toString();
      numArray.push(iString);
    }

    numArray.forEach(function(number) {
      tempArray = number.split("");
      if (tempArray.includes("3")) {
        finalArray.push(" Won't you be my neighbor?")
      } else if (tempArray.includes("2")) {
        finalArray.push(" Boop!");
      } else if (tempArray.includes("1")) {
        finalArray.push(" Beep!");
      } else {
        finalArray.push(" "+number)
      }
    });

    $("#answer").text(finalArray);
  });
});
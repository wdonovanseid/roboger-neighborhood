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
      tempArray=number.split("");
      for (const tempNum of tempArray) {
        if (tempNum.includes(2)) {
          finalArray.push("Boop!");
          break;
        } else if (tempNum.includes(1)) {
          if (tempArray.includes("3") || tempArray.includes("2")) {
            console.log(tempArray);
            break;
          }
          finalArray.push("Beep!");
          break;
        } else {
          finalArray.push(number)
        }
      }
    });

    $("#answer").text(finalArray);
  });
});
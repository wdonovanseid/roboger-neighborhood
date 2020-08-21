$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    
    const check = ["1"];
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
  	    if (check.includes(tempNum)) {
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
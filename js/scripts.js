$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    
    let num = parseInt($("#input").val());
    let numArray = [];
    let finalArray = [];
    for (i=0; i<=num; i++) {
      let temp = i.toString();
      numArray.push(temp);
    }

    numArray.forEach(function(number) {
      finalArray.push(number.replace(/1/g, "why"));
    });

    $("#answer").text(finalArray);
  });
});
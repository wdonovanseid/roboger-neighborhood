$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    
    let num = parseInt("5");
    let finalArray = [];
    for (i=0; i<=num; i++) {
      finalArray.push(i);
    }

    $("#answer").text(finalArray);
  });
});
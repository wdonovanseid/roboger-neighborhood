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
      if (number === "7") {
        $("body").addClass("seven");
      } 
      if (number === "42") {
        $("body").addClass("hitchHiker");
      }
    });
    $("#answer").show();
    $("#answer").text(finalArray);
  });
  $("button#originalBackground").click(function() {
    $("body").removeClass();
  });

  $("button#darkBackground").click(function() {
    $("body").removeClass();
    $("body").addClass("nighttime");
  });

  $("button#lightBackground").click(function() {
    $("body").removeClass();
    $("body").addClass("daytime");
  });
});
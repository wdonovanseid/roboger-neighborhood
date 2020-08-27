// Business Logic

function makeFinalArray(num, userN) {
  let numArray = [];
  let tempArray = [];
  let finalArray = [];
  for (i=0; i<=num; i++) {
    let iString = i.toString();
    numArray.push(iString);
  }
  numArray.forEach(function(number) {
    tempArray = number.split("");
    if (tempArray.includes("1") && tempArray.includes("3")) {
      finalArray.push(" Woops!");
    } else if (tempArray.includes("3")) {
      finalArray.push(" Won't you be my neighbor? " + userN);
    } else if (tempArray.includes("2")) {
      finalArray.push(" Boop!");
    } else if (tempArray.includes("1")) {
      finalArray.push(" Beep!");
    } else {
      finalArray.push(" "+number)
    }
  });
  return finalArray
}

// User Logic

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    
    const userN = $("#userName").val();
    const num = parseInt($("#input").val());

    if (!num) {
      alert("Please enter a number");
    } else {
      if (num === "7") {
        $("body").addClass("seven");
      } else if (num === "42") {
        $("body").addClass("hitchHiker");
      } else {
        $("body").removeClass("seven hitchHiker");
      }

      const finalArray = makeFinalArray(num, userN);
      $("#answer").text(finalArray);

      const reverseArray = finalArray.reverse();
      $("#rAnswer").text(reverseArray);
    };
  });
  $("#robofy").click(function() {
    $("#answer").show();
    $("#rAnswer").hide();   
  });
  $("#reverse").click(function() {
    $("#answer").hide();
    $("#rAnswer").show();   
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
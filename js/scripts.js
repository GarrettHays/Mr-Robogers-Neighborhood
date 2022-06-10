//Utility Logic
function numberCounter(number) {
  let newArray = [];
  let numberInt = parseInt(number);
  for (let i = 0; i <= numberInt; i++) {
    newArray.push(i.toString());
  }
  return newArray;
}


// Business Logic
function roboger(number) {
  let phrase = [];
  if (isNaN(number)) {
    return "Please enter a number.";
  }
  
  if (typeof number !== "string") {
    return "Number must be in string format.";
  }
  
  let numberInt = parseInt(number);
  if (numberInt < 0) {
    return "Please enter a positive number.";
  }
 
  if (number.trim().length === 0) {
    return "Enter a Number"; 
  }
  let numberString = numberCounter(number); 

  for(let i = 0; i < numberString.length; i++) {
    if (numberString[i].includes(3)) {
      phrase.push(" Won't you be my neighbor?"); 
    } else if (numberString[i].includes(2)) {
      phrase.push(" boop!"); 
    } else if (numberString[i].includes(1)) {
      phrase.push(" beep!");   
    } else {
      phrase.push(" " + numberString[i]);
      
  }
  };
  return phrase.toString();
}

// UI Logic
$(document).ready(function() {
  $("form#phrase").submit(function(event) {
    event.preventDefault();
    const input = $("#userNumber").val();
    const finalPhrase = roboger(input);
    $("#numberOutput").show();
    $("#output").text(finalPhrase);
  });
});

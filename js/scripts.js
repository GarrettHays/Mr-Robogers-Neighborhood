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
  if (typeof number !== "string") {
    return "Number must be in string format";
  }
  if (number.trim().length === 0) {
    return "Enter a Number"; 
  }
  let numberString = numberCounter(number); 

  for(let i = 0; i < numberString.length; i++) {
    if (numberString[i].includes(3)) {
      phrase.push("Won't you be my neighbor?"); 
    } else if (numberString[i].includes(2)) {
      phrase.push("boop!"); 
    } else if (numberString[i].includes(1)) {
      phrase.push("beep!");   
    } else {
      phrase.push("" + numberString[i]);
      
  }
  };
  return phrase.toString();
}



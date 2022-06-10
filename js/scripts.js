//Utility Logic
function numberCounter(number) {
  let newArray = [];
  let numberInt = parseInt(number);
  for (let i = 0; i <= numberInt; i++) {
    newArray.push(i.toString());
  }
  console.log(newArray);
  return newArray;
}

// Business Logic
function roboger(number) {
  let phrase = [];
  if (number.trim().length === 0) {
    return "Enter a Number";
  }
  let numberString = numberCounter(number); 

  for(let i = 0; i < numberString.length; i++) {
    if (numberString[i].includes(1)) {
      phrase.push("beep!");  
    } else if (numberString[i].includes(2)) {
      phrase.push("boop!"); 
    } else {
      phrase.push("" + numberString[i]);
  }
  };
  return phrase.toString();
}

// // UI Logic
// $(document).ready(function(){
//   $("form#phrase").submit(function(event){
//     event.preventDefault();


//   });
// });

// Business Logic
function beepBoop(number) {
  let phrase = [];

  for(let i = 0; i <= parseInt(number); i++) {
    if (number.toString().includes(1[i])) {
      phrase.push("beep");   
    } else {
      phrase.push(i);
  }

  return phrase;

  };
}

// UI Logic
$(document).ready(function(){
  $("form#phrase").submit(function(event){
    event.preventDefault();


  });
});

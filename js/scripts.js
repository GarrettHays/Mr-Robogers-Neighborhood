// Business Logic
function beepBoop(number) {
  let phrase = [];

  for(var i = 0; i <= number; i++) {
       phrase.push(i);
  }

  return phrase;

};

// UI Logic
$(document).ready(function(){
  $("form#phrase").submit(function(event){
    event.preventDefault();


  });
});

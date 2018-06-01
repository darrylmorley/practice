
function message() {
  let name = prompt('Hi! What is your name?');
  let age = prompt('How old are you?');
  if (age < 20) {
    alert('Hey '+name+' ya little whippersnapper!!');
  } else if (age > 20 && age < 40) {
    alert('Well '+name+ ', welcome to the beginning of getting old!!');
  } else {
    alert('Oh dear '+name+' give it up old\'un!!');
  }}

message()

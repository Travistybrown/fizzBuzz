function getValues() {
  // get the value from the page
  let startValue = document.getElementById("startValue").value;
  let endValue = document.getElementById("endValue").value;
  let customValue = document.getElementById("customValue").value;

  // parse the values in to intengers
  startValue = parseInt(startValue);
  endValue = parseInt(endValue);
  customValue = parseInt(customValue);

  if (Number.isInteger(startValue) && Number.isInteger(endValue) && Number.isInteger(customValue)) {
    // generate the numbers based on user input
    let numbers = generateFizzBuzz(startValue, endValue, customValue);

    // display results on page
    displayFizzBuzz(numbers);
  } else {
    swal.fire({
      icon: "error",
      Title: "Oops....",
      text: "Only integers are allow for Hundo!",
    });
  }
}

function generateFizzBuzz(startValue, endValue, customValue) {
  let numbers = [];
  let cap = customValue;
for (let i = 1; i <= cap; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    numbers.push ("Fizz Buzz");
  } else if (i % 3 == 0) {
    numbers.push  ("Fizz");
  } else if (i % 5 == 0) {
    numbers.push ("Buzz");
  } else {
    numbers.push (i);
  }
}
  

  return numbers;
}

function displayFizzBuzz(numbers) {
    let templateRows = "";
 for ( let i = 0; i < numbers.length; i++){
    let number = numbers[i];
  

   if (i % 5 == 0){
    templateRows += "<tr>";
   }

 templateRows += `<td>${number}</td>`;

 if ((i + 1) % 5 == 0){
    templateRows += "</tr>";
 }
  } 

  document.getElementById("results").innerHTML = templateRows;
}

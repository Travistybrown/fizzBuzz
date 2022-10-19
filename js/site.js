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
    let isFizz = false;
    let isBuzz = false;
    let cap = customValue;

    for (let i = 1; i <= cap; i++) {
      isFizz = i % startValue == 0;
      isBuzz = i % endValue == 0;
      if (isBuzz && isFizz) {
        numbers.push("FizzBuzz");
      } else if (isFizz) {
        numbers.push("Fizz");
      } else if (isBuzz) {
        numbers.push("Buzz");
      } else {
        numbers.push(i);
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

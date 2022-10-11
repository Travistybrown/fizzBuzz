function getValues() {
  // get the value from the page
  let startValue = document.getElementById("startValue").value;
  let endValue = document.getElementById("endValue").value;

  // parse the values in to intengers
  startValue = parseInt(startValue);
  endValue = parseInt(endValue);

  if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
    // generate the numbers based on user input
    let numbers = generateFizzBuzz(startValue, endValue);

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

function generateFizzBuzz(startValue, endValue) {
  let numbers = [];
for (let i = 1; i <= 100; i++) {
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
    templateRows += `<tr><td>${number}</td></tr>`;
 }

 

  document.getElementById("results").innerHTML = templateRows;
}

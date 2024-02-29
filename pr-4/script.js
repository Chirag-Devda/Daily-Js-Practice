let strings = "";
let resultCalculated = false; // Variable to track if result is calculated
let buttons = Array.from(document.querySelectorAll(".button"));
console.log(buttons);
buttons.forEach((b) => {
  b.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      let answer = eval(strings);
      strings = answer.toString();
      resultCalculated = true; // Set resultCalculated to true after calculating result
      document.querySelector("input").value = strings;
    } else if (e.target.innerHTML == "A/C") {
      strings = "";
      resultCalculated = false; // Reset resultCalculated to false
      document.querySelector("input").value = strings;
    } else if (e.target.innerHTML == "M+") {
      if (!isNaN(parseFloat(strings))) {
        memory += parseFloat(strings); // Add the current value to memory if it's a number
      }
      document.querySelector("input").value = memory;
    } else if (e.target.innerHTML == "M-") {
      if (!isNaN(parseFloat(strings))) {
        memory -= parseFloat(strings); // Subtract the current value from memory if it's a number
      }
      document.querySelector("input").value = memory;
    } else if (e.target.innerHTML == "X") {
      if (resultCalculated) {
        strings = strings.slice(0, -1); // Remove the last character if result is calculated
        resultCalculated = false; // Reset resultCalculated to false
      } else {
        strings = strings.slice(0, -1); // Remove the last character in other cases
      }
      document.querySelector("input").value = strings;
    } else {
      strings = strings + e.target.innerHTML;
      document.querySelector("input").value = strings;
    }
  });
});

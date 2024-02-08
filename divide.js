
function divide(a, b) {
    if (b === 0) {
      console.error("Error: Cannot divide by zero.");
      return undefined;
    }
  
    return a / b;
  }
  
  console.log("Feature Branch 2:");
  console.log("Division:", divide(10, 2));
  console.log("Division by Zero:", divide(10, 0));
  
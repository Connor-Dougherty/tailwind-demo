function handleError(element, errorMessage) {
  // Check if the element exists
  if (element) {
    // Display the error message
    element.textContent = errorMessage;
    element.style.color = "red"; // Optional: Change the text color to red
  } else {
    console.error("Element not found. Unable to display error message.");
  }
}

// Task 4
// In this task we have to create an HTML page with a <button> element and write a JavaScript function that,
// when the button is clicked, displays an alert with the message "Button Clicked!"

// function showAlert() {
//   alert("Button Clicked!");
// }

// document.getElementById("buttonClick").addEventListener("click", showAlert);

//Task 5
//In this task we have to create an HTML page with a <form> element containing an input field and a submit button
//and then write a JavaScript function that, when the form is submitted, validates the input field.If the
//input is empty,display an error message next to the input field. If the input is not empty, display an alert with
//the message "Form Submitted!"

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting

  var inputField = document.getElementById("textInput");
  var errorSpan = document.getElementById("errorText");
  var inputValue = inputField.value.trim();

  if (inputValue === "") {
    errorSpan.textContent = "Please enter some text.";
  } else {
    errorSpan.textContent = ""; // Clear any previous error message
    alert("Form submitted!");
  }
});

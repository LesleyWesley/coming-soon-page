//Selects submit button

const button = document.querySelector("button");

//Selects "Must be valid email" message

const validateMessage = document.querySelector(".validate-message");

//Selects email input

const emailInput = document.querySelector("input");

//Selects email validator div

const emailDiv = document.querySelector(".email-validator");

//Selects email validator error icon

const errorIcon = document.querySelector(".email-validator img");
console.log("hi");

//Email Specifications

const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//================================================

//Adds validation of email when button is clicked

button.addEventListener("click", function () {
  validateEmail();
})

//===============================================

//Adds validation of email when "enter" is hit

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    validateEmail();
  }
})



//==============================================

 //Validates email

 const validateEmail = function () {
   const email = emailInput.value;

   if (email.match(mailformat)) {
     clearInput();
     validateMessage.innerText = "Success!  See you soon!";
     validateMessage.classList.remove("hide");
     validateMessage.classList.add("success");
     emailDiv.classList.remove("active");
     errorIcon.classList.add("hide");
   } else {
     validateMessage.classList.remove("hide");
     validateMessage.innerText = "Please provide a valid email";
     validateMessage.classList.remove("success");
     emailDiv.classList.add("active");
     errorIcon.classList.remove("hide");

   }
 }

//==============================================

//Clears Input

const clearInput = function () {
  emailInput.value = "";
}

//================================================

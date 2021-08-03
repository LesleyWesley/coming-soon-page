//Selects submit button

const button = document.querySelector("button");

//Selects "Must be valid email" message

const validateMessage = document.querySelector(".validate-message");

//Selects email input

const emailInput = document.querySelector("input");

//Selects email validator div

const emailDiv = document.querySelector(".email-validator");

//Email Specifications

const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//================================================

//Adds validation of email when button is clicked

button.addEventListener("click", function () {
  validateEmail();
})

//===============================================

//Adds validation of email when "enter" is hit




//==============================================

 //Validates email

 const validateEmail = function () {
   const email = emailInput.value;

   if (email.match(mailformat)) {
     clearInput();
     validateMessage.classList.add("hide");
     emailDiv.classList.remove("active");
   } else {
     validateMessage.classList.remove("hide");
     emailDiv.classList.add("active");
   }
 }

//==============================================

//Clears Input

const clearInput = function () {
  emailInput.value = "";
}

//================================================

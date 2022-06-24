// Selectors
const signupInput = document.querySelector(".signup-input");
const pwdInput = document.querySelector(".password-input");
const signupButton = document.querySelector(".signup-button");


// Event Listeners
signupButton.addEventListener("click", signup); // signup is a func

// Functions
function signup(e) {
  // for preventing natural behaviour
  e.preventDefault();
  signupInput.value = "Email ID";
  let text = signupInput.value;
  text = text.trim();
  if (text != "") {
    const validateEmail = email => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
  }
  // clear the input
  signupInput.value = "";
}

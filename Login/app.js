// Selectors
const loginInput = document.querySelector(".login-input");
const pwdInput = document.querySelector(".password-input");
const loginButton = document.querySelector(".login-button");


// Event Listeners
loginButton.addEventListener("click", login); // login is a func

// Functions
function login(e) {
  // for preventing natural behaviour
  e.preventDefault();
  loginInput.value = "Email ID";
  let text = loginInput.value;
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
  loginInput.value = "";
}

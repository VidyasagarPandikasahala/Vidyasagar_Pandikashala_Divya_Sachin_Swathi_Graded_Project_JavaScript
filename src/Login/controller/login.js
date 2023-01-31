// import { resumeController } from "../../ResumeTemplate/Controller/resume.js";
import { loginModel } from "../model/login.js";
import formView from "../view/submit.js";

function initialize() {
  loginModel.methods.setValidCredential();
}

function handleSubmit(e) {
  e.preventDefault();
  const inputUsername = document.querySelector(".username");
  const inputPassword = document.querySelector(".password");
  const inputCredentials = {
    username: inputUsername.value,
    password: inputPassword.value,
  };
  const validateCredential =
    loginModel.methods.validateCredentials(inputCredentials);

  if (validateCredential === "Valid Credential") {
    let message = "";
    formView.displayError(message);

    window.location.replace("/src/Components/resumeTemplate_Resume_Page.html");
    // formView.preventBackPageAction();
  } else if (validateCredential === "Invalid Username") {
    let message = " Invalid Username";
    formView.displayError(message);
  } else if (validateCredential === "Invalid Password") {
    let message = "Invalid Password";
    formView.displayError(message);
  }
}

function listenToElements() {
  const loginEl = document.querySelector(".login-form");

  loginEl.addEventListener("submit", handleSubmit.bind(this));
}

document.body.onload = () => {
  initialize();
  listenToElements();
};

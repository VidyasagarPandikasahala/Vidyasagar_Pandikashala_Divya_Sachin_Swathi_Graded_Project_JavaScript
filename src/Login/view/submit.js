// import { resumeController } from "../../ResumeTemplate/Controller/resume";

class FormView {
  errorMessageEl;
  formEl;
  constructor() {
    this.errorMessageEl = document.querySelector(".error-message");
    this.formEl = document.querySelector(".login-form");
    console.log(this.formEl, this.errorMessageEl);
  }

  displayError(message) {
    this.errorMessageEl.textContent = message;
  }

  // preventBackPageAction() {
  //   resumeController.methods.onload();
  // }
}

const formView = new FormView();

export default formView;

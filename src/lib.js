import validator from "validator";
export const errors = [
  {
    id: "name",
    msg: "Please enter your full name.",
    validate(val) {
      return val.length > 6 && val.includes(" ");
    },
  },
  {
    id: "email",
    msg: "Please enter a valid Email.",
    validate(val) {
      return validator.isEmail(val);
    },
  },

  {
    id: "phone",
    msg: "Please enter a valid phone number.",
    validate(val) {
      return validator.isMobilePhone(val, "en-us");
    },
  },

  {
    id: "message",
    msg: "Please enter a message 1-99 character.",
    validate(val) {
      return val.length >= 10 && val.length <= 100;
    },
  },
];

export const hideErrors = (el) => {
  el.parentNode.querySelector(".error").classList.remove(".error-true");
};

export const renderErrors = (el, msg) => {
  const errorsEl = el.parentNode.querySelector(".error");

  if (errorsEl) errorsEl.classList.add(".error-true");
  else {
    const elementError = document.createElement("p");
    elementError.className = "error error-true";
    elementError.textContent = msg;
    el.parentNode.appendChild(elementError);
  }
};

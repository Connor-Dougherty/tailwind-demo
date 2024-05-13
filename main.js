import { errors, hideErrors, renderErrors } from "./src/lib";

const formEls = [
  ...Array.from(document.querySelectorAll("input")),
  document.querySelector("#message"),
];
console.log(formEls);

const submitButt = document.querySelector("button[type='submit']");

formEls.forEach((el) => {
  el.addEventListener("blur", (e) => {
    const elError = errors.find((error) => error.id === e.target.id);
    //errors.find((error) => error.id === e.target.id).validate(e.target.value);
    if (!elError.validate(e.target.value)) renderErrors(e.target, elError.msg);
    else hideErrors(e.target);
  });
});

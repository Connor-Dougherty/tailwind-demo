export const errors = [
  {
    id: "name",
    msg: "Please enter your full name.",
    validate(val) {
      return val.length > 6 && val.includes(" ");
    },
  },
  { id: "email", msg: "Please enter a valid Email." },
  { id: "phone", msg: "Please enter a valid phone number." },
  {
    id: "message",
    msg: "Please enter a message 1-99 character.",
  },
];

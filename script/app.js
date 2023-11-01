const submitBtn = document.querySelector("button");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (password.value === confirmPassword.value) {
  }
});

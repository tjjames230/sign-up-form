const submitBtn = document.querySelector("button");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const main = document.querySelector("main");
let p = document.createElement("p"); // Create the <p> element.

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (main.contains(p)) {
    main.removeChild(p);
  }

  if (password.value === confirmPassword.value) {
    password.style.outline = "none";
    password.style.border = "1px solid hsl(143, 89%, 48%)";
    confirmPassword.style.outline = "none";
    confirmPassword.style.border = "1px solid hsl(143, 89%, 48%)";

    p.innerText = "Passwords match! Congrats!";
    p.style.color = "green";
  } else {
    password.style.outline = "none";
    password.style.border = "1px solid hsl(0, 89%, 48%)";
    confirmPassword.style.outline = "none";
    confirmPassword.style.border = "1px solid hsl(0, 89%, 48%)";

    p.innerText = "Passwords must match in order to submit.";
    p.style.color = "red";
  }

  main.appendChild(p); // Append the <p> element to the main element.
});

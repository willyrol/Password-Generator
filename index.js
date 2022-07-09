function getPassword() {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%";

  let passwordLength = 16;
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);

    password += chars.substring(randomNumber, randomNumber + 1);
  }
}


  document.getElementById("one").textContent = password;
  document.getElementById("two").textContent = password;
  document.getElementById("three").textContent = password;
  document.getElementById("four").textContent = password;

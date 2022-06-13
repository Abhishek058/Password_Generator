function generatePassword(lower, upper, number, symbol, length) {
  let generatePassword = "";
  const typeCount = lower + upper + number + symbol;
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  for (let i = 0; i < length; i += typeCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatePassword += randomFunc[funcName]();
    });
  }
  const finalPassword = generatePassword.slice(0, length);
  return finalPassword;
}

let button = document.getElementById("'clipboardBtn");
button.addEventListener("click", (e) => {
  e.preventDefault();
  document.execCommand(
    "copy",
    false,
    document.getElementById("PasswordResult").ariaSelected()
  );
});

const generate = document.getElementById("generateBtn");
generate.addEventListener("click", () => {
  const length = document.getElementById("PasswordLength").value;
  const hasUpper = document.getElementById("uppercase").checked;
  const hasLower = document.getElementById("lowercase").checked;
  const hasNumber = document.getElementById("numbers").checked;
  const hasSymbol = document.getElementById("symbols").checked;
  const result = document.getElementById("PasswordResult");
  result.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});

//Initial references
const otpInputs = document.querySelectorAll(".otpInput");
const loginForm = document.getElementById("loginForm");
const otpHiddenInput = document.getElementById("otpHiddenInput");
const otpContainer = document.querySelector(".otpContainer");
let inputCount = 0,
  finalInput = "";

//Update input state
const updateInputConfig = (element, disabledStatus) => {
  element.disabled = disabledStatus;
  if (!disabledStatus) {
    element.focus();
  } else {
    element.blur();
  }
};

//Start inputs
const startInput = () => {
  inputCount = 0;
  finalInput = "";
  otpInputs.forEach((element) => {
    element.value = "";
  });
  updateInputConfig(otpContainer.firstElementChild, false);
};

//set value to hidden input
const setValue = () => {
  otpHiddenInput.value = finalInput;
};

otpInputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
    let { value } = e.target;

    if (value.length == 1) {
      updateInputConfig(e.target, true);
      if (inputCount <= otpInputs.length - 1 && e.key != "Backspace") {
        finalInput += value;
        setValue();
        if (inputCount < otpInputs.length - 1) {
          updateInputConfig(e.target.nextElementSibling, false);
        }
      }
      inputCount += 1;
    } else if (value.length == 0 && e.key == "Backspace") {
      finalInput = finalInput.substring(0, finalInput.length - 1);
      setValue();
      if (inputCount == 0) {
        updateInputConfig(e.target, false);
        return false;
      }
      updateInputConfig(e.target, true);
      e.target.previousElementSibling.value = "";
      updateInputConfig(e.target.previousElementSibling, false);
      inputCount -= 1;
    } else if (value.length > 1) {
      e.target.value = value.split("")[0];
    }
  });
});

window.addEventListener("keyup", (e) => {
  if (inputCount > otpInputs.length - 1) {
    // submit form on final char
    loginForm.submit();
    if (e.key == "Backspace") {
      finalInput = finalInput.substring(0, finalInput.length - 1);
      setValue();
      updateInputConfig(otpContainer.lastElementChild, false);
      otpContainer.lastElementChild.value = "";
      inputCount -= 1;
    }
  }
});

startInput();

const toggleButton = document.getElementsByClassName("toggle-btn")[0];
const menuLinks = document.getElementsByClassName("menu-links")[0];

toggleButton.addEventListener("click", () => {
  menuLinks.classList.toggle("active");
});

var errorMsg = document.getElementById("error-message");
let submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", (e) => {
  validateForm(e);
});

function validateForm(e) {
  e.preventDefault();
  let name = document.getElementById("input-name").value;
  let phone = document.getElementById("input-phone").value;
  let quantity = document.getElementById("input-quantity").value;
  let productChoice = document.getElementById("input-product-choice").value;
  let address = document.getElementById("input-address").value;

  if (!validateName(name)) return;
  else if (!validatePhone(phone)) return;
  else if (!validateQuantity(quantity)) return;
  else if (!validateProductChoice(productChoice)) return;
  else if (address === "") {
    errorMsg.innerHTML = "Please fill in your address!";
    return;
  } else if (!address.endsWith(" road")) {
    errorMsg.innerHTML = "Address must end with 'road'";
    return;
  }
  alert("Form has been submitted!");
  return true;
}

function validateName(name) {
  let len = name.length;
  let alpha = 0;
  // panjang lbh dari 5 karakter
  if (name === "") {
    errorMsg.innerText = "Please insert name!";
    return false;
  }
  if (name.length < 5) {
    errorMsg.innerText = "Name must contain at least 5 characters!";
    return false;
  }
  //apakah alphabet
  for (let i = 0; i < len; i++) {
    if (
      (name.charAt(i) >= "a" && name.charAt(i) <= "z") ||
      (name.charAt(i) >= "A" && name.charAt(i) <= "Z")
    ) {
      alpha++;
    }
  }
  if (len !== alpha) {
    errorMsg.innerText = "Name must be alphabet!";
    return false;
  }
  errorMsg.innerText = "";
  return true;
}

function validatePhone(phone) {
  if (phone === "") {
    errorMsg.innerText = "Please insert phone number!";
    return false;
  }
  if (isNaN(phone)) {
    errorMsg.innerText = "Phone must be a number!";
    return false;
  }
  if (phone.length < 10 || phone.length > 13) {
    errorMsg.innerText = "Phone must be between 10-13 numbers!";
    return false;
  }
  if (phone[0] !== "0" || phone[1] !== "8") {
    errorMsg.innerText = "Phone must start with 08!";
    return false;
  }
  errorMsg.innerText = "";
  return true;
}

function validateQuantity(quantity) {
  if (quantity === "") {
    errorMsg.innerText = "Please enter product quantity!";
    return false;
  }
  if (quantity < 1) {
    errorMsg.innerText = "Product quantity must be more than 0!";
    return false;
  }
  errorMsg.innerText = "";
  return true;
}

function validateProductChoice(productChoice) {
  if (productChoice === "") {
    errorMsg.innerText = "Please select a product!";
    return false;
  }
  errorMsg.innerText = "";
  return true;
}

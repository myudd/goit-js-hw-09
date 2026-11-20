import * as defaults from "../main.js";
const form = document.querySelector('.feedback-form');
const formData = {
    email: "",
    message: "",
};
const message = form.elements.message;
const email = form.elements.email;
const storageKey = "feedback-form-state";
const saved = localStorage.getItem(storageKey);

if (saved) {
  try {
    const parsed = JSON.parse(saved);
    email.value = parsed.email ?? "";
    message.value = parsed.message ?? "";
      formData.email = parsed.email ?? "";
      formData.message = parsed.message ?? "";
  } catch (error) {
    console.error("Invalid JSON in storage:", error);
  }
}

form.addEventListener('input', (event) => {
    formData.email = email.value;
    formData.message = message.value;
    localStorage.setItem(storageKey, JSON.stringify(formData));
})
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let trimedEmail = form.email.value.trim();
    let trimedMessage = form.message.value.trim();
    if (trimedEmail === "" || trimedMessage === "") {
        alert("Fill please all fields");
        return;
    }
    localStorage.removeItem(storageKey);
    form.reset();
    formData.email = "";
    formData.message = "";
    console.log(formData);
})

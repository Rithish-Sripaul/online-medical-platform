const wrapper = document.querySelector(".wrapper");
const docBgImg = document.querySelector(".bg-img-doctor");
const patBgImg = document.querySelector(".bg-img-patient");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");
const doctorLink = document.querySelector(".patient-doctor");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});

doctorLink.addEventListener("click", () => {
  docBgImg.classList.toggle("active");
  patBgImg.classList.toggle("active");
});

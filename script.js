const signIn = document.querySelector(".sign-in");
const btnOpenSignIn = document.querySelector(".hidden");
const btnCloseSignIn = document.querySelector(".close-button");
const btnCloseSignInPrimary = document.querySelector(".close-button-primary");
const overLay = document.querySelector(".overlay");
const overLay2 = document.querySelector(".overlay-2");
const overLay3 = document.querySelector(".overlay-3");
const closeDownloadButton = document.querySelector(".close-button-second");
const congratulationSignIn = document.querySelector(".hidden-2");
const btnCreateAccount = document.querySelector(".button-create-account");
const btnDownloadApp = document.querySelector(".download-btn");
const downloadNow = document.querySelector(".hidden-3");
signIn.addEventListener("click", function () {
  btnOpenSignIn.classList.remove("hidden");
  overLay.classList.remove("hidden");
});

btnCloseSignIn.addEventListener("click", function () {
  btnOpenSignIn.classList.add("hidden");
  overLay.classList.add("hidden");
  congratulationSignIn.classList.add(".hidden-2");
  overLay2.classList.add(".hidden-2");
});

btnCloseSignInPrimary.addEventListener("click", function () {
  congratulationSignIn.classList.add("hidden-2");
  overLay2.classList.add("hidden-2");
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    btnOpenSignIn.classList.add("hidden");
    overLay.classList.add("hidden");
  }
});
btnCreateAccount.addEventListener("click", function () {
  congratulationSignIn.classList.remove("hidden-2");
  overLay2.classList.remove("hidden-2");
  btnOpenSignIn.classList.add("hidden");
  overLay.classList.add("hidden");
});

btnDownloadApp.addEventListener("click", function () {
  downloadNow.classList.remove("hidden-3");
  overLay3.classList.remove("hidden-3");
});
closeDownloadButton.addEventListener("click", function () {
  downloadNow.classList.add("hidden-3");
  overLay3.classList.add("hidden-3");
});
overLay3.addEventListener("click", function () {
  downloadNow.classList.add("hidden-3");
  overLay3.classList.add("hidden-3");
});

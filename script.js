////////////////Encrypt///////////////////////

function sendForm() {
  let textarea = document.querySelector("textarea");
  let messageToEncrypt = textarea.value;
  let alert = document.getElementById("alert");
  if (messageToEncrypt == "") {
    alert.innerHTML = "Debe llenar el campo solicitado";
  } else if (
    /[A-Z]/.test(messageToEncrypt) ||
    /[áéíóúÁÉÍÓÚ\g]/.test(messageToEncrypt)
  ) {
    alert.innerHTML = "¡No incluyas mayúsculas ni tildes!";
  } else {
    alert.innerHTML = "";

    let img = document.getElementById("img-encrypter");
    let titleNotFound = document.getElementById("title-notfound");
    let notfound = document.getElementById("text-notfound");
    let copyButton = document.getElementById("copy-button");
    let textEncryptedMessage = document.getElementById("encryptedMessage");
    let encryptedMessage = messageToEncrypt
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat")
      .replace(/a/g, "ai");

    textEncryptedMessage.innerHTML = encryptedMessage;
    img.style.display = "none";
    notfound.style.display = "none";
    titleNotFound.style.display = "none";
    copyButton.style.display = "block";

    textarea.value = "";
  }
}

////////////////Desencrypt///////////////////////

function sendFormToDesencrypt() {
  let textarea = document.querySelector("textarea");
  let messageToDesencrypt = textarea.value;
  let alert = document.getElementById("alert");
  if (messageToDesencrypt == "") {
    alert.innerHTML = "Debe llenar el campo solicitado";
  } else {
    let img = document.getElementById("img-encrypter");
    let titleNotFound = document.getElementById("title-notfound");
    let notfound = document.getElementById("text-notfound");
    let textDesencryptedMessage = document.getElementById("encryptedMessage");
    let copyButton = document.getElementById("copy-button");
    let desencryptedMessage = messageToDesencrypt
      .replace(/ai/g, "a")
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");

    desencryptedMessage.replace(/ai/g, "a");

    textDesencryptedMessage.innerHTML = desencryptedMessage;
    textarea.value = "";
    img.style.display = "none";
    notfound.style.display = "none";
    titleNotFound.style.display = "none";
    copyButton.style.display = "block";
  }
}

//////////////////Copy text/////////////////////

function copyMessage() {
  let textEncryptedMessage = document.getElementById("encryptedMessage");
  let textarea = document.querySelector("textarea");
  let copyButton = document.getElementById("copy-button");
  textarea.value = textEncryptedMessage.innerHTML;
  textEncryptedMessage.innerHTML = "";
  let img = document.getElementById("img-encrypter");
  let notfound = document.getElementById("text-notfound");
  let titleNotFound = document.getElementById("title-notfound");
  img.style.display = "block";
  notfound.style.display = "block";
  titleNotFound.style.display = "block";
  copyButton.style.display = "none";
}

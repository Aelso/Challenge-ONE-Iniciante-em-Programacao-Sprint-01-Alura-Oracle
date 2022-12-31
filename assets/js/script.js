const inputField = document.querySelector(".digite_texto");
const outputField = document.querySelector(".campo_msg");
document.getElementById("aparece_copia").style.display = 'none';

const letterMapping = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat"
};

function encrypt() {
  const encryptedText = applyMapping(inputField.value, letterMapping);
  outputField.value = encryptedText;
  outputField.style.backgroundImage = "none";
  showCopyButton();
}

function decrypt() {
  const decryptedText = applyMapping(inputField.value, invertMapping(letterMapping));
  outputField.value = decryptedText;
  outputField.style.backgroundImage = "none";
  showCopyButton();
}

function applyMapping(text, mapping) {
  text = text.toLowerCase();
  for (const letter in mapping) {
    if (text.includes(letter)) {
      text = text.replace(new RegExp(letter, "g"), mapping[letter]);
    }
  }
  return text;
}

function invertMapping(mapping) {
  const invertedMapping = {};
  for (const letter in mapping) {
    invertedMapping[mapping[letter]] = letter;
  }
  return invertedMapping;
}

function copyToClipboard() {
  outputField.select();
  navigator.clipboard.writeText(outputField.value);
  outputField.value = "";
}

function showCopyButton() {
  document.getElementById("aparece_copia").style.display = "block";
}




// Ecouteur du range (longueur du mot de passe)
const range = document.querySelector('.label-length');
range.value = 10;
let passwordLength = document.querySelector(".label-length-value");
range.addEventListener("input", evt => {
    passwordLength.textContent = range.value;
}, false)

// Ecouteur du formulaire
const form = document.querySelector('.form-container');
form.addEventListener("submit", evt => {
    evt.preventDefault();
    generatePassword();
}, false)


/**
 * Fonction de génération de mot de passe
 */
let inputPassword = document.querySelector(".input-password");
function generatePassword() {
    const lowercase = document.querySelector('.lowercase').checked;
    const uppercase = document.querySelector('.uppercase').checked;
    const number = document.querySelector('.number').checked;
    const special = document.querySelector('.special').checked;

    inputPassword.value = "";
    let errorMessage = document.querySelector(".error-message");
    if (!lowercase && !uppercase && !number && !special) {
        errorMessage.textContent = "Au moins un bouton doit être coché !"
    }
    else {
        errorMessage.textContent = ""
        // Préparation des caractéres choisie pour le mot de passe
        let ref = []
        if (lowercase) {
            for (let i = 97; i <= 122; i++) {
                ref.push(String.fromCharCode(i));
            }
        }
        if (uppercase) {
            for (let i = 65; i <= 90; i++) {
                ref.push(String.fromCharCode(i));
            }
        }
        if (number) {
            for (let i = 0; i <= 9; i++) {
                ref.push(i);
            }
        }
        if (special) {
            let specialCharacters = "!@#$%^&*()_+{}[]:;<>,.?/~";
            for (let i = 0; i <= specialCharacters.length - 1; i++) {
                ref.push(specialCharacters[i]);
            }
        }
        // Création du mot de passe
        for (let i = 0; i < range.value; i++) {
            const j = Math.floor(Math.random() * ref.length);
            inputPassword.value += ref[j];
        }
    }
}

// Ecouteur du bouton copier
const copy = document.querySelector('.img-copy');
copy.addEventListener("click",evt=>{
    navigator.clipboard.writeText(inputPassword.value);
},false)
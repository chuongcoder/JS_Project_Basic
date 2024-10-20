
const myInput = document.getElementById("myInput");
const btn = document.querySelector(".js-btn");
const copyMessage = document.getElementById("copyMessage");

// Maximum length of the new password
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+|}{[]></-=";
const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
    let password = "";
    // Ensure at least one character from each set is included
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    // Fill the rest of the password length with random characters
    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    // Shuffle the password to ensure randomness
    myInput.value = shuffleString(password);
}

function shuffleString(str) {
    let arr = str.split('');
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    // contack char -> new pass 
    return arr.join('');
}


// The Clipboard API provides the ability to interact with the system clipboard.
//  This allows you to read from or write to the clipboard. It's more secure and modern compared 
//  to the deprecated document.execCommand('copy') method.
async function copyPass() {
    try {
        await navigator.clipboard.writeText(myInput.value);
        showCopyMessage();
    } catch (error) {
        console.error("Could not copy text: ", error);
    }
}

function showCopyMessage() {
    copyMessage.style.display = 'block';
    setTimeout(() => {
        copyMessage.style.display = 'none';
    }, 2000);
}

// Attach event listener to the button
btn.addEventListener("click", createPassword);




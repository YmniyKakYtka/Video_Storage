let accountEmailInput = document.querySelector('.email');
let accountPasswordInput = document.querySelector('.password');
let submitButton = document.querySelector('.login__submit');

function readTextFile(file) {
    let rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status === 200) {
            let data = JSON.parse(rawFile);
            return data;
        }
    }
    rawFile.send(null);
}

//usage:
let data = readTextFile("account.json")

submitButton.addEventListener('click', () => {
    if(accountEmailInput.value === data.email && accountPasswordInput.value === data.password) {

    }
});
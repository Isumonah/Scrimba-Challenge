let firstPassword = document.getElementById('first-password');
let secondPassword = document.getElementById('second-password');
let thirdPassword= document.getElementById('third-password');
let fourthPassword = document.getElementById('fourth-password');

let char = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+=-:;'/?.,><\|{}[]";



function passwords(x){
    let password = "";
    let passwordLength = 15;
    for (let i= 0; i < passwordLength; i++){
    let number = Math.floor(Math.random() * char.length);
    password += char[number];
    }

    x.value = password
}

function genPassword(){
    passwords(firstPassword);
    passwords(secondPassword);
    passwords(thirdPassword);
    passwords(fourthPassword);
    

    

}
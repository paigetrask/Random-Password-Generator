let char = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "~", "!", "@", "#", "$", "%", "^", "&", "(", ")", "-", "+", "=", "a", "A", "b", "B", "c", "C", "d", "D", "e", "E", "f", "F", "g", "G", "h", "H", "i", "I", "j", "J", "k", "K", "l", "L", "m", "M", "n", "N", "o", "O", "p", "P", "q", "Q", "r", "R", "s", "S", "t", "T", "u", "U", "v", "V", "w", "W", "x", "X", "y", "Y", "z", "Z"]
let enterValue = document.getElementById("enter-value")
let input = document.getElementById("input")

input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("button").click()
    }
})

function changeValueMessage() {
    let input = document.getElementById("input").value
    if (input < 6 || input > 18) {
        enterValue.textContent = "Please choose length of 6-18 characters"
    }  else {
        enterValue.textContent = ""
    } 
}

function password1() {
    let password1 = document.getElementById("password-1")
    let output1 = document.getElementById("output-1")
    let input = document.getElementById("input").value
    
    output1.style.backgroundImage = "none"
    password1.textContent = ""
    for (let i = 0; i < input; i++) {
        let randomIndex = Math.floor(Math.random() * char.length)
        password1.textContent += char[randomIndex]
    }
}

function password2() {
    let password2 = document.getElementById("password-2")
    let output2 = document.getElementById("output-2")
    let input = document.getElementById("input").value
    
    output2.style.backgroundImage = "none"
    password2.textContent = ""
    for (let i = 0; i < input; i++) {
        let randomIndex = Math.floor(Math.random() * char.length)
        password2.textContent += char[randomIndex]
    }
}

function password3() {
    let password3 = document.getElementById("password-3")
    let output3 = document.getElementById("output-3")
    let input = document.getElementById("input").value
    
    output3.style.backgroundImage = "none"
    password3.textContent = ""
    for (let i = 0; i < input; i++) {
        let randomIndex = Math.floor(Math.random() * char.length)
        password3.textContent += char[randomIndex]
    }
}

function password4() {
    let password4 = document.getElementById("password-4")
    let output4 = document.getElementById("output-4")
    let input = document.getElementById("input").value
    
    output4.style.backgroundImage = "none"
    password4.textContent = ""
    for (let i = 0; i < input; i++) {
        let randomIndex = Math.floor(Math.random() * char.length)
        password4.textContent += char[randomIndex]
    }
}

function generatePasswords() {  
    let input = document.getElementById("input").value
    if (input != "") {
        if (input > 5 && input < 19) {
    password1()
    password2()
    password3()
    password4()
    }
    }
}


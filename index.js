//LIFE AND MANA MOD FUNCS
function plus(){
    if(!isNaN(Number(document.getElementById("modValue").value))){
        if(document.getElementById("vid").checked){
        document.getElementById("vida").value = Number(document.getElementById("vida").value) + Number(document.getElementById("modValue").value)
        }
        else if(document.getElementById("man").checked){
            document.getElementById("mana").value = Number(document.getElementById("mana").value) + Number(document.getElementById("modValue").value)
        }
    }
    else{
        document.getElementById("modValue").value = "DIGITE UM NÚMERO ANTA!"
    }
}

function sub(){
    if(!isNaN(Number(document.getElementById("modValue").value))){
        if(document.getElementById("vid").checked){
        document.getElementById("vida").value = Number(document.getElementById("vida").value) - Number(document.getElementById("modValue").value)
        }
        else if(document.getElementById("man").checked){
            document.getElementById("mana").value = Number(document.getElementById("mana").value) - Number(document.getElementById("modValue").value)
        }
    }
    else{
        document.getElementById("modValue").value = "value need to be a number!"
    }
}

//DICES

function d4(){
    document.getElementById("resultado").textContent = "d4: " + (Math.floor(Math.random() * 4) + 1)
}

function d6(){
    document.getElementById("resultado").textContent = "d6: " + (Math.floor(Math.random() * 6) + 1)
}

function d8(){
    document.getElementById("resultado").textContent = "d8: " + (Math.floor(Math.random() * 8) + 1)
}

function d10(){
    document.getElementById("resultado").textContent = "d10: " + (Math.floor(Math.random() * 10) + 1)
}

function d12(){
    document.getElementById("resultado").textContent = "d12: " + (Math.floor(Math.random() * 12) + 1)
}

function d20(){
    document.getElementById("resultado").textContent = "d20: " + (Math.floor(Math.random() * 20) + 1)
}

//LOCAL STORAGE
document.getElementById("vida").value = localStorage.getItem("vida")
document.getElementById("mana").value = localStorage.getItem("mana")

window.onbeforeunload = function save(){
    localStorage.setItem("vida", document.getElementById("vida").value);
    localStorage.setItem("mana", document.getElementById("mana").value);
}
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
        document.getElementById("modValue").value = "value need to be a number!"
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
function load(){
    
    document.getElementById("vida").value = localStorage.getItem("vida")
    document.getElementById("mana").value = localStorage.getItem("mana")
    document.getElementById("notes").value = localStorage.getItem("notes")

    if(localStorage.getItem("num")>num){
        for(let j=1; j<(localStorage.getItem("num")/9);j++){
            document.getElementById("vida").value = localStorage.getItem("vida")
            document.getElementById("mana").value = localStorage.getItem("mana")
            document.getElementById("notes").value = localStorage.getItem("notes")
            criar()
        }
    }

    if(localStorage.getItem("num")>9){
        for(let j=1; j<=localStorage.getItem("num"); j++){
            if(document.getElementById(j)){
                document.getElementById("vida").value = localStorage.getItem("vida")
                document.getElementById("mana").value = localStorage.getItem("mana")
                document.getElementById("notes").value = localStorage.getItem("notes")
                document.getElementById(j).value = localStorage.getItem(j)    
            }   
        }
    }
}

var num = 9
load()

function save(){
    
    localStorage.setItem("vida", document.getElementById("vida").value)
    localStorage.setItem("mana", document.getElementById("mana").value)
    localStorage.setItem("notes", document.getElementById("notes").value)
    localStorage.setItem("num", num)
    for(let j=1; j<=localStorage.getItem("num")-9; j++){
        localStorage.setItem(j, document.getElementById(j).value)
    }
}

window.onbeforeunload = function peidar(){
    localStorage.setItem("vida", document.getElementById("vida").value)
    localStorage.setItem("mana", document.getElementById("mana").value)
    localStorage.setItem("notes", document.getElementById("notes").value)
    localStorage.setItem("num", num)
    for(let j=1; j<=localStorage.getItem("num")-9; j++){
        localStorage.setItem(j, document.getElementById(j).value)
    }
}

function reset(){
    location.reload(true)
    localStorage.clear()
}

//ROLLS PERSONALIZADOS

function criar(){
    document.body.innerHTML +=
    `<div class="pamonha">
    <div class="milho">
    <textarea class="ab" placeholder="name" id="${num-8}"></textarea>
    <button id="${num}" onclick="rolar(${num})">ROLL</button>
    </div>
    <details>
    <div class="pipoca">
    <textarea class="dice" placeholder="d4" id="${num-7}"></textarea>
    <textarea class="dice" placeholder="d6" id="${num-6}"></textarea>
    <textarea class="dice" placeholder="d8" id="${num-5}"></textarea>
    <textarea class="dice" placeholder="d10" id="${num-4}"></textarea>
    </div> 
    <div class="pica">
    <textarea class="dice" placeholder="d12" id="${num-3}"></textarea>
    <textarea class="dice" placeholder="d20" id="${num-2}"></textarea>
    <textarea class="dice" placeholder="mod" id="${num-1}"></textarea>
    </div>
    <summary></summary>
    </details>
    </div>`
    num += 9
}

function rolar(i){
    let final = document.getElementById(i-1).value

    for(let j=0; j < document.getElementById(i-7).value; j++){
        final = Number(final)+(Math.floor(Math.random() * 4) + 1)
    }
    for(let j=0; j < document.getElementById(i-6).value; j++){
        final = Number(final)+(Math.floor(Math.random() * 6) + 1)
    }
    for(let j=0; j < document.getElementById(i-5).value; j++){
        final = Number(final)+(Math.floor(Math.random() * 8) + 1)
    }
    for(let j=0; j < document.getElementById(i-4).value; j++){
        final = Number(final)+(Math.floor(Math.random() * 10) + 1)
    }
    for(let j=0; j < document.getElementById(i-3).value; j++){
        final = Number(final)+(Math.floor(Math.random() * 12) + 1)
    }
    for(let j=0; j < document.getElementById(i-2).value; j++){
        final = Number(final)+(Math.floor(Math.random() * 20) + 1)
    }

    document.getElementById("resultado").textContent = document.getElementById(i-8).value + ": " + final
}
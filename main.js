
const phrases = [
    {
        text:"Uma grande oportunidade de aprendizado vai aparecer!"
    },
    {
       text:"Você vai receber uma boa notícia hoje!"
    },
    {
        text:"Você vai ter sorte com o amor!"
    },
    {
        text:"Você vai ganhar um café grátis hoje"
    },
    {
        text:"Cuidado com o buraco!"
    },
    {
        text:"Você vai se sentir muito motivado hoje!"
    },
    {
        text:"Você vai achar uma moeda hoje!"
    },
    {
        text:"Você vai perder peso essa semana!"
    },
    {
        text:"Um assaltante vai passar direto por você!"
    },
    {
        text:"Cuidado com o pombo na Entrevista de emprego!"
    }
] 
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const luckyText = document.querySelector("#luckyText")
let randomPhrases = phrases[Math.floor(Math.random() * phrases.length)];
luckyText.innerText = randomPhrases.text


const btnTry = document.querySelector("#btnCookie")
const btnReset = document.querySelector("#btnReset")

btnTry.addEventListener('click', function(){
    screen1.classList.add("hide")
    screen2.classList.remove("hide")
})
btnReset.addEventListener('click', function(){
    screen1.classList.remove("hide")
    screen2.classList.add("hide")
})



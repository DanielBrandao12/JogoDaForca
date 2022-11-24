const btn = document.querySelector('.btn-check')
const btnSortear = document.querySelector('.btn-sortear')
const divLinha = document.querySelector('.container-linha')
const table = document.querySelector('table')
const forca = document.querySelector('.img')
const listaAlfabeto = document.querySelector('.lista-letras')
let backgrounds = [
    'url("img/1.png")',
    'url("img/2.png")',
    'url("img/3.png")',
    'url("img/4.png")',
    'url("img/5.png")',
    'url("img/6.png")',
    'url("img/7.png")'
]
let palavras = [
    'Maçã',
    'Pera',
    'Uva',
    'Melão'
]
let alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"]

alfabeto.forEach(e=>{
    let divAlfabeto = document.createElement('div')
    console.log(e)
    divAlfabeto.innerHTML = `<button>${e}</button>`
    listaAlfabeto.appendChild(divAlfabeto)
})
let i=1

btn.addEventListener('click', e=>{
    console.log(i)
    forca.style.background = backgrounds[i]
    forca.style.backgroundSize = 'cover'
    i++
})

btnSortear.addEventListener('click', e =>{
    let arr = []
    let qtdePalavra =[]
    let div = document.createElement('div')
    const palavra = Math.floor(Math.random() * palavras.length)
    
    for(let i= 0; i< palavras[palavra].length;i++){
        arr =palavras[palavra].split("")
        console.log(arr)
        qtdePalavra.push(`<div class="linha" id='${i}'></div>`)
        div.innerHTML = qtdePalavra.join('')
    }
    divLinha.appendChild(div)
})
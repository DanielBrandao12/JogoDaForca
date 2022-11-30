const btn = document.querySelector('.btn-check')
const btnSortear = document.querySelector('.btn-sortear')
const divLinha = document.querySelector('.container-linha')
const table = document.querySelector('table')
const forca = document.querySelector('.img')
const listaAlfabeto = document.querySelector('.lista-letras')
const quadroLetra = document.querySelectorAll('.linha')

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
    'MAÇA',
    'PERA',
    'UVA',
    'MELÃO'
]
let alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"]

alfabeto.forEach(e=>{
    let divAlfabeto = document.createElement('div')
 
    divAlfabeto.innerHTML = `<button id="btnLetra">${e}</button>`
    listaAlfabeto.appendChild(divAlfabeto)
})
let i=1
const btnLetra = document.querySelectorAll('#btnLetra')
btn.addEventListener('click', e=>{

    forca.style.background = backgrounds[i]
    forca.style.backgroundSize = 'cover'
    i++
})

let arr = []
btnSortear.addEventListener('click', e =>{
    let qtdePalavra =[]
    let div = document.createElement('div')
    const palavra = Math.floor(Math.random() * palavras.length)
    
    for(let i= 0; i< palavras[palavra].length;i++){
        arr =palavras[palavra].split("")
        console.log(arr)
        qtdePalavra.push(`<div class="linha" ></div>`)
        div.innerHTML = qtdePalavra.join('')
        console.log(arr)
    }
    divLinha.appendChild(div)
    return arr
})

btnLetra.forEach(e =>{
    e.addEventListener('click', () =>{
        if(arr.includes(e.innerText)){
            
            console.log( e.innerText)
        }
       // console.log(arr.indexOf(e.innerText))
    })
})

quadroLetra.forEach(insereLetra =>{
    insereLetra.addEventListener('click' ,()=>{

        console.log(insereLetra.innerHTML)
    })
})
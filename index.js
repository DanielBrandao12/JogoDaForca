const btn = document.querySelector('.btn-check')
const btnSortear = document.querySelector('.btn-sortear')
const divLinha = document.querySelector('.container-linha')
const table = document.querySelector('table')
const forca = document.querySelector('.img')

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



let i=1

btn.addEventListener('click', e=>{
    console.log(i)
    forca.style.background = backgrounds[i]
    forca.style.backgroundSize = 'cover'
    i++
})
let div = document.createElement('div')
btnSortear.addEventListener('click', e =>{
    for (let i = 0; i < 10; i++) {
    div.innerHTML = `<div class="linha" ${i}>a</div>`
    }
 
    this.divLinha.appendChild(div)
})
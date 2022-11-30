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
const btnLetra = document.querySelectorAll('#btnLetra')


let index=1


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
        //console.log(arr)
        qtdePalavra.push(`<div class="linha" ><span>${arr[i]}</span></div>`)
        div.innerHTML = qtdePalavra.join('')
       // console.log(arr)
    }
    divLinha.appendChild(div)
    const quadroLetra = document.querySelectorAll('.linha span')
    
    //Encontrar algum jeito de fazer o teste sem usar o for
    for(let i =0; i< quadroLetra.length;i++){
        
        btnLetra.forEach(e =>{
            e.addEventListener('click', () =>{
                if(e.innerText == arr[i]){
                    quadroLetra[i].style.visibility = 'visible'
                    console.log( e.innerText + 'oi')
                }else{
                    forca.style.background = backgrounds[index]
                    forca.style.backgroundSize = 'cover'
                    
                }
                
                index++
            })
        })
        console.log(quadroLetra[i])
        
    }
    return arr
})



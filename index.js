const btn = document.querySelector('.btn-check')
const btnSortear = document.querySelector('.btn-sortear')
const divLinha = document.querySelector('.container-linha')
const table = document.querySelector('table')
const forca = document.querySelector('.img')
const listaAlfabeto = document.querySelector('.lista-letras')

//Lista de imagens de sequencia da forca
let backgrounds = [
    'url("img/1.png")',
    'url("img/2.png")',
    'url("img/3.png")',
    'url("img/4.png")',
    'url("img/5.png")',
    'url("img/6.png")',
    'url("img/7.png")'
]

//Lista de palavras provisorio
let palavras = [
    'MAÇA'
]
let alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"]

//cria o tabuleiro de letras
alfabeto.forEach(e=>{
    let divAlfabeto = document.createElement('div')
 
    divAlfabeto.innerHTML = `<button id="btnLetra">${e}</button>`
    listaAlfabeto.appendChild(divAlfabeto)
})

const btnLetra = document.querySelectorAll('#btnLetra')


/*
btn.addEventListener('click', e=>{
    
    forca.style.background = backgrounds[i]
    forca.style.backgroundSize = 'cover'
    i++
})
*/

let arr = []

btnSortear.addEventListener('click', e =>{

    let qtdePalavra =[]

    let div = document.createElement('div')

    const palavra = Math.floor(Math.random() * palavras.length)
    
    for(let i= 0; i< palavras[palavra].length;i++){

        arr =palavras[palavra].split("")
        qtdePalavra.push(`<div class="linha" ><span></span></div>`)
        div.innerHTML = qtdePalavra.join('')
      
    }

    divLinha.appendChild(div)
  
    const quadroLetra = document.querySelectorAll('.linha span')

   
    let j =1
   
  
       btnLetra.forEach(e =>{
           e.addEventListener('click', () =>{

            
               
               for(let i = 0; i<arr.length;i++){
                if(e.innerText == replaceSpecialChars(arr[i])){

                    
                    quadroLetra[i].innerText = arr[i]
                      
                  console.log(quadroLetra[i])
                    e.disabled = true
                   
               } 

              }

              console.log()
              
              
              if(e.innerText != arr[arr.indexOf(e.innerText)] && replaceSpecialChars(arr[arr.indexOf(e.innerText)])){
             
                    btnLetra[alfabeto.indexOf(e.innerText)].style.background ='red'
                
               
           }
            
              
       
           
                   
                  
                    
               
                        
                    
              
       
               
            })
       })
})


    

function replaceSpecialChars(str)
{
    str = str.replace(/[ÀÁÂÃÄÅ]/,"A");
    str = str.replace(/[àáâãäå]/,"a");
    str = str.replace(/[ÈÉÊË]/,"E");
    str = str.replace(/[Ç]/,"C");
    str = str.replace(/[ç]/,"c");

    // o resto

    return str.replace(/[^a-z0-9]/gi,''); 
}
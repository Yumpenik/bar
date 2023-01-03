const botonPizza  = document.getElementById('botonPizza')
const botonPapas  = document.getElementById('botonPapas')
const botonTragos = document.getElementById('botonTragos')
const botonBurger = document.getElementById('botonBurger')
const botonMilas  = document.getElementById('botonMilas')

const sectionPizza  = document.getElementById('pizza')
const sectionPapas  = document.getElementById('papas')
const sectionTragos = document.getElementById('tragos')
const sectionBurger = document.getElementById('burger')
const sectionMilas  = document.getElementById('milas')

let condicionMostrar

sectionPizza.style.display = 'none'
sectionPapas.style.display = 'none'
sectionTragos.style.display = 'none'
sectionBurger.style.display = 'none'
sectionMilas.style.display = 'none'
  
botonPizza.addEventListener('click', function(){Mostrar(1)})
botonPapas.addEventListener('click', function(){Mostrar(2)})
botonTragos.addEventListener('click', function(){Mostrar(3)})
botonBurger.addEventListener('click', function(){Mostrar(4)})
botonMilas.addEventListener('click', function(){Mostrar(5)})

function Mostrar(a){

condicionMostrar = a

  sectionPizza.style.display = 'none'
  sectionPapas.style.display = 'none'
  sectionTragos.style.display = 'none'
  sectionBurger.style.display = 'none'
  sectionMilas.style.display = 'none'
  
  switch(a){
    
    case 1: {sectionPizza.style.display = 'flex'}
    break
    case 2: {sectionPapas.style.display = 'flex'}
    break
    case 3: {sectionTragos.style.display = 'flex'}
    break
    case 4: {sectionBurger.style.display = 'flex'}
    break
    case 5: {sectionMilas.style.display = 'flex'}
    break
    
  }
}

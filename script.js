//modais
const modal0 = document.getElementById('modal0');
const modal1 = document.getElementById('modal1');
const modal2 = document.getElementById('modal2');
const modal3 = document.getElementById('modal3');
const modal4 = document.getElementById('modal4');
const modal5 = document.getElementById('modal5');
const modal6 = document.getElementById('modal6');
const modal7 = document.getElementById('modal7');
const modal8 = document.getElementById('modal8');
const modal9 = document.getElementById('modal9');
const modal10 = document.getElementById('modal10');
//todos os modais
const fechar = document.querySelectorAll('.fechar')
const palavra = document.querySelectorAll('.palavra')
// audio
const button = document.querySelector('button')
button.addEventListener('click' , function(){
    const audio = document.querySelector('audio')
    audio.play()
})



//modal0
palavra[0].addEventListener('click',() =>{
    modal0.style.display = 'block'
})

fechar[0].addEventListener('click',() =>{
    modal0.style.display = 'none'
})

//modal1
palavra[1].addEventListener('click',() =>{
    modal1.style.display = 'block'
})

fechar[1].addEventListener('click',() =>{
    modal1.style.display = 'none'
})

palavra[2].addEventListener('click',() =>{
    modal2.style.display = 'block'
})

fechar[2].addEventListener('click',() =>{
    modal2.style.display = 'none'
})

palavra[3].addEventListener('click',() =>{
    modal3.style.display = 'block'
})

fechar[3].addEventListener('click',() =>{
    modal3.style.display = 'none'
})

palavra[4].addEventListener('click',() =>{
    modal4.style.display = 'block'
})

fechar[4].addEventListener('click',() =>{
    modal4.style.display = 'none'
})

palavra[5].addEventListener('click',() =>{
    modal5.style.display = 'block'
})

fechar[5].addEventListener('click',() =>{
    modal5.style.display = 'none'
})

palavra[6].addEventListener('click',() =>{
    modal6.style.display = 'block'
})

fechar[6].addEventListener('click',() =>{
    modal6.style.display = 'none'
})

palavra[7].addEventListener('click',() =>{
    modal7.style.display = 'block'
})

fechar[7].addEventListener('click',() =>{
    modal7.style.display = 'none'
})

palavra[8].addEventListener('click',() =>{
    modal8.style.display = 'block'
})

fechar[8].addEventListener('click',() =>{
    modal8.style.display = 'none'
})

palavra[9].addEventListener('click',() =>{  
    modal9.style.display = 'block'
})

fechar[9].addEventListener('click',() =>{
    modal9.style.display = 'none'
})

// palavra[10].addEventListener('click',() =>{
//     modal10.style.display = 'block'
// })

// fechar[10].addEventListener('click',() =>{
//     modal10.style.display = 'none'
// })


let botao = document.querySelectorAll("#botao")
let audio = document.querySelectorAll("#audio0")

botao[0].addEventListener("mouseouver", (e) => {
    audio[0].play()
})
botao[0].addEventListener("mouseout", (e) => {
    audio[0].pause()

})

const buttonConto = document.querySelector('.conto-janela')
const primeiroContainer = document.querySelector('.primeiro_container')

buttonConto.addEventListener('click' , () => {
  
    if(primeiroContainer.style.display === 'none'){
        primeiroContainer.style.display = 'block'
       
    }else{
        primeiroContainer.style.display = 'none'
    }
})





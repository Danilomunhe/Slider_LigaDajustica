'use strict'

const images = [
    {id:'1', url: './img/super.jpg'},
    {id:'2', url: './img/aquaman.jpg'},
    {id:'3', url: './img/ww.jpg'},
    {id:'4', url: './img/flash.jpg'},
    {id:'5', url: './img/bat.jpg'},
    {id:'6', url: './img/cyborg1.jpg'},
    {id:'7', url: './img/liga.jpg'},
    
]

const criarSlider = (images) =>{
    
    //Cria o span anterior
    const slider = document.querySelector('.slider')
    const anteriorButton = document.createElement('span')
    anteriorButton.classList.add('slider-button')
    anteriorButton.id = 'anterior'
    anteriorButton.innerHTML = '&laquo'

    //cria a div das imagens
    const sliderContainer = document.createElement('div')
    sliderContainer.classList.add('slider-item-container')
    const slides =  images.map(item =>
        `
        <div class="slider-item">
            <img src="${item.url}">
        </div>`
        )
    sliderContainer.innerHTML = slides.join("")
   
    //criar o span proximo
    const proximoButton = document.createElement('span')
    proximoButton.classList.add('slider-button')
    proximoButton.id = 'proximo'
    proximoButton.innerHTML = '&raquo'

    //inserindo os objetos html no doom
    slider.appendChild(sliderContainer)
    slider.appendChild(anteriorButton)
    slider.appendChild(proximoButton)
}
criarSlider(images)

const sliderItemContainer = document.querySelector('.slider-item-container')
let sliderItems = document.querySelectorAll('.slider-item')

const proximoItem = ()=>{
    const primeiroItem = sliderItems[0]
    sliderItemContainer.appendChild(primeiroItem)
    sliderItems = document.querySelectorAll('.slider-item')

}
const itemAnterior = ()=>{
    const ultimoItem = sliderItems[sliderItems.length-1]
    sliderItemContainer.prepend(ultimoItem)
    sliderItems = document.querySelectorAll('.slider-item')
}


document.getElementById('anterior').addEventListener('click', itemAnterior)
document.getElementById('proximo').addEventListener('click', proximoItem)
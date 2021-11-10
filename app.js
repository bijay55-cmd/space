var openmenu = document.querySelector('.hamburger')
var  closemenu = document.querySelector('.close')

openmenu.addEventListener('click', () => {
    document.querySelector('.overlay').classList.toggle('show')
})

closemenu.addEventListener('click', () => {
    document.querySelector('.overlay').classList.remove('show')
})
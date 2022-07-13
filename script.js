const modal = document.getElementById('modal')
const buttonOpen = document.getElementById('buttonOpen')
const modal_close = document.getElementById('modal_close--remove')
/* const modal_contant_close = document.getElementById('modal-contant--close') */

buttonOpen.addEventListener('click', () => {
    modal.classList.add('big-background--open')
})
modal_close.addEventListener('click', () => {
    modal.classList.remove('big-background--open')
})

/* modal_contant_close.addEventListener('click', () => {
    modal.classList.remove('big-background--open')
}) */
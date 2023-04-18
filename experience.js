$(() => {

//modal

const $openBtn = $('#openModal')
const $modal = $('#modal')
const $closeBtn = $('#closeModal')
   
  
const openModal = () => {
    $modal.css('display', 'block')
}

const closeModal = () => {
    $modal.css('display', 'none')
}

$openBtn.on('click', openModal)
$closeBtn.on('click', closeModal)
    
  
});
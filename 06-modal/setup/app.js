// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay


document.querySelector('.modal-btn').addEventListener("click",()=>{
    document.querySelector('.modal-overlay').classList.add("open-modal")
})

document.querySelector('.close-btn').addEventListener("click",()=>{
    document.querySelector('.modal-overlay').classList.remove("open-modal")
})
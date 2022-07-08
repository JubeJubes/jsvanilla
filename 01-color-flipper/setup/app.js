const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener("click",colorChange)

function colorChange() {
    color.textContent =  document.body.style.backgroundColor = colors[Math.floor(Math.random()*4)]
    
}



const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener("click",()=>{
    let cstring ='#'
    for (let i=0;i<6;i++) {
        cstring = cstring.concat(hex[Math.floor(Math.random()*hex.length)])
    }
    document.body.style.background = cstring;
    color.textContent  = color.style.color = cstring
    
})
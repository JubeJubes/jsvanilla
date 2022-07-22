let count =0
let decrease = document.querySelector('.decrease')
let reset = document.querySelector('.reset')
let increase = document.querySelector('.increase')

decrease.addEventListener("click", ()=> {
    count--
    Count()
})
reset.addEventListener("click", ()=> {
    count=0
    Count()
})
increase.addEventListener("click", ()=> {
    count++
    Count()
})

const Count =()=>document.getElementById('value').textContent = count
//using selectors inside the element
// traversing the dom

const articles = document.querySelectorAll('.question')
const plus = document.querySelectorAll('.fa-plus-square')
const minus = document.querySelectorAll('.fa-minus-square')

plus.forEach((el,i)=>{
    el.addEventListener("click", ()=> {
        articles.forEach((el,m)=> {
            if(i!==m) el.classList.remove("show-text")
        })
        articles[i].classList.add("show-text")

    })
})

minus.forEach((el,i)=>{
    el.addEventListener("click", ()=> {
        articles[i].classList.remove("show-text")
    })
})
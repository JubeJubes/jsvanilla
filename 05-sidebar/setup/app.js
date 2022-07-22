const open = document.querySelector('.sidebar-toggle')
open.addEventListener("click", ()=> {
    document.querySelector('.sidebar').classList.add("show-sidebar")
    console.log(document.querySelector('.sidebar').classList)
})


document.querySelector('.close-btn').addEventListener("click",()=>{
   document.querySelector('.sidebar').classList.remove("show-sidebar")

})
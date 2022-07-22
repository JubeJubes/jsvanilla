// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navBtn = document.querySelector('.nav-toggle')

navBtn.addEventListener("click",()=>{
    let links = document.querySelector('.links')
    links.classList.toggle('show-links')
    
    
})

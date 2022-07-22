// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************

// ********** close links ************
const navToggle = document.querySelector('.nav-toggle')
const linksContainer = document.querySelector('.links-container')
const links = document.querySelector('.links')

navToggle.addEventListener("click",()=>{
    // linksContainer.classList.toggle('show-links')
    const containerHeight = linksContainer.getBoundingClientRect().height
    const linksHeight = links.getBoundingClientRect().height

    linksContainer.style.height = (containerHeight===0)?
        `${linksHeight}px`:0
})
// ********** fixed navbar ************
const toplink = document.querySelector('.top-link')
const navbar = document.querySelector('#nav')
window.addEventListener("scroll", ()=>{
    if (window.pageYOffset > navbar.getBoundingClientRect().height) {
        navbar.classList.add('fixed-nav')
    } else  {
         navbar.classList.remove('fixed-nav')
    }

    if (window.pageYOffset > 500) {
        toplink.classList.add('show-link')
    } else  {
        toplink.classList.remove('show-link')
    }


})
// ********** smooth scroll ************
// select links
const scrollLinks=document.querySelectorAll('.scroll-link')
scrollLinks.forEach((link)=>{
    link.addEventListener("click",(e)=>{
        
        e.preventDefault()
        
        const idName = (e.currentTarget.getAttribute('href')).slice(1)
        const element = document.getElementById(idName)
        let position = (navbar.classList.contains('fixed-nav'))? 
            element.offsetTop-navbar.getBoundingClientRect().height  :
            element.offsetTop-navbar.getBoundingClientRect().height -navbar.getBoundingClientRect().height 
        if ((navbar.getBoundingClientRect().height)>82) position = position+linksContainer.getBoundingClientRect().height
        window.scrollTo({
            top: position,
            left:0
        })
        linksContainer.style.height = 0
        console.log(position,e)
    })
})
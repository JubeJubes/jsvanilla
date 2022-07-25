const tabs = document.querySelectorAll('.tab-btn')
const contents = document.querySelectorAll('.content')

tabs.forEach((tab)=> {
    tab.addEventListener("click",(e)=>{
        const id = e.currentTarget.dataset.id
        tabs.forEach((tab)=>{
            if (tab.dataset.id === id) e.currentTarget.classList.add('active')
            else tab.classList.remove('active')
            })
        contents.forEach((content)=> {
            if (content.id === id) content.classList.add('active')
            else content.classList.remove('active')
        })
    })
})



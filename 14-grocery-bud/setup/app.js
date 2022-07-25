// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert')
const form = document.querySelector('.grocery-form')
const grocery = document.querySelector('#grocery')
const submitBtn = document.querySelector('.submit-btn')
const container = document.querySelector('.grocery-container')
const list = document.querySelector('.grocery-list')
const clearBtn = document.querySelector('.clear-btn')

// edit option
let editElement;
let editFlag = false;
let editID = "";
const arr1 = [1,2,3]

// ****** EVENT LISTENERS **********
window.onload = pageInit()

form.addEventListener("submit", addItem)
clearBtn.addEventListener("click", clearItems)

// ****** FUNCTIONS **********
function pageInit() {
    setBackToDefault()
    if ('List' in localStorage) {
        let listDB = JSON.parse(localStorage.getItem('List'))
        if (listDB.length >0) {
            Object.keys(listDB).forEach((key)=>{
                populate(listDB[key].id,listDB[key].value)
                setBackToDefault()
            })
            container.classList.add('show-container')
        }
    }
}
function addItem(e){
    e.preventDefault()
    const value = grocery.value
    const id = new Date().getTime().toString()
    if(value && !editFlag){

        populate(id,value)

        flash("success", "Item added")
        addToLocalStorage(id,value)
        setBackToDefault()
 
    }
    else if (value && editFlag) {
        editElement.textContent = value
        updateLocalStorage(editID,value)
        flash("success", "item updated ")
        setBackToDefault()
    }
    else {
        flash("danger", "please enter value ")
    }

    if(list.children.length>0) container.classList.add('show-container')
}

function populate(id,value) {
    const element = document.createElement('article') 
    element.classList.add('grocery-item')
    element.setAttribute('data-id',id)
    element.innerHTML = `<p class="title">${value}</p>
                            <div class="btn-container">
                                <button type="button" class="edit-btn">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button type="button" class="delete-btn">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>`

    const editBtn = element.querySelector('.edit-btn')
    const deleteBtn = element.querySelector('.delete-btn')
    editBtn.addEventListener ("click",editClicked)
    deleteBtn.addEventListener ("click",deleteClicked)
    list.appendChild(element)
}

function flash (flag,text) {
    alert.classList.add(`alert-${flag}`)
    alert.textContent= text
    setTimeout(() => {
        alert.textContent=''
        alert.classList.remove(`alert-${flag}`)  
    }, 1500);
}

function clearItems (e) {
    list.innerHTML = ''
    emptyLocalStorage()
    container.classList.remove('show-container')
    flash("success","List has been emptied")
    setBackToDefault()
    
}

function setBackToDefault() {
    grocery.value = ''
    editFlag=false
    editID =""
    submitBtn.textContent = "submit"
    grocery.select()
}

function editClicked(e){
    grocery.value=''
    submitBtn.textContent = "edit"
    editFlag=true
    editID = e.currentTarget.parentElement.parentElement.dataset.id;
    editElement = e.currentTarget.parentElement.parentElement.querySelector('.title')
    grocery.select()
    grocery.value = editElement.textContent
    
}
function deleteClicked(e){
    const element = e.target.parentElement.parentElement.parentElement
    list.removeChild(element);
    if(list.children.length<1) container.classList.remove('show-container')
    removeFromLocalStorage(element.dataset.id)
    flash("danger", "item removed ")
    setBackToDefault()
    }
// ****** LOCAL STORAGE **********
function addToLocalStorage(id,value) {
    let listDB = JSON.parse(localStorage.getItem('List')) ||[]
    const item = {
        'id':id,
        'value': value,
    }
    listDB.push(item)
    localStorage.setItem("List",JSON.stringify(listDB))
}
function removeFromLocalStorage(id) {
    let listDB = JSON.parse(localStorage.getItem('List'))
    listDB = listDB.filter(el=>el.id!==id)
    localStorage.setItem("List",JSON.stringify(listDB))
    
}
function updateLocalStorage(id,value) {
    let listDB = JSON.parse(localStorage.getItem('List')) ||[]
    let item = listDB.find(el=>el.id===id)
    item.value = value
    localStorage.setItem("List",JSON.stringify(listDB))

}

function emptyLocalStorage() {
    localStorage.removeItem('List')
}






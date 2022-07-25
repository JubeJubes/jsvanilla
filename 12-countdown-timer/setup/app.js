const giveaway = document.querySelector('.giveaway')
const headings = document.querySelectorAll('.deadline-format div')
const deadline = document.querySelector('.deadline')

const nDate = new Date(Date.UTC(2023,0,1,0,0,0))
let now = new Date()

const getZone =new Intl.DateTimeFormat().resolvedOptions().timeZone
const giveawayText = nDate.toLocaleString("en-US", {timeZone:getZone.timeZone,weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})

const oneUnit = [60*60*24,60*60,60,1]
const unit = ["day","hour","min","sec"]

let count =0
if (nDate-now > 0) {
  deadline.classList.remove('expired')
  setInterval(countDown,1000)
}
else {
  clearInterval(countDown)
  giveaway.textContent= `Sorry. The giveaway ended on ${giveawayText}`
  deadline.classList.add('expired')
}


function countDown() {
  const counter = new Date()
  let rem = (nDate-counter)/1000
  headings.forEach((heading,i)=>{
    const num = Math.floor(rem/oneUnit[i])
    rem = rem-num*oneUnit[i]
    heading.innerHTML = pad(num,i)  
  })

  giveaway.textContent=`giveaway ends on ${giveawayText}`
  now = counter
}

function pad(item,i) {
  item = (item<10)?
   `<h4>0${item}</h4><span>${unit[i]}</span>` :
   `<h4>${item}</h4><span>${unit[i]}s</span>`
  return item
}




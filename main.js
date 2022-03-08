//constants
const countEl = document.getElementById('count')
const lowerEl = document.getElementById('lower')
const addEl = document.getElementById('add')


lowerEl.addEventListener('click', () =>{
const countElValue = parseInt(countEl.textContent)

    countEl.textContent = countElValue -1
})

addEl.addEventListener('click', ()=>{
const countElValue = parseInt(countEl.textContent)
    countEl.textContent = countElValue + 1
    
})


const foodLog = document.querySelector("#meals")
const saveLog = document.querySelector("#save-log")
const deleteLog = document.querySelector("#delete-log")
const notesOutput = document.querySelector("#output")

// constants referencing html ID

saveLog.addEventListener("click", function () {
  event.preventDefault()
  let logText1 = document.querySelector("#PCF").value
  output.textContent = logText1;
  fetch('http://localhost:3000/notes/', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ "PCF": logText1 })
  })
    .then(r => r.json())
    .then(data => { console.log(data) }
    )
})
// this works in concept but the goal is not to print to a premade output in html, 
// rather make a new element with js

window.addEventListener('load', function () {
  fetch('http://localhost:3000/notes/')
    .then(response => response.json())
    .then(data => { console.log(data) })
})

// this is for when the page initially loads

notesOutput.addEventListener('submit', function (event) {
  event.preventDefault()
  fetch('http://localhost:3000/moods/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ notes: PCF.value, datetime: moment().format('YYYY-MM-DD HH:mm') })
  })
    .then(r => r.json())
    .then(newNote => {
      const newNoteEl = createNoteEl(newNote)
      addToFoodLog(newNoteEl)
    })
})

// no console errors, but purpose here is to make a new note element with the value from PCF with a timestamp
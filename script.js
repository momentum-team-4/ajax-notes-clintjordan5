

const foodLog = document.querySelector("#meals")
const saveLog = document.querySelector("#save-log")
const deleteLog = document.querySelector("#delete-log")
const notesOutput = document.querySelector("#output")

const textareaElement = document.querySelector("#note-text")
let valueToPostToServer = textareaElement.value
// this should post the value from the note-text form to the API

// constants referencing html ID

saveLog.addEventListener("note-text", function () {
  // changed listener from click to note text
  event.preventDefault()
  let logText1 = document.querySelector("#PCF").value
  submit.textContent = logText1;
  // changed output to submit
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
  // need to make a for loop and a .map array?
  fetch('http://localhost:3000/notes/')
    .then(response => response.json())
    .then(data => { console.log(data) })
})

// this is for when the page initially loads

function createNoteEl()
// added functions to call in the code below
textareaElement.addEventListener('submit', function (event) {
  event.preventDefault()
  fetch('http://localhost:3000/moods/', {
    method: 'GET',
    // changed POST to GET
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ notes: PCF.value, datetime: moment().format('YYYY-MM-DD HH:mm') })
  })
    .then(r => r.json())
    .then(newNote => {
      const newNoteEl = createNoteEl(newNote)
      div(newNoteEl)
      // attempting to make a new div that will show the new note
    })
})

// stuck on what to put on line 43. The idea is that it will listen for the form in textareaElement to submit
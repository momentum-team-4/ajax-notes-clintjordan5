window.addEventListener('load', function(){
    fetch('http://localhost:3000/notes/')
    // seeing in node that my "home" is http://localhost:3000, 
    // but the project readme says it should be "....3000/notes"
    .then(response => response.json())
    .then(data => {console.log(data)})
})
// worked on this line of code with group as starting point

let foodLog = document.querySelector("#meals")
let save = document.querySelector("#save-log")

save.addEventListener ("click", function () {
    event.preventDefault()
    let listNotes = document.querySelector("#text").text
    listNotes.textContent= "Daily Nutrition" + listNotes ; 
})
// trying to make save log button display text of "Daily Nutrition" + list of the notes added 

const saveLog = document.querySelector('save-log')
// making a constant for each ID 

let saveLog = document.querySelector('save-log')
// same as line 9 but "let" rather than "const"

// console error is that saveLog is already declared so need to see which one works

fetch('http://localhost:3000/notes/', {
  method: 'POST', 
  headers: {"Nutrition Log": "application/json"}, 
  body: JSON.stringify({"title": "test", "test 2": "test 3"})
})
.then(r => r.json())
.then(
)

// from readme.md
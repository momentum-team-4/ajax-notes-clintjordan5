const foodLog = document.querySelector("#meals")
const saveLog = document.querySelector("#save-log")
const deleteLog = document.querySelector("#delete-log")
const notesOutput = document.querySelector ("#output")


saveLog.addEventListener ("click", function () {
    event.preventDefault()
    let logText = document.querySelector(".meals").value
    output.textContent= logText + " Meals Logged " ; 
})

window.addEventListener('load', function(){
  fetch('http://localhost:3000/notes/')
  .then(response => response.json())
  .then(data => {console.log(data)})
})


fetch('http://localhost:3000/notes/', {
  method: 'POST', 
  headers: {"Nutrition Log": "application/json"}, 
  body: JSON.stringify({"title": "test", "test 2": "test 3"})
})
.then(r => r.json())
.then(
)

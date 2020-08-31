

const foodLog = document.querySelector("#meals")
const saveLog = document.querySelector("#save-log")
const deleteLog = document.querySelector("#delete-log")
const notesOutput = document.querySelector("#output")


saveLog.addEventListener("click", function () {
  event.preventDefault()
  let logText1 = document.querySelector("#meal1").value
  let logText2 = document.querySelector("#meal2").value
  let logText3 = document.querySelector("#meal3").value
  let logText4 = document.querySelector("#meal4").value
  let logText5 = document.querySelector("#meal5").value
  output.textContent = logText1 + logText2 + logText3 + logText4 + logText5;
  fetch('http://localhost:3000/notes/', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ "meal1": logText1 })
    // where to add meal 2, meal 3, etc?
  })
    .then(r => r.json())
    .then(data => { console.log(data) }
    )
})

window.addEventListener('load', function () {
  fetch('http://localhost:3000/notes/')
    .then(response => response.json())
    .then(data => { console.log(data) })
})


fetch('http://localhost:3000/notes/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ meals: meal1.value, datetime: moment().format('YYYY-MM-DD HH:mm')})
})
  .then(r => r.json())
  .then(newMeal => {
    const newMealEl = createMealEl(newMeal)
    addToMealsDiv(newMealEl)
  })

// need to define moment and newMealEl
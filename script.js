document.addEventListener("DOMContentLoaded", setUpPage)

function setUpPage() {
    console.log('this is a log from the intitial load of the dom')
    addFormHandler()
}

function processForm(event) {
    event.preventDefault();
    let description = document.querySelector('#description').value
    let estTime = document.querySelector('#estTime').value
    let priority = document.querySelector('#priority').value
    addTodoItem(description, estTime, priority)
    event.target.reset()
}

function addTodoItem(description, estTime, priority) {
let tableBody = document.querySelector('tbody')
let html = ` <tr>
                <td>${description}</td>
                <td>${estTime}</td>
                <td>${priority}</td>
            </tr>`
            tableBody.innerHTML += html
}

function addFormHandler() {
    let form = document.querySelector('#toDoForm')
    form.addEventListener('submit', processForm)
}


document.addEventListener("DOMContentLoaded", setUpPage)

function setUpPage() {
    console.log('this is a log from the intitial load of the dom')
    addFormHandler()
    loadTodoItems()
}

function processForm(event) {
    event.preventDefault();
    let description = document.querySelector('#description').value
    let estTime = document.querySelector('#estTime').value
    let priority = document.querySelector('#priority').value
    addTodoItem(description, estTime, priority)
    event.target.reset()
}

function loadTodoItems() {
fetch("http://localhost:3000/posts").then(res => res.json()).then(data => saveData(data))
}
function saveData(data) {
    let posts = data
    console.log(posts)
    posts.forEach(post => renderTodoItems(post))
}

function renderTodoItems(post) {
   
    let tableBody = document.querySelector('tbody')
    let html = ` <tr>
                <td>${post.description}</td>
                <td>${post.estimatedTime}</td>
                <td>${post.priority}</td>
            </tr>`
    tableBody.innerHTML += html
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


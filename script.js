document.addEventListener("DOMContentLoaded", setUpPage)
console.log(1)

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
fetch("http://localhost:3000/posts")
.then(res => res.json())
.then(data => data.forEach(renderTodoItem))
}


function renderTodoItem(post) {
    console.log(post.id)
    let tableBody = document.querySelector('tbody')

    let html = ` <tr>
                <td>${post.description}</td>
                <td>${post.estimatedTime}</td>
                <td>${post.priority}</td>
            </tr>`

            //or

    let alt = document.createElement('tr')
    let des = document.createElement('td')
    let est = document.createElement('td')
    let pri = document.createElement('td')
    des.innerText = post.description
    est.innerText = post.estimatedTime
    pri.innerText = post.priority
    alt.appendChild(des)
    alt.appendChild(est)
    alt.appendChild(pri)
    
    tableBody.appendChild(alt)
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


document.addEventListener("DOMContentLoaded", setUpPage)

function setUpPage() {
    addFormHandler()
    loadTodoItems()
    //listenToKey()
}

function loadTodoItems() {
fetch("http://localhost:3000/posts")
.then(res => res.json())
.then(data => data.forEach(renderTodoItem))
}


function renderTodoItem(post) {
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

function listenToKey() {
    let input = document.querySelector('#description')
    input.addEventListener('keydown', function (e) {
        if (e.key === 'g') { return e.preventDefault() } else { console.log(e.key) }
    })
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

function processForm(event) {
    event.preventDefault();
    let description = document.querySelector('#description').value
    let estTime = document.querySelector('#estTime').value
    let priority = document.querySelector('#priority').value
    addTodoItem(description, estTime, priority)
    saveSubmissionToDb(description, estTime, priority)
    event.target.reset()
}


function saveSubmissionToDb(description, estTime, priority) {
    data = { description: description, estimatedTime: estTime, priority: priority };
    url = "http://localhost:3000/posts"
    fetch(url, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then((data) => {
            console.log(data);
        });
}


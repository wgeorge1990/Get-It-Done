document.addEventListener("DOMContentLoaded", setUpPage())

function setUpPage() {
    console.log('this is a log from the intitial load of the dom')
}

function addFormHandler() {
    let form = document.querySelector('form')
    form.addEventListener('submit', function(event) {
        event.preventDefault();
    })
}











// function addEventListenerButton() {
//     let button = document.querySelector('button')
//     button.addEventListener('click', function() {
//         console.log('Button was clicked', button)
//     })
// }

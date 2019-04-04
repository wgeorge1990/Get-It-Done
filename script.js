document.addEventListener("DOMContentLoaded", function () {
    let button = document.querySelector('button')
    button.addEventListener('click', function() {
       console.log('Button was clicked', button)
    })
})

function init() {
    addEventListenerButton()
}

function addEventListenerButton() {
    let button = document.querySelector('button')
    button.addEventListener('click', function() {
        console.log('Button was clicked', button)
    })
}

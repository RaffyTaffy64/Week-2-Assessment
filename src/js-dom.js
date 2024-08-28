// Unit 2 Assessment: js-dom.js
// This file is imported as a script by `js-dom.html`.
// Refer to `js-dom.html` to see the HTML elements you will be interacting with.

// Log in/log out button
//
// When a user clicks on the button that says "Log In", its text should
// update and say "Log out". If a user clicks on the button again, its text
// should switch from "Log Out" to "Log In".


    const button = document.getElementById('authButton')
    button.addEventListener('click', function() {
        if (button.textContent === 'Log In') {
            button.textContent = 'Log Out'
        } else {
            button.textContent = 'Log In'
        }
    })


// Send an alert
//
// This form will send an alert to a user via the built-in alert function.
//
// A user should be able to enter what they want the alert to say in the
// text box. Then, they can submit the form to trigger the alert.

    const form = document.getElementById('alertForm')
    form.addEventListener('submit', function(event) {
        event.preventDefault()
        const messageInput = document.getElementById('message')
        const message = messageInput.value
        alert(message)
        messageInput.value = ''
    })


// Add an item
//
// This is a pretty silly feature -- when a user clicks on the
// button (the one that says "Double-ulick to add an item"), a new list
// item should appear.
//
// In other words, whenever a user clicks on the button, just
// add another <li>Item</li>. So, a user has clicked on the
// button once, the list should look like this:
//
//   <ol id="list">
//     <li>Item</li>  <!-- This list item was already here -->
//     <li>Item</li>  <!-- This was added after double-clicking -->
//   </ol>


    const addItemButton = document.getElementById('addItemButton')
    const list = document.getElementById('list')
    addItemButton.addEventListener('click', function() {
        const newItem = document.createElement('li')
        newItem.textContent = 'Item'
        list.appendChild(newItem)
    })



// Change colors
//
// Users should be able to change the color of any element with the
// class, "changes-colors", by clicking on the "Turn Stuff Red" button
// or "Turn Stuff Blue" button.
//
// Clicking on "Turn Stuff Red" should make text red and clicking on "Turn
// Stuff Blue" should make text blue.

const turnRedButton = document.getElementById('turnRed')
const turnBlueButton = document.getElementById('turnBlue')
function changeColor(color) {
    const elements = document.querySelectorAll('.changes-colors')
    elements.forEach(element => {
        element.style.color = color
    })
}
turnRedButton.addEventListener('click', function() {
    changeColor('red')
})

turnBlueButton.addEventListener('click', function() {
    changeColor('blue')
})


// Calculate factorial
//
// The factorial of a number is the product of an integer and all the integers
// below it. For example, the factorial of 4 is equal to 4 * 3 * 2 * 1 = 24. The
// factorial of 6 is 6 * 5 * 4 * 3 * 2 * 1 = 720.
//
// Write the following code to calculate the factorial of a positive integer (you
// don't need to worry about negative numbers).
//
// Write a function that calculates the factorial of a positive number Add an
// event listener that catches when someone clicks on the "calculate" button and:
//   - gets whatever number is inside the input field
//   - calls your function that calculates a factorial
//   - puts the result of the function inside the "result" span

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Wait for the DOM to fully load

    const numberInput = document.getElementById('numberInput')
    const calculateButton = document.getElementById('calculateButton')
    const resultSpan = document.getElementById('result')
    calculateButton.addEventListener('click', function() {
        const number = parseInt(numberInput.value, 10)
        if (isNaN(number) || number < 0) {
            resultSpan.textContent = 'Please enter a positive integer.'
            return
        }
        const result = factorial(number)
        resultSpan.textContent = `Factorial of ${number} is ${result}.`
    })


// Validate a form
//
// This form is used to collect word recommendations from users. However, it
// only accepts words that are at least four characters long. Add code that
// checks the length of the text entered into the <textarea> when the user
// submits the form.
//
//  If the text is three or more characters long, change
//  the feedback text to say "Thanks for your submission!" and change
//  the color of the text to green.
//
// If the text is less than three characters long, change
// the feedback text to say "The word must be at least 4 characters long." and
// change the color of the text to red..

const form = document.getElementById('recommendationForm');
const textarea = document.getElementById('wordInput');
const feedback = document.getElementById('feedback');

// Add submit event listener to the form

    event.preventDefault()
    const text = textarea.value
    if (text.length >= 4) {
        feedback.textContent = 'Thanks for your submission!'
        feedback.style.color = 'green'
    } else {
        feedback.textContent = 'The word must be at least 4 characters long.'
        feedback.style.color = 'red'
    }



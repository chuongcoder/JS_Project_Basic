// const notesContainer = document.querySelector('.notes-container');
// const createBtn = document.querySelector('.btn');
// let notes = document.querySelector('.input-box');

// function showNotes() {
//     notesContainer.innerHTML = localStorage.getItem('notes');
// }
// showNotes();

// function updateStorage() {
//     localStorage.setItem('notes', notesContainer.innerHTML);
// }

// // <!-- <p class="input-box" contenteditable="true">
// // <img src="./assets/images/delete.png" alt="">
// // </p> -->
// createBtn.addEventListener('click', () => {
//     let inputBox = document.createElement('p');
//     let img = document.createElement('img');
//     inputBox.className = 'input-box';
//     inputBox.setAttribute('contenteditable','true');
//     img.src = './assets/images/delete.png';
//     notesContainer.appendchild(inputBox).appendchild(img);
// })

// notesContainer.addEventListener('click', function(e) {
//     if(e.target.tagname === 'IMG') {
//         e.target.parentElement.remove();
//         updateStorage();
//     }
//     else if (e.target.tagname === 'p') {
//         notes = document.querySelectorAll('.input-box');
//         notes.forEach(nt => {
//             nt.onkeyup = function() {
//                 updateStorage();
//             }
//         })
//     }
// })


// document.addEventListenere('keydown', event => {
//     if(event.key === 'Enter') {
//         document.execCommand('insertLinearBreak');
//         event.preventDefault();
//     }
// })

const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');
let notes = document.querySelector('.input-box');

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem('notes') || '';
;}

showNotes();

function updateStorage() {
    localStorage.setItem('notes', notesContainer.innerHTML);
};

// Corrected and improved code
createBtn.addEventListener('click', () => {
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className = 'input-box';
    inputBox.setAttribute('contenteditable', 'true');
    img.src = './assets/images/delete.png';
    img.alt = 'Delete note';
    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);
    updateStorage();
});

// This line adds an event listener to the notesContainer element, listening for click events.
// When a click event occurs anywhere inside the notesContainer, the anonymous function (callback) is executed.
// The e parameter represents the event object, which contains details about the event that occurred.
notesContainer.addEventListener('click', function(e) {
    // e.target refers to the element that was clicked.
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        updateStorage();
    }
});


// This line adds an event listener to the notesContainer element, listening for input events.
// An input event is triggered(kích hoạt) whenever the value of an element changes. This includes actions like typing, pasting text, or deleting text within an element.
// When an input event occurs anywhere inside the notesContainer, the anonymous function (callback) is executed.
// The e parameter represents the event object, which contains details about the event that occurred.
notesContainer.addEventListener('input', function(e) {
    // e.target refers to the element that triggered the input event.
    if (e.target.classList.contains('input-box')) {
        updateStorage();
    }
});

document.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        document.execCommand('insertLineBreak');
        event.preventDefault();
    }
});

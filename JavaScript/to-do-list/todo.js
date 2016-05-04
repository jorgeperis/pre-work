
window.onload = function() {

// the following code adds event listeners to the buttons
// you'll learn more about this later
// for this exercise, you are going to write the functions for
// what happens when the user clicks on the buttons.
  var saveButton = document.getElementById('save-button');
  saveButton.addEventListener('click', addToDoItem, false);

  var doneButton = document.getElementById('done-button');
  doneButton.addEventListener('click', markAsDone, false);



  var  text_input= document.getElementById('todo-input');

function addToDoItem() {    
    var text_output = document.createElement('li');
    text_output.innerHTML = text_input.value;
    var insert = document.getElementsByClassName('todo-list-items');
    insert[0].appendChild(text_output);
    text_input.value = "";

  }

  function markAsDone() {
    doneButton.classList.add('liked');
    doneButton.innerHTML = "Liked!";
    document.querySelector('h1').style.color = "red";

    
    text_input = document.querySelector('.todo-list-items li');
    if(text_input !== null){
      var insert = document.getElementsByClassName('done-list-items');
      insert[0].appendChild(text_input);
      text_input.classList.add('done');
    }
  }
  
}


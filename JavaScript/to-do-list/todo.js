
window.onload = function() {

// the following code adds event listeners to the buttons
// you'll learn more about this later
// for this exercise, you are going to write the functions for
// what happens when the user clicks on the buttons.
  var saveButton = document.getElementById('save-button');
  saveButton.addEventListener('click', addToDoItem, false);

  var doneButton = document.getElementById('done-button');
  doneButton.addEventListener('click', markAsDone, false);

  var todoButton = document.getElementById('to-do-button');
  todoButton.addEventListener('click',markAsToDo,false);


function addToDoItem() { 
    var  text_input= document.getElementById('todo-input');   
    var liToListToDo = document.createElement('li');
    var toDoListItems = document.getElementsByClassName('todo-list-items');
    liToListToDo.innerHTML = "<INPUT type=radio name='todo'> "+text_input.value;
    liToListToDo.classList.add('todo');
    toDoListItems[0].appendChild(liToListToDo);
    text_input.value = "";
  }

  function markAsDone() {
    doneButton.classList.add('liked');
    doneButton.innerHTML = "Liked!";
    document.querySelector('h1').style.color = "red";

    var toDoListInput = document.getElementsByName("todo");

    for(i=0;i<toDoListInput.length;i++) {
      if (toDoListInput[i].checked){
        var liToDo = document.getElementsByClassName('todo');
        var doneListItems = document.getElementsByClassName('done-list-items');
        doneListItems[0].appendChild(liToDo[i]);
        document.querySelector('.done-list-items .todo input').name="done";
        document.querySelector('.done-list-items .todo').className="done";

      }
    }
  }

function markAsToDo() {
    
    var doneListInput = document.getElementsByName("done");

    for(i=0;i<doneListInput.length;i++) {
      if (doneListInput[i].checked){
        var liDone = document.getElementsByClassName('done');
        var toDoListItems = document.getElementsByClassName('todo-list-items');
        toDoListItems[0].appendChild(liDone[i]);
        document.querySelector('.todo-list-items .done input').name="todo";
        document.querySelector('.todo-list-items .done').className="todo";

      }
    }
  }
}





  
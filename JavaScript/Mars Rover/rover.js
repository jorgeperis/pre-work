var spirit = { position: [0,0], direction: 'N', name: "Spirit" };
var curiosity = { position: [9,0], direction: 'N', name: "Curiosity" };
var myRover = spirit;
var norover = curiosity;

var obstacle1
var obstacle2
var move
meteo();

function meteo(){
  obstacle1 = [Math.trunc(Math.random()*9+1),Math.trunc(Math.random()*9+1)]; /* Integer range 0-9 */
  obstacle2 = [Math.trunc(Math.random()*9+1),Math.trunc(Math.random()*9+1)];
  if ((obstacle1[0] === obstacle2[0]) && (obstacle1[1] === obstacle2[1])){
    return meteo();
  }
};

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[1]++;
      rover.position[1] = outGrid(rover.position[1]);
      break;
    case 'E':
      rover.position[0]++;
      rover.position[0] = outGrid(rover.position[0]);
      break;
    case 'S':
      rover.position[1]--;
      rover.position[1] = outGrid(rover.position[1]);
      break;
    case 'W':
      rover.position[0]--;
      rover.position[0] = outGrid(rover.position[0]);
      break;
  } 
};

function goBack(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[1]--;
      rover.position[1] = outGrid(rover.position[1]);
      break;
    case 'E':
      rover.position[0]--;
      rover.position[0] = outGrid(rover.position[0]);
      break;
    case 'S':
      rover.position[1]++;
      rover.position[1] = outGrid(rover.position[1]);
      break;
    case 'W':
      rover.position[0]++;
      rover.position[0] = outGrid(rover.position[0]);
      break;
  }
};

function right(rover) {
  directions(rover,'right');
};

function left(rover) {
  directions(rover,'left');
};

function outGrid(position) {
  switch (position){
    case 10:
      return 0;
      break;
    case -1:
      return 9;
      break;
    default:
      return position;
  }
};

function directions(rover,turn) {
  if (turn === 'right'){
    switch(rover.direction){
      case 'N':
        rover.direction = 'E'
        break;
      case 'E':
        rover.direction = 'S'
        break;
      case 'S':
        rover.direction = 'W'
        break;
      case 'W':
        rover.direction = 'N'
        break;
    }} else {
      switch(rover.direction){
      case 'N':
        rover.direction = 'W'
        break;
      case 'E':
        rover.direction = 'N'
        break;
      case 'S':
        rover.direction = 'E'
        break;
      case 'W':
        rover.direction = 'S'
        break;
    }
  }
};

function intro() {
  move = prompt("Rover: " + myRover.name + ". Type movements (f,r,l,b) to play, type 'c' to change rover or type 'exit'");
  if (validator(move)){
  movement(move)}
};

function validator(text) {
  var valid = ['f','r','l','b'];
  var ok = 0;
  if ((text === null) || (text.toLowerCase() === 'exit')){
    return false;
  }else if (text.toLowerCase() === 'c'){
    if (myRover.name === 'Spirit'){
      spirit = myRover;
      norover = spirit;
      myRover = curiosity;
      return intro();
    }else {
      curiosity = myRover;
      norover = curiosity;
      myRover = spirit;
      return intro();
    }
  }else{
    for (i=0;i<text.length;i++) {
      for(j=0;j<valid.length;j++) {
       if (valid[j] === move[i]) {
          ok++;
        } 
      }
    }
  if ( ok !== text.length) {
    alert("Type the right movements");
    return intro();
  }
return true
}

};

function movement(text) {
  for(i=0;i<text.length;i++) {
    switch(text[i]) {
      case 'f':
        goForward(myRover)
        break;
      case 'r':
        right(myRover)
        break;
      case 'l':
        left(myRover)
        break;
      case 'b':
        goBack(myRover)
        break;
    }
    if(((obstacle1[0] === myRover.position[0])&&(obstacle1[1] === myRover.position[1]))||
      ((obstacle2[0] === myRover.position[0])&&(obstacle2[1] === myRover.position[1]))||
      ((norover.position[0] === myRover.position[0])&&(norover.position[1] === myRover.position[1]))){
      switch(text[i]){
        case 'f':
          goBack(myRover)
          break;
        case 'r':
          left(myRover)
          break;
        case 'l':
          right(myRover)
          break;
        case 'b':
          goForward(myRover)
          break;
      }
      alert("\xa1Emergency stop, near to crash!");
      print_console();
      return intro();
    }
  }
    print_console();
    return intro();
};

function print_console(){
  console.log(myRover.name + ": position and direction: [" + myRover.position[0] + "][" + myRover.position[1] + "] " + myRover.direction);
  if (myRover.name === 'Spirit'){
    posi.innerHTML = '';
    posi = document.getElementById(myRover.position.join(''));
    posi.innerHTML = myRover.name[0];
  } else {
    posi1.innerHTML = '';
    posi1 = document.getElementById(myRover.position.join(''));
    posi1.innerHTML = myRover.name[0];
  }
};







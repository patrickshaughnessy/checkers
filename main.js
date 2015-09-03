$(document).ready(init);

function init(){

$('table').css('opacity', '0');

function displayInputBox(){
  var $input = $('<input>')
                .attr('id', 'userInput')
                .addClass('inputBox')
                .attr('placeholder', 'Type a number');
  $('h1').after($input);
}

displayInputBox();

// listen for enter keypress
$('#userInput').on('keypress', getUserInput);


function getUserInput(e){
  var n = 0;

  if (e.which == 13){
    $('tbody').empty();
    $('table').css('opacity', '0');
    var input = parseInt($('#userInput').val());
      if (isNaN(input) == false){
        n = input;
        finalBoardArray = makeBoardArray(n)
      $('tbody').append(finalBoardArray);
      $('table').animate({opacity: 1}, 'slow');
      clearInput();
      } else {
        alert('Please enter a number');
        clearInput();
      }
    }
}

function makeBoardArray(n){

  var finalBoardArray = []; //array of all rows

  var blackRow = makeRowOfCellsBlack(n); //returns array of one set of tr and td's
  var whiteRow = makeRowOfCellsWhite(n);

  for (var i = 0; i < n; i++){
    if (i%2 == 0){
      var row = "<tr>" + blackRow + "</tr>";
      finalBoardArray.push(row);
    } else {
      var row = "<tr>" + whiteRow + "</tr>";
      finalBoardArray.push(row);
    }
  }
  finalBoardArray = finalBoardArray.join("");
  return finalBoardArray;
}

function makeRowOfCellsBlack(n){
  var tdArray = []; // array of td's
  for (var i = 0; i < n; i++){
    if (i%2 == 0){
      tdArray.push("<td class='black'></td>");
    } else {
      tdArray.push("<td class='white'></td>");
    }
  }
  tdArray = tdArray.join("");
  return tdArray;
}

function makeRowOfCellsWhite(n){
  var tdArray = []; // array of td's
  for (var i = 0; i < n; i++){
    if (i%2 == 0){
      tdArray.push("<td class='white'></td>");
    } else {
      tdArray.push("<td class='black'></td>");
    }
  }
  tdArray = tdArray.join("");
  return tdArray;
}

function clearInput(){
  $('#userInput').val('');
}

}

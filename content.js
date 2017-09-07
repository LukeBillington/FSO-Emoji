var run = setInterval(findModules, 100);

function findModules() {

  // Finished Assignment
  var graded = document.querySelectorAll('.circle-progress--smaller-text');
  for (var k = 0; k < graded.length; k++) {
    if(graded[k].innerText >= 0 && graded[k].innerText <= 69) {
      graded[k].style.backgroundColor = "#FF8A80";
      graded[k].style.border = "5px solid #FF1744";
      graded[k].style.fontSize = "2rem";
      graded[k].innerText = '💩';
    }
    else if(graded[k].innerText >= 70 && graded[k].innerText <= 72) {
      graded[k].style.backgroundColor = "#FFD180";
      graded[k].style.border = "5px solid #FF9100";
      graded[k].style.fontSize = "2rem";
      graded[k].innerText = '😕';
    }
    else if(graded[k].innerText >= 73 && graded[k].innerText <= 79) {
      graded[k].style.backgroundColor = "#80D8FF";
      graded[k].style.border = "5px solid #00B0FF";
      graded[k].style.fontSize = "2rem";
      graded[k].innerText = '😐';
    }
    else if(graded[k].innerText >= 80 && graded[k].innerText <= 89) {
      graded[k].style.backgroundColor = "#A7FFEB";
      graded[k].style.border = "5px solid #1DE9B6";
      graded[k].style.fontSize = "2rem";
      graded[k].innerText = '🙂';
    }
    else if(graded[k].innerText >= 90 && graded[k].innerText <= 99) {
      graded[k].style.backgroundColor = "#B9F6CA";
      graded[k].style.border = "5px solid #00E676";
      graded[k].style.fontSize = "2rem";
      graded[k].innerText = '😄';
    }
    else if(graded[k].innerText == 100) {
      graded[k].style.backgroundColor = "#B388FF";
      graded[k].style.border = "5px solid #651FFF";
      graded[k].style.fontSize = "2rem";
      graded[k].innerText = '💯';
    }
    console.log(graded[k].innerText);
  }
}

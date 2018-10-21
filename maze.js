window.onload=function(){

  var boundary1= document.getElementById("boundary1");
  var walls = document.querySelectorAll(".boundary");

  boundary1.onmouseover = function(){
    boundary1.setAttribute("class", "boundary youlose");
  }
  for (var i = 0; i < walls.length-1; i++) {
    walls[i].onmouseover = function(){
      for (var i = 0; i < walls.length-1; i++) {
        walls[i].setAttribute("class", "boundary youlose");
      }
    }
  }
}
  

window.onload=function(){
var boundary1= document.getElementById("boundary1");
boundary1.onmouseover = donttouchwalls;
}

function donttouchwalls(){
  this.setAttribute(class,"youlose");
}

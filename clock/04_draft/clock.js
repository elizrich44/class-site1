// shim layer with setTimeout fallback
// (by Paul Irish, see http://paulirish.com/2011/requestanimationframe-for-smart-animating/)
window.requestAnimFrame = function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    || 
          window.oRequestAnimationFrame      || 
          window.msRequestAnimationFrame     || 
          function( callback ) {
            window.setTimeout(callback, 1000 / 60);
          };
}();

var canvas, ctx;
var centerX = 200;
var centerY = 200;

function init() {
  canvas = document.createElement('canvas');
  canvas.width = 300;
  canvas.height = 300;
  ctx = canvas.getContext("2d");
  
  document.getElementById('container').appendChild(canvas);
}

function animate() {
  window.requestAnimFrame(animate);
  draw();
}

function clearCanvas() {
  ctx.clearRect(50, 50, canvas.width, canvas.height);
}

function toRadian(angle) {
  return angle / 90 * Math.PI;
}

function getColor(i) {
  var color = "rgba(255,175,55, ";
  // you can try switching the first 720 to e.g. 360 for a nice effect...
  color = color + (i % 720 / 720);
  color = color + ")";
  return color;
}

function draw() {
  var time = new Date().getTime() * 0.1;
  clearCanvas();

  for (var i = 0; i < 720; i++) {
    var angle = (i + time) % 360;
    var x = centerX + Math.sin(toRadian(angle)) * (100 - i / 7.2);
    var y = centerY + Math.cos(toRadian(angle)) * (100 - i / 7.2);
    ctx.fillStyle = getColor(i);
    ctx.fillRect(x, y, 2, 2);
  }
}  

init();
animate();
// shim layer with setTimeout fallback
// (by Paul Irish, see http://paulirish.com/2011/requestanimationframe-for-smart-animating/)
window.requestAnimFrame = function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    || 
          window.oRequestAnimationFrame      || 
          window.msRequestAnimationFrame     || 
          function( callback ) {
            window.setTimeout(callback, 1000 / 60);
          };
}();

var canvas, ctx;
var centerX = 200;
var centerY = 200;

function init() {
  canvas = document.createElement('canvas');
  canvas.width = 300;
  canvas.height = 300;
  ctx = canvas.getContext("2d");
  
  document.getElementById('container2').appendChild(canvas);
}

function animate() {
  window.requestAnimFrame(animate);
  draw();
}

function clearCanvas() {
  ctx.clearRect(50, 50, canvas.width, canvas.height);
}

function toRadian(angle) {
  return angle / 90 * Math.PI;
}

function getColor(i) {
  var color = "rgba(135,206,235, ";
  // you can try switching the first 720 to e.g. 360 for a nice effect...
  color = color + (i % 720 / 720);
  color = color + ")";
  return color;
}

function draw() {
  var time = new Date().getTime() * 0.1;
  clearCanvas();

  for (var i = 0; i < 720; i++) {
    var angle = (i + time) % 360;
    var x = centerX + Math.sin(toRadian(angle)) * (100 - i / 7.2);
    var y = centerY + Math.cos(toRadian(angle)) * (100 - i / 7.2);
    ctx.fillStyle = getColor(i);
    ctx.fillRect(x, y, 2, 2);
  }
}  

init();
animate();












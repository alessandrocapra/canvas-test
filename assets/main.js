function draw() {
  var canvas = document.getElementById("tutorial");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    const ground = ctx.canvas.height;
    canvas.onclick = function () {};
  }
}

const gravity = {
  x: 0,
  y: 0.1,
};

class Circle {
  constructor(position, velocity, width) {
    this.x = x;
    this.y = y;
    this.width = width;
  }

  move() {
    this.velocity.x += gravity.x;
    this.velocity.y += gravity.y;
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}

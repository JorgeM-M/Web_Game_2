
class Platform {
    constructor({ x, y }) {
        this.position = {
            x,
            y,
        }
        this.width = 400
        this.height = 20
    }
    draw() {
        c.fillStyle = "rgb(46, 161, 7)"
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

/* var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var my_gradient = ctx.createLinearGradient(0, 0, 0, 80);
my_gradient.addColorStop(0, "green");
my_gradient.addColorStop(1, "brown");
ctx.fillStyle = my_gradient;
ctx.fillRect(20, 20, 150, 100); */
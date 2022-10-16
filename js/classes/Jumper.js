class Jumper {
    constructor({ x, y }) {
        this.position = {
            x,
            y,
        }
        this.width = 100
        this.height = 20
    }
    draw() {
        c.fillStyle = "rgb(60, 62, 60)"
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}
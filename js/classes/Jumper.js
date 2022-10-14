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
        c.fillStyle = "green"
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}
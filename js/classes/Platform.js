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
        c.fillStyle = "red"
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}
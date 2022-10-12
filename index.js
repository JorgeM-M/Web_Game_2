const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d")

canvas.width = 64 * 16 //1024
canvas.height = 64 * 9 //576

class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100,
        }
        this.width = 100
        this.height = 100
    }

    draw() {
        c.fillStyle = "aqua"
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

const player = new Player()
player.draw()

function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle = "grey"
    c.fillRect(0, 0, canvas.width, canvas.height)

    player.draw()
}
animate()
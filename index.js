const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d")

canvas.width = 64 * 16 //1024
canvas.height = 64 * 9 //576

const gravity = 0.5

class Platform {
    constructor({ x, y }) {
        this.position = {
            x,
            y,
        }
        this.width = 200
        this.height = 20
    }
    draw() {
        c.fillStyle = "red"
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

const player = new Player()

const platforms = [new Platform({x: 200, y: 400}), new Platform({x: 400, y: 200})]

const keys = {
    a:{
        pressed:false
    },
    d:{
        pressed:false
    }
}

function animate() {
    window.requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    c.fillStyle = "grey"
    c.fillRect(0, 0, canvas.width, canvas.height)

    player.velocity.x = 0
    if (keys.d.pressed && player.position.x < 500) {
        player.velocity.x = 4
    } else if (keys.a.pressed && player.position.x > 100) {
        player.velocity.x = -4
    } else {
        if (keys.d.pressed) {
            platforms.forEach(platform => {
                platform.position.x -= 4
            })
        } else if (keys.a.pressed) {
            platforms.forEach(platform => {
                platform.position.x += 4
            })
        }
    }
    
    player.update()
    platforms.forEach(platform => {
        platform.draw()
    })
    
    platforms.forEach(platform => {
        if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
            player.velocity.y = 0
        } // platform collision detection
    })
}
animate()

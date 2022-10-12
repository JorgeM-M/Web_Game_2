const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d")

canvas.width = 64 * 16 //1024
canvas.height = 64 * 9 //576

const gravity = 0.5

const player = new Player()

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
    if (keys.d.pressed) player.velocity.x = 4
    else if(keys.a.pressed) player.velocity.x = -4
    
    player.update()
}
animate()

const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d")

canvas.width = 64 * 16 //1024
canvas.height = 64 * 9 //576

let gravity = 0.5

let player = new Player()

let platforms = [new Platform({x: 0, y: 556}), new Platform({x: 400, y: 556}), new Platform({x: 2000, y: 500})]

let jumpers = [new Jumper({x: 980, y: 500}), new Jumper({x: 1130, y: 550}), new Jumper({x: 1350, y: 400}), new Jumper({x: 1690, y: 500})]

const keys = {
    a:{
        pressed:false
    },
    d:{
        pressed:false
    }
}

let scrollOffset = 0 //win condition

let deathCount = 0

//restarts game once dead
function init(){
    player = new Player()
    
    platforms = [new Platform({x: 0, y: 556}), new Platform({x: 400, y: 556}), new Platform({x: 2000, y: 500})]
    
    jumpers = [new Jumper({x: 980, y: 500}), new Jumper({x: 1130, y: 550}), new Jumper({x: 1350, y: 400}), new Jumper({x: 1690, y: 500})]

    scrollOffset = 0 //win condition

}

function deathAdd() {
    deathCount += 1
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
            scrollOffset += 5 //win condition
            platforms.forEach(platform => {
                platform.position.x -= 4
            })
            jumpers.forEach(jumper => {
                jumper.position.x -= 4
            })
        } else if (keys.a.pressed) {
            scrollOffset -= 5 //win condition
            platforms.forEach(platform => {
                platform.position.x += 4
            })
            jumpers.forEach(jumper => {
                jumper.position.x += 4
            })
        }
    }
    
    player.update()

    platforms.forEach(platform => {
        platform.draw()
    })

    jumpers.forEach(jumper => {
        jumper.draw()
    })
    
    platforms.forEach(platform => {
        if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
            player.velocity.y = 0
        } // platform collision detection
    })

    jumpers.forEach(jumper => {
        if (player.position.y + player.height <= jumper.position.y && player.position.y + player.height + player.velocity.y >= jumper.position.y && player.position.x + player.width >= jumper.position.x && player.position.x <= jumper.position.x + jumper.width) {
            player.velocity.y = 0
        } // platform collision detection
    })

    if (scrollOffset > 2000) {
        console.log("You Win") //win condition
    }

    if (player.position.y > canvas.height) {
        console.log("you lose") //lose condition
        deathAdd()
        console.log(deathCount)
        document.getElementById("deaths").innerHTML = "Deaths: " + deathCount;
        init()
        
        //deathcount()  add points to marker
    }
}
animate()

document.getElementById("deaths").innerHTML = "Deaths: " + deathCount;
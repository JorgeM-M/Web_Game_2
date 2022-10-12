addEventListener("keydown", (event) => {
    switch (event.key) {
        case "w":
            if (player.velocity.y === 0) player.velocity.y = -15 //jump
            break
        case "a":
            keys.a.pressed = true //left
            break
        case "s": //down
            break
        case "d":
            keys.d.pressed = true //right
            break
    }
})

addEventListener("keyup", (event) => {
    switch (event.key) {
        case "a":
            keys.a.pressed = false //left
            break
        case "s": //down
            break
        case "d":
            keys.d.pressed = false //right
            break
    }
})
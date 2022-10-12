class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100,
        }

        this.velocity = {
            x: 0,
            y: 0,
        }

        this.width = 50
        this.height = 50
    }

    draw() {
        c.fillStyle = "aqua"
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    
    update() {
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        this.draw()
       
        if (this.position.y + this.height + this.velocity.y <= canvas.height) {
            this.velocity.y += gravity
        } else this.velocity.y = 0
    }
}
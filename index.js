const canvas = document.querySelector('gamecanvas');
const c = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 800;

c.fillRect (0, 0, canvas.width, canvas.height);

const background = new Sprite({
    imageSrc : '.Post-Pandemic-Palooza/overworld placeholder.png'
})

class Sprite {
    constructor({position, imageSrc}){
        this.position = position;
        this.width = 800;
        this.height =800;
        this.image = newImage()
        this.image.src = imageSrc
    }

    draw(){
        c.drawImage(this.image, this.position.x, this.position.y);
    }

    update() {
        this.draw()
    }
}
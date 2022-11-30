class overworld {
    constructor(config){
        document.getElementsByClassName("gamecontainer", "gamecanvas");
        this.element = config.element;
        // this.canvas = this.element.querySelector(yay);
        this.context = this.canvas.getContext("2d");
    }
    init() {
        const image = new Image();
        image.onload = () => {
            this.context.drawImage(image, 0, 0);
        };
        image.src = "overworld placeholder.png";
    }
}

function mapDraw() {
    const ovrwrld = new overworld({
        element: document.getElementsByClassName("gamecontainer")
    });

    ovrwrld.init();
}

mapDraw();
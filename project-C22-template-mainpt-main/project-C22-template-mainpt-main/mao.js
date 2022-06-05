class mao{
    constructor(x,y,w,h,angulo){
        this.x = x
        this.y =y
        this.width = w
        this.height = h
        this.image = loadImage("assets/playerArcher.png")
        this.angulo = angulo
    }
    mostrar(){
        push()
        imageMode(CENTER)
        translate(this.x,this.y)
        rotate(this.angulo)
        image(this.image, 0, 0, this.width, this.height)
        pop()

    }





}
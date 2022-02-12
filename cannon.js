class Cannon
{
    contructor(a,b,c,d,angle)
    {
this.x = a
this.y = b
this.w = c
this.h = d
this.angle = angle

this.cannonimage = loadImage("assets/canon.png")
this.cannonbaseimage = loadImage("assets/cannonBase.png")
    }

    display()
    {
push ()
translate (this.x, this.y)
rotate (this.angle)
imageMode (CENTER)
image (this.cannonimage, 0, 0,this.w, this.h)
pop ()
image(this.cannonbaseimage, 70, 20, 200, 200)
 }
}
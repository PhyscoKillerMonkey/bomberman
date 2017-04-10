import { Vec2 } from "shared/vec2";
import { Drawable } from "shapes/drawable";

export class Circle implements Drawable {

  private pos: Vec2;
  private radius: number;
  private colour: string;

  constructor(pos: Vec2, radius: number, colour = "rgb(200, 0, 0)") {
    this.pos = pos;
    this.radius = radius;
    this.colour = colour;
  }

  public draw(ctx: CanvasRenderingContext2D, offset: Vec2) {
    ctx.fillStyle = this.colour;
    ctx.beginPath();
    let x = this.pos.x + offset.x;
    let y = this.pos.y + offset.y;
    ctx.arc(x, y, this.radius, 0, 360, false);
    ctx.fill();
    ctx.closePath();
  }

  public getHeight() {
    return this.radius * 2;
  }

  public getWidth() {
    return this.radius * 2;
  }

  public setPos(vec: Vec2) {
    this.pos = vec;
  }

}
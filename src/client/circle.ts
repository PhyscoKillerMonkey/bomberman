import { Drawable } from "./drawable";
import { Vec2 } from "../shared/vec2";

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
    // Remove these lines to center the circle on x, y
    let x = this.pos.x + offset.x + this.radius;
    let y = this.pos.y + offset.y + this.radius;
    ctx.arc(x, y, this.radius, 0, 360, false);
    ctx.fill();
    ctx.closePath();
  }

  public setPos(vec: Vec2) {
    this.pos = vec;
  }

}
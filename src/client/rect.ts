import { Drawable } from "./drawable";
import { Vec2 } from "../shared/vec2";

export class Rect implements Drawable {

  private pos: Vec2;
  private width: number;
  private height: number;
  private colour: string;

  constructor(pos: Vec2, width: number, height: number, colour = "rgb(200, 0, 0)") {
    this.pos = pos;
    this.width = width;
    this.height = height;
    this.colour = colour;
  }

  public draw(ctx: CanvasRenderingContext2D, offset: Vec2) {
    ctx.fillStyle = this.colour;
    let x = this.pos.x + offset.x - this.width / 2;
    let y = this.pos.y + offset.y - this.height / 2;
    ctx.fillRect(x, y, this.width, this.height);
  }

  public setPos(vec: Vec2) {
    this.pos = vec;
  }

}
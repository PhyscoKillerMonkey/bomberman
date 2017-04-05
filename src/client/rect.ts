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

  public setPos(vec: Vec2) {
    this.pos = vec;
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.colour;
    ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
  }

}
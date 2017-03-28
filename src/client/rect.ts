import { Drawable } from "./drawable";
import { Vec2 } from '../shared/vec2';

export class Rect implements Drawable {

  private pos: Vec2;
  private width: number;
  private height: number;
  private colour: string;

  constructor(pos: Vec2, width: number, height: number) {
    this.pos = pos;
    this.width = width;
    this.height = height;
  }

  public setPos(x: number, y: number) {
    this.pos.x = x;
    this.pos.y = y;
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "rgb(200, 0, 0)";
    ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
  }

}
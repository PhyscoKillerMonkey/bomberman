import { Drawable } from "./drawable";
import { Vec2 } from "../shared/vec2";

export class Entity {

  private pos: Vec2;
  private image: Drawable;

  constructor(pos: Vec2, image: Drawable) {
    this.pos = pos;
    this.image = image;
  }

  public draw(ctx: CanvasRenderingContext2D) {
    this.image.draw(ctx, this.pos);
  }

  public move(dVec: Vec2) {
    this.pos.add(dVec);
  }

  public setImage(image: Drawable) {
    this.image = image;
  }

  public setPos(vec: Vec2) {
    this.pos = vec;
  }

}
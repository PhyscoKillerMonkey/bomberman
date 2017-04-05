import { Vec2 } from "../shared/vec2";

export interface Drawable {

  setPos(vec: Vec2): void;
  draw(ctx: CanvasRenderingContext2D): void;

}
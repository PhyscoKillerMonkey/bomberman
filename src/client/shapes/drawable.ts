import { Vec2 } from "shared/vec2";

export interface Drawable {

  getHeight(): number;
  getWidth(): number;
  setPos(vec: Vec2): void;
  draw(ctx: CanvasRenderingContext2D, offset: Vec2): void;

}
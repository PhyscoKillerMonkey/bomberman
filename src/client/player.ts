import { Drawable } from "./drawable";
import { Vec2 } from "../shared/vec2";
import { Input } from "./input";

export class Player {

  private pos: Vec2;
  private image: Drawable;

  constructor(pos: Vec2, image: Drawable) {
    this.pos = pos;
    this.image = image;
  }

  public setPos(vec: Vec2) {
    this.pos = vec;
  }

  public move(dVec: Vec2) {
    console.log("Moving with length: " + dVec.length());
    this.pos.add(dVec);
    this.image.setPos(this.pos);
  }

  public update() {
    // Do input
    let dV = new Vec2();

    if (Input.keyDown("w")) dV.y--;
    if (Input.keyDown("s")) dV.y++;
    if (Input.keyDown("a")) dV.x--;
    if (Input.keyDown("d")) dV.x++;

    // Speed in px per second
    let speed = 96;
    let ups = 60;

    this.move(dV.normalise().multS(speed / ups));
  }

  public draw(ctx: CanvasRenderingContext2D) {
    this.image.draw(ctx);
  }

}
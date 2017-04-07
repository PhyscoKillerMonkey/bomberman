import { Drawable } from "./drawable";
import { Vec2 } from "../shared/vec2";
import { Input } from "./input";
import { Entity } from "./entity";

export class Player extends Entity {

  constructor(pos: Vec2, image: Drawable) {
    super(pos, image);
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

}
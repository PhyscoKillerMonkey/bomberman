import { Game } from "./game";
import { Drawable } from "./drawable";
import { Vec2 } from "../shared/vec2";
import { Input } from "./input";
import { Entity } from "./entity";
import { Bomb } from "./bomb";
import { Circle } from "./circle";

export class Player extends Entity {

  private bombsLeft: number;

  constructor(game: Game, pos: Vec2, image: Drawable) {
    super(game, pos, image);
    this.bombsLeft = 2;
  }

  public update(dt: number, currentTime: number) {
    // Do input
    let dV = new Vec2();

    if (Input.keyDown("ArrowUp")) dV.y--;
    if (Input.keyDown("ArrowDown")) dV.y++;
    if (Input.keyDown("ArrowLeft")) dV.x--;
    if (Input.keyDown("ArrowRight")) dV.x++;

    // Speed in px per second
    let speed = 96;
    let ups = 60;

    this.move(dV.normalise().multS(speed / ups));

    if (Input.keyPressed(" ") && this.bombsLeft > 0) {
      this.bombsLeft--;
      let bombCircle = new Circle(new Vec2(), 5, "rgb(10,10,10)");
      let bomb = new Bomb(this.game, this.getPos().clone(), bombCircle, () => { this.bombsLeft++; });
      this.game.addEntity(bomb);
    }
  }

}
import { Game } from "./game";
import { Drawable } from "./drawable";
import { Vec2 } from "../shared/vec2";
import { Entity } from "./entity";

export class Bomb extends Entity {

  private timer: number;
  private explodeRadius: number;
  private onExplode: () => void;

  constructor(game: Game, pos: Vec2, image: Drawable, onExplode: () => void) {
    super(game, pos, image);
    this.timer = 1;
    this.explodeRadius = 50;
    this.onExplode = onExplode;
  }

  public update(dt: number, currentTime: number) {
    this.timer -= dt;
    if (this.timer <= 0) {
      console.log("BOOM!");
      this.onExplode();
      this.setDead(true);
      
      for (let e of this.game.entities) {
        let dist = e.getPos().clone().sub(this.getPos()).length();
        console.log(dist);
        if (dist < this.explodeRadius) {
          e.setDead(true);
        }
      }
    }
  }

}
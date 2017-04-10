import { Vec2 } from "shared/vec2";
import { Game } from "game";
import { Entity } from "entities/entity";
import { Drawable } from "shapes/drawable";

export class Explosion extends Entity {

  private timer: number;

  constructor(game: Game, pos: Vec2, image: Drawable) {
    super(game, pos, image);
    this.timer = 0.5;
  }

  public update(dt: number, currentTime: number) {
    this.timer -= dt;
    if (this.timer <= 0) {
      this.game.removeEntity(this);
    }
  }

}
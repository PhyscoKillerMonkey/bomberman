import { Vec2 } from "shared/vec2";
import { Game } from "game";
import { Drawable } from "shapes/drawable";

export class Entity {

  protected game: Game;
  private pos: Vec2;
  private image: Drawable;
  private dead = false;

  constructor(game: Game, pos: Vec2, image: Drawable) {
    this.game = game;
    this.pos = pos;
    this.image = image;
  }

  public draw(ctx: CanvasRenderingContext2D) {
    this.image.draw(ctx, this.pos);
  }

  public getImage() {
    return this.image;
  }

  public getPos() {
    return this.pos;
  }

  public isDead() {
    return this.dead;
  }

  public move(dVec: Vec2) {
    this.pos.add(dVec);
  }

  public setDead(dead: boolean) {
    this.dead = dead;
  }

  public setImage(image: Drawable) {
    this.image = image;
  }

  public setPos(vec: Vec2) {
    this.pos = vec;
  }

  public update(dt: number, currentTime: number) {

  }

}
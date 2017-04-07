import { Vec2 } from "../shared/vec2";
import { Drawable } from "./drawable";
import { Rect } from "./rect";
import { Input } from "./input";
import { Player } from "./player";
import { Entity } from "./entity";

export class Game {

  private width: number;
  private height: number;
  private ctx: CanvasRenderingContext2D;

  private running: boolean;
  // dt is the optimum update time
  private dt = 1 / 60;
  private newTime: number;
  private lastTime: number;
  private accumulator: number;

  // update logging stuff
  private updateCount = 0;
  private totalUpdates = 0;
  private ups = 0;
  private renderCount = 0;
  private totalRenders = 0;
  private fps = 0;
  private lastRefresh = 0;

  private entities: Entity[];

  private player: Player;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;

    let canvas = document.createElement("canvas");
    canvas.width = this.width;
    canvas.height = this.height;
    document.body.appendChild(canvas);
    this.ctx = canvas.getContext("2d");

    this.entities = [];

    this.init();
  }

  public start() {
    this.running = true;
    this.newTime = performance.now() / 1000;
    this.accumulator = 0;
    window.requestAnimationFrame(this.loop);
  }

  // Use the fat arrow to preserve the 'this' context
  private loop = (currentTime:number) => {

    // Timings are in seconds
    this.lastTime = this.newTime;
    this.newTime = (currentTime /= 1000);

    // How long the last frame took
    let frameTime = currentTime - this.lastTime;
    frameTime = Math.min(0.25, frameTime);

    this.accumulator += frameTime;

    while (this.accumulator >= this.dt) {
      this.update(currentTime);
      this.accumulator -= this.dt;
      currentTime += this.dt;
    }
 
    /**
     * Alpha is how 'far' into the frame we are.
     * 
     * 0 * dt = we have just got a new state,
     * 0.5 * dt = half way into the current state,
     * 0.999 * dt = right before we get another state.
     * 
     * With alpha, current a previous states we can blend between them to
     * provide a nice smooth animation.
     */
    let alpha = this.accumulator / this.dt;

    this.render(currentTime);

    if (this.running) {
      window.requestAnimationFrame(this.loop);
    }
  }

  private updateCounters(wasUpdate: boolean, currentTime: number) {
    if (wasUpdate) {
      this.updateCount++;
      this.totalUpdates++;
    } else {
      this.renderCount++;
      this.totalRenders++;
    }

    if (currentTime - this.lastRefresh >= 1) {
      this.lastRefresh = currentTime;
      this.ups = this.updateCount;
      this.updateCount = 0;
      this.fps = this.renderCount;
      this.renderCount = 0;
    }

    document.getElementById("test").innerHTML = "Updates: " + this.totalUpdates + " Renders: " + this.totalRenders + "<br>UPS: " + this.ups + " FPS: " + this.fps;
  }



  private init() {
    Input.init();

    let playerRect = new Rect(new Vec2(), 20, 20);
    this.player = new Player(new Vec2(), playerRect);
    this.entities.push(this.player);

    let crateRect = new Rect(new Vec2(), 30, 30, "rgb(195,142,99)");
    for (let i = 0; i < 10; i++) {
      let x = Math.floor(Math.random() * this.width);
      let y = Math.floor(Math.random() * this.height);
      let crate = new Entity(new Vec2(x, y), crateRect);
      this.entities.push(crate);
    }
  }

  private update(currentTime: number) {
    this.updateCounters(true, currentTime);
    Input.update();
    this.player.update();
  }

  private render(currentTime: number) {
    this.updateCounters(false, currentTime);

    this.ctx.fillStyle = "rgb(200, 240, 255)"
    this.ctx.fillRect(0, 0, this.width, this.height);

    for (let e of this.entities) {
      e.draw(this.ctx);
    }
  }

}
import { Entity } from "entities/entity";

export class Physics {

  static colliding(e1: Entity, e2: Entity) {
    if (e1 == e2) {
      return false;
    }

    let b1 = { 
      xl: e1.getPos().x - e1.getWidth() / 2,
      xr: e1.getPos().x + e1.getWidth() / 2,
      yt: e1.getPos().y - e1.getHeight() / 2,
      yb: e1.getPos().y + e1.getHeight() / 2
    }
    let b2 = { 
      xl: e2.getPos().x - e2.getWidth() / 2,
      xr: e2.getPos().x + e2.getWidth() / 2,
      yt: e2.getPos().y - e2.getHeight() / 2,
      yb: e2.getPos().y + e2.getHeight() / 2
    }
    return b1.xl < b2.xr && b1.xr > b2.xl && b1.yt < b2.yb && b1.yb > b2.yt;
  }

}
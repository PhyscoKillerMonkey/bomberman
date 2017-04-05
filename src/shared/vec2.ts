export class Vec2 {

  public x: number;
  public y: number;

  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  public set(vec: Vec2) {
    this.x = vec.x;
    this.y = vec.y;
    return this;
  }

  public add(vec: Vec2) {
    this.x += vec.x;
    this.y += vec.y;
    return this;
  }

  public sub(vec: Vec2) {
    this.x -= vec.x;
    this.y -= vec.y;
    return this;
  }

  public multS(scalar: number) {
    this.x *= scalar;
    this.y *= scalar;
    return this;
  }

  public multV(vec: Vec2) {
    this.x *= vec.x;
    this.y *= vec.y;
    return this;
  }

  public divS(scalar: number) {
    this.x /= scalar;
    this.y /= scalar;
    return this;
  }

  public divV(vec: Vec2) {
    this.x /= vec.x;
    this.y /= vec.y;
    return this;
  }

  public normalise() {
    let l = this.length();
    if (l != 0) {
      this.x /= l;
      this.y /= l;
    }
    return this;
  }

  public clone() {
    return new Vec2(this.x, this.y);
  }

  public length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  public equals(vec: Vec2) {
    return this.x == vec.x && this.y == vec.y;
  }

}
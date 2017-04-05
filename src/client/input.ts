export class Input {

  static keys: string[];
  static keysDown: string[];
  static lastKeysDown: string[];

  static init() {
    this.keys = [];
    this.keysDown = [];
    this.lastKeysDown = [];

    // Create the key listeners
    document.addEventListener("keydown", (e) => {
      if (this.keys.indexOf(e.key) == -1) {
        this.keys.push(e.key);
      }
    });
    
    document.addEventListener("keyup", (e) => {
      let index = this.keys.indexOf(e.key);
      if (index > -1) {
        this.keys.splice(index, 1);
      }
    });
  }

  static keyDown(key: string): boolean {
    return (this.keysDown.indexOf(key) != -1);
  }

  static keyPressed(key: string): boolean {
    return (this.keysDown.indexOf(key) != -1 && 
      this.lastKeysDown.indexOf(key) == -1);
  }

  static keyReleased(key: string): boolean {
    return (this.keysDown.indexOf(key) == -1 &&
      this.lastKeysDown.indexOf(key) != -1);
  }

  static update() {
    this.lastKeysDown = this.keysDown.slice();
    this.keysDown = this.keys.slice();
  }

}
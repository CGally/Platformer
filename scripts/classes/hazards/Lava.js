class Lava {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  render() {;
    ctx.fillStyle="red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
};

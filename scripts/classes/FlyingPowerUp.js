class FlyingPowerUp {
  constructor(x, y, width, height, type) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.type = type;
  }

  render() {
    ctx.fillStyle="#da4dff";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
};

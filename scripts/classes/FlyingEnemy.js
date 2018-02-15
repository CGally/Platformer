class FlyingEnemy {
  constructor(x, y, width, height, maxY, minY) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = 0.4;
    this.maxY = maxY;
    this.minY = minY;
  }
  move() {
    this.y += this.speed
    if(this.y < this.minY) {
      this.speed *= -1
    } else if(this.y > this.maxY) {
      this.speed *= -1
    }
  }

  render() {;
    ctx.fillStyle="brown";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
};

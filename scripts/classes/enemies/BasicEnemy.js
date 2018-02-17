class BasicEnemy {
  constructor(x, y, width, height, maxX, minX) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = 0.3;
    this.maxX = maxX;
    this.minX = minX;
  }
  move() {
    this.x += this.speed
    if(this.x < this.minX) {
      this.speed *= -1
    } else if(this.x + this.width > this.maxX) {
      this.speed *= -1
    }
  }

  render() {;
    ctx.fillStyle="purple";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
};

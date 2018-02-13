class BasicEnemy {
  constructor(x, y, width, height, platform) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = 0.4;
    this.platform = platform;
  }
  move() {
    this.x += this.speed
    if(this.x < this.platform.x) {
      this.speed *= -1
    } else if(this.x + this.width > this.platform.x + this.platform.width) {
      this.speed *= -1
    }
  }

  render() {;
    ctx.fillStyle="red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
};

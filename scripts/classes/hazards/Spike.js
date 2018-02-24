class Spike {
  constructor(point1X, point1Y, point2X, point2Y, point3X, point3Y, type) {
    this.point1X = point1X;
    this.point1Y = point1Y;
    this.point2X = point2X;
    this.point2Y = point2Y;
    this.point3X = point3X;
    this.point3Y = point3Y;
    this.type = type;
    if(point2X < point1X) {
      this.x = point2X;
    } else {
      this.x = point1X;
    }
    if(point1Y < point2Y) {
      this.y = point1Y;
    } else {
      this.y = point2Y;
    }
    if(this.x === point2X) {
      this.width = point1X - point2X;
    } else if(point3Y > point1Y){
      this.width = point2X - point1X;
    } else {
      this.width = point3X - point1X;
    }
    if(this.y === point2Y) {
      this.height = point1Y - point2Y;
    } else if(point3X > point1X){
      this.height = point2Y - point1Y;
    } else {
      this.height = point3Y - point1Y;
    }
  }

  render() {
    if(this.type === 'space') {
     ctx.fillStyle = "gray";
   } else {
     ctx.fillStyle="black";
   }
    ctx.beginPath();
    ctx.moveTo(this.point1X, this.point1Y);
    ctx.lineTo(this.point2X, this.point2Y);
    ctx.lineTo(this.point3X, this.point3Y);
    ctx.fill();
  };
};

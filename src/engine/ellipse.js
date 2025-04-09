import Shape from './shape.js';
import Point2D from './point2d.js';

export default class Ellipse extends Shape {
  get center() {
    return new Point2D(
      this.position.x + Math.floor(this.width / 2),
      this.position.y + Math.floor(this.height / 2),
    );
  }

  draw(isFilled = false) {
    this.context.beginPath();
    this.context.ellipse(
      this.position.x + Math.floor(this.width / 2),
      this.position.y + Math.floor(this.height / 2),
      Math.floor(this.width / 2),
      Math.floor(this.height / 2),
      0,
      0,
      2 * Math.PI,
    );
    super.draw(isFilled);
  }
}

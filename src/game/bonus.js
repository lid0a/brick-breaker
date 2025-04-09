import { Circle } from '../engine/utils.js';
import gameOptions from './options.js';

export default class Bonus extends Circle {
  draw(color) {
    this.context.save();
    this.context.lineWidth = Math.floor(this.radius * 0.3);
    this.context.strokeStyle = color;
    this.context.fillStyle = color;
    this.context.shadowColor = gameOptions.SHADOW_COLOR;
    this.context.shadowOffsetX = 4;
    this.shadowOffsetY = 4;
    this.context.beginPath();
    super.draw(false);
    this.context.beginPath();
    this.context.ellipse(
      this.position.x + this.radius,
      this.position.y + this.radius,
      Math.floor(this.radius * 0.5),
      Math.floor(this.radius * 0.5),
      0,
      0,
      2 * Math.PI,
    );
    this.context.fill();
    this.context.restore();
  }
}

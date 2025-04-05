import { createElement } from "./utils/dom.js";
import { Point2D } from "./lib/utils.js";
import Aim from "./aim.js";
import gameOptions from "./game-options.js";

const gameObjects = {
  balls: [],
  blocks: [],
  bonuses: [],
};

gameObjects.field = createElement("canvas", {
  id: "game-field",
  class: "game-field",
  width:
    gameOptions.COLUMNS * gameOptions.BLOCK_WIDTH +
    (gameOptions.COLUMNS - 1) * gameOptions.INTERVAL_SIZE,
  height:
    gameOptions.ROWS * gameOptions.BLOCK_HEIGHT +
    (gameOptions.ROWS - 1) * gameOptions.INTERVAL_SIZE,
});

gameObjects.context = gameObjects.field.getContext("2d");

gameObjects.aim = new Aim(
  gameObjects.context,
  new Point2D(
    gameObjects.field.width / 2,
    gameObjects.field.height - gameOptions.BALL_RADIUS,
  ),
);

export default gameObjects;

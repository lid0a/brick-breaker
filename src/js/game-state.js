import { Point2D } from "./lib/utils.js";
import gameOptions from "./game-options.js";
import gameObjects from "./game-objects.js";

const gameState = {
  level: 1,
  startPosition: new Point2D(
    gameObjects.field.width / 2 - gameOptions.BALL_RADIUS,
    gameObjects.field.height - 2 * gameOptions.BALL_RADIUS - 1,
  ),
  newBallsCount: 0,
  requests: [],
  timeouts: [],
  aimingEnabled: true,
  soundOn: true,
  darkModeEnabled: false,
};

export default gameState;

import { Point2D } from "../engine/utils.js";
import gameOptions from "./options.js";
import gameObjects from "./objects.js";

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

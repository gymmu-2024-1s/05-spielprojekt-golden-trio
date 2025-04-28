import Phaser from "phaser"

import LoadingScene from "./scenes/loading-scene.js"
import Level01 from "./scenes/levels/level-01.js"
import Level02 from "./scenes/levels/level-02.js"
import Level03 from "./scenes/levels/level-03.js"
import Level04 from "./scenes/levels/level-04.js"
import Level05 from "./scenes/levels/level-05.js"
import gamecomplete from "./scenes/gamecomplete.js"
import UIScene from "./scenes/ui-scene.js"
import DebugScene from "./scenes/debug-scene.js"
import pointsscene from "./scenes/points-scene.js"

const config = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  width: 640, // Sollten möglichst vielfache von 32 sein, da unsere Tileset 32x32 Pixel gross sind.
  height: 480, // Gleich wie bei width.
  parent: "game-canvas", // Die ID von dem HTML-Element, in das das Spiel gezeichnet wird.
  scene: [
    LoadingScene,
    UIScene,
    DebugScene,
    pointsscene,
    Level01,
    gamecomplete,
    Level02,
    Level03,
    Level04,
    Level05,
  ], // Die Szenen des Spiels, hier können noch weitere Szenen angehängt werden.
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
      gravity: { y: 0 },
    },
  },
}

const game = new Phaser.Game(config)

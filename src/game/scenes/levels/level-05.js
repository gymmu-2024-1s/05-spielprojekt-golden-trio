import Base2DScene from "../base-2d-scene"

/**
 * Spiellogik für das Level05.
 */
export default class Level05 extends Base2DScene {
  constructor() {
    super({ key: "level-05" })
  }

  preload() {
    // Load the assets here
    this.load.tilemapTiledJSON(
      "map-level-05",
      "./assets/maps/map-level-05.json",
    )
  }

  create() {
    super.create("map-level-05")
  }
}

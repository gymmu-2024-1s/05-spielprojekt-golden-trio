import StaticObject from "../staticObject"

export default class FlowerWhite extends StaticObject {
  constructor(scene, x, y, properties) {
    super(scene, x, y, "pickups", "flowerwhite", properties)

    this.setOrigin(0, 0)
    this.setSize(24, 24)
    this.setOffset(4, 8)
  }
}

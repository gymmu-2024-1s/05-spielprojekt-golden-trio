import StaticObject from "../staticObject"

export default class Flowerpurple extends StaticObject {
  constructor(scene, x, y, properties) {
    super(scene, x, y, "pickups", "flowerpurple", properties)

    this.setOrigin(0, 0)
    this.setSize(24, 24)
    this.setOffset(4, 8)
  }
}

import StaticObject from "../staticObject"

export default class Flowerpurple extends StaticObject {
  constructor(scene, x, y, properties) {
    super(scene, x, y, "pickups", "flowerpurple", properties)

    this.setOrigin(0, 0)
    this.setSize(24, 32)
    this.setOffset(8, 0)
  }
}

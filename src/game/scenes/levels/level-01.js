import Flower from "../../gameObjects/pickups/flower"
import Flowerpurple from "../../gameObjects/pickups/flowerpurple"
import Mushroom from "../../gameObjects/pickups/mushroom"
import Sunflower from "../../gameObjects/pickups/sunflower"
import Base2DScene from "../base-2d-scene"
import key from "../../gameObjects/pickups/key"

export default class Level01 extends Base2DScene {
  constructor() {
    super({ key: "level-01" })
  }

  preload() {
    this.load.tilemapTiledJSON(
      "map-level-01",
      "./assets/maps/map-level-01.json",
    )
  }

  create() {
    super.create("map-level-01")
  }

  /**
   * @override Hier wird die Funktionalität der Base2DScene-Klasse überschrieben.
   *
   * Diese Methode wird immer dann aufgerufen, wenn der Spieler eine
   * überscheidung mit einem Spielobjekt hat, das aufgenommen werden kann. Wir
   * können hier bestimmen was in einem solchen fall passieren sollte. Die
   * Parameter werden von Phaser in die Methode eingefügt, da haben wir keine
   * direkte kontrolle darüber.
   *
   * @param {*} actor Der Spieler der mit dem Objekt überschneidet.
   * @param {*} item Das Objekt mit dem der Spieler eine überschneitung hat.
   */
  pickUp(actor, item) {
    super.pickUp(actor, item)

    // TODO: Hier wird die Logik für Kollisionen von Spielobjekten geändert. Das
    // ist pro Level anders. Wenn eine Logik für alle Levels gelten soll, dann
    // muss dies in `Base2DScene` angepasst werden.
    if (item instanceof Sunflower) {
      // Das Objekt ist von der Klasse `Flower`
      //this.player.addKey("level-02")
      this.player.increaseSpeed(100)
      this.player.heal(item.props.restoreHp || 0)
      this.tweens.addCounter({
        from: 0.5,
        to: 1,
        ease: "Linear",
        duration: 3000,
        repeat: 0,
        onUpdate: (tween) => {
          const val = tween.getValue()
          this.player.setScale(val)
        },
      })
    }
    if (item instanceof Flowerpurple) {
      // Das Objekt ist von der Klasse `Mushroom`
      this.player.decreaseSpeed(100)
      this.player.damage(item.props.damageHp || 0)

      // TODO: Aktivieren Sie das hier, wenn ein Effekt über eine gewisse Zeit
      // passieren soll.
      // Hier wird der Spieler halb so gross, und mit jedem Frame wird er wieder
      // normaler. Nach 3 Sekunden erreicht er seine normale Grösse.
      // this.tweens.addCounter({
      //   from: 0.5,
      //   to: 1,
      //   ease: "Linear",
      //   duration: 3000,
      //   repeat: 0,
      //   onUpdate: (tween) => {
      //     const val = tween.getValue()
      //     this.player.setScale(val)
      //   },
      // })
    }
    if (item instanceof key) {
      this.player.addKey("level-02")
    }
  }
}

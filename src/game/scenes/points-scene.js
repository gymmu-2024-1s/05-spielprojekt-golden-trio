import EVENTS from "../events"

export default class pointsscene extends Phaser.Scene {
  pointselement = null
  pointsvalue = 0

  constructor() {
    super({ key: "points-scene", active: true })
  }

  create() {
    this.pointselement = this.add.text(
      this.cameras.main.width,
      0,
      "Points xx: --",
      {
        color: "#FFFFFF",
        align: "right",
      },
    )
    this.pointselement.setOrigin(2, 0)

    // Hiermit erstellen wir einen `Emitter`, der für die Kommunikation über
    // verschiedene Szenen verwendet werden kann.
    // Wir müssen einen Namen angeben, die Funktion die ausgeführt werden soll,
    // und der Kontext (also auf welchem Objekt der Emitter arbeitet).
    const emitter = EVENTS.on("update-points", this.updatePoints, this)

    // Wir rufen den Emitter hier einmal auf, damit die Lebenspunkte von Anfang
    // an richtig angezeigt werden.
    emitter.emit("update-points")
  }

  updatePoints(value) {
    if (value === undefined) {
      value = 0
    }
    this.pointsvalue = value
    this.pointselement.setText(`Punkte: ${this.pointsvalue}`)
  }
}

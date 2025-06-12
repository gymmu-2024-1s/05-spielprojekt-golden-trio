import Phaser from "phaser"

export default class gamecomplete extends Phaser.Scene {
  constructor() {
    super({ key: "gamecomplete" })
  }

  create() {
    const centerX = this.cameras.main.width / 2
    const centerY = this.cameras.main.height / 2
    this.add
      .text(centerX, centerY - 100, "¡Wohooo! Du hast das Spiel beendet 🎉🐇", {
        fontSize: "24px",
        color: "#e67ab1",
        align: "center",
      })
      .setOrigin(0.5)

    const button = this.add
      .text(centerX, centerY + 100, "Spiel neu starten", {
        fontSize: "24px",
        backgroundColor: "#ffc0cb",
        color: "#4a2c2a",
        padding: { x: 20, y: 10 },
      })
      .setOrigin(0.5)
      .setInteractive()

    button.on("pointerdown", () => {
      this.scene.start("level-01")
    })
  }
}

import Phaser from "phaser"

export default class gamecomplete extends Phaser.Scene {
  constructor() {
    super({ key: "gamecomplete" })
  }

  create() {
    this.add
      .text(400, 200, "¡Wohooo! Du hast das Spiel beendet🎉", {
        fontSize: "32px",
        color: "#e67ab1",
        align: "center",
      })
      .setOrigin(0.5)

    const button = this.add
      .text(400, 400, "Spiel wiederstarten", {
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

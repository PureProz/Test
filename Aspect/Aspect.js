/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Aspect extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Aspect/costumes/costume1.svg", {
        x: 240,
        y: 180
      })
    ];

    this.sounds = [
      new Sound("pop", "./Aspect/sounds/pop.wav"),
      new Sound("recording1", "./Aspect/sounds/recording1.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.moveAhead();
    this.goto(0, 0);
  }
}

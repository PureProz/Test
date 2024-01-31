/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class OtherHand2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./OtherHand2/costumes/costume1.svg", {
        x: 415,
        y: 89
      })
    ];

    this.sounds = [new Sound("pop", "./OtherHand2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "cheer" }, this.whenIReceiveCheer)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveCheer() {
    this.visible = false;
    yield* this.wait(0.4);
    this.visible = true;
    this.direction = 90;
    this.goto(612, -90);
    yield* this.glide(0.6, 330, -60);
    yield* this.wait(0.4);
    for (let i = 0; i < 10; i++) {
      this.direction += 7;
      yield;
    }
    this.visible = false;
  }
}

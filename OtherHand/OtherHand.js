/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class OtherHand extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./OtherHand/costumes/costume1.svg", {
        x: 384,
        y: 31
      })
    ];

    this.sounds = [new Sound("pop", "./OtherHand/sounds/pop.wav")];

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
    yield* this.wait(0.5);
    this.visible = true;
    this.direction = 90;
    this.goto(612, 47);
    yield* this.glide(0.5, 330, 7);
    yield* this.wait(0.5);
    for (let i = 0; i < 10; i++) {
      this.direction += 7;
      yield;
    }
    this.visible = false;
  }
}

/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class GuysHand extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./GuysHand/costumes/costume1.svg", {
        x: 54,
        y: 31
      })
    ];

    this.sounds = [new Sound("pop", "./GuysHand/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "part2" }, this.whenIReceivePart2)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceivePart2() {
    this.visible = false;
    yield* this.wait(28);
    this.visible = true;
    this.broadcast("cheer");
    this.visible = true;
    this.direction = 90;
    this.goto(-645, 40);
    yield* this.glide(0.3, -400, -10);
    yield* this.wait(1);
    for (let i = 0; i < 10; i++) {
      this.direction -= 10;
      yield;
    }
    this.visible = false;
  }
}

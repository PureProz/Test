/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Hat extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume2", "./Hat/costumes/costume2.svg", { x: 52, y: 71 }),
      new Costume("costume3", "./Hat/costumes/costume3.svg", { x: 52, y: 72 }),
      new Costume("costume4", "./Hat/costumes/costume4.svg", { x: 53, y: 73 }),
      new Costume("costume5", "./Hat/costumes/costume5.svg", { x: 55, y: 73 }),
      new Costume("costume6", "./Hat/costumes/costume6.svg", { x: 62, y: 73 })
    ];

    this.sounds = [new Sound("pop", "./Hat/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "part2" }, this.whenIReceivePart2)
    ];

    this.vars.costume = 1;
  }

  *whenGreenFlagClicked() {
    this.costume = "costume2";
    this.visible = true;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.vars.costume = this.costumeNumber;
      this.costume = "empty";
      this.size = this.toNumber(this.stage.vars.scale);
      this.goto(
        this.toNumber(this.stage.vars.scrollX) -
          0.88 * this.toNumber(this.stage.vars.scale),
        this.toNumber(this.stage.vars.scrollY) -
          -0.14 * this.toNumber(this.stage.vars.scale)
      );
      this.costume = Math.floor(2 * this.toNumber(this.stage.vars.faceX)) + 1;
      yield;
    }
  }

  *whenIReceivePart2() {
    this.visible = false;
  }
}

/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Arms extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Arms/costumes/costume1.svg", {
        x: 90,
        y: -11
      }),
      new Costume("costume2", "./Arms/costumes/costume2.svg", {
        x: 109,
        y: -8
      }),
      new Costume("empty", "./Arms/costumes/empty.png", { x: 0, y: 0 }),
      new Costume("costume3", "./Arms/costumes/costume3.svg", { x: 88, y: -4 }),
      new Costume("costume4", "./Arms/costumes/costume4.svg", { x: 86, y: -8 })
    ];

    this.sounds = [new Sound("pop", "./Arms/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "part2" }, this.whenIReceivePart2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "mouth scale" },
        this.whenIReceiveMouthScale
      ),
      new Trigger(Trigger.BROADCAST, { name: "cheer" }, this.whenIReceiveCheer)
    ];

    this.vars.costume = 1;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceivePart2() {
    this.visible = true;
    this.costume = "costume1";
    yield* this.wait(6.6);
    this.costume = "costume2";
    yield* this.wait(0.7);
    this.costume = "costume1";
    yield* this.wait(2);
    this.costume = "costume2";
    yield* this.wait(0.7);
    this.costume = "costume1";
    yield* this.wait(4);
    this.costume = "costume3";
    yield* this.wait(3);
    this.costume = "costume4";
    yield* this.wait(0.1);
    this.costume = "costume1";
  }

  *whenIReceiveMouthScale() {
    while (true) {
      this.vars.costume = this.costumeNumber;
      this.costume = "empty";
      this.size = this.toNumber(this.stage.vars.scale);
      this.goto(
        this.toNumber(this.stage.vars.scrollX),
        this.toNumber(this.stage.vars.scrollY)
      );
      this.costume = this.vars.costume;
      yield;
    }
  }

  *whenIReceiveCheer() {
    this.visible = false;
  }
}

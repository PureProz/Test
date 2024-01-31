/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _9 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./_9/costumes/costume1.svg", { x: 294, y: 69 }),
      new Costume("costume2", "./_9/costumes/costume2.png", { x: 0, y: 0 }),
      new Costume("costume3", "./_9/costumes/costume3.svg", { x: 205, y: -68 }),
      new Costume("costume4", "./_9/costumes/costume4.svg", { x: 294, y: 41 })
    ];

    this.sounds = [new Sound("pop", "./_9/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "walk away" },
        this.whenIReceiveWalkAway
      ),
      new Trigger(Trigger.BROADCAST, { name: "part2" }, this.whenIReceivePart2)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    this.costume = "costume1";
    this.size = 100;
    this.visible = true;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.costume = "costume2";
      this.size = this.toNumber(this.stage.vars.scale);
      this.goto(0, 0);
      this.costume = "costume1";
      yield;
    }
  }

  *whenIReceiveWalkAway() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = true;
    this.costume = "costume3";
    this.size = 100;
    this.goto(0, 0);
    for (let i = 0; i < 4; i++) {
      for (let i = 0; i < 8; i++) {
        this.x -= 6;
        this.y += 1;
        yield;
      }
      for (let i = 0; i < 8; i++) {
        this.x -= 6;
        this.y -= 1;
        yield;
      }
      yield;
    }
  }

  *whenIReceivePart2() {
    while (true) {
      this.costume = "costume2";
      this.size = this.toNumber(this.stage.vars.scale);
      this.goto(0, 0);
      this.costume = "costume4";
      yield;
    }
  }
}

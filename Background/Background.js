/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Background extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Background/costumes/costume1.svg", {
        x: 259,
        y: 180
      }),
      new Costume("costume2", "./Background/costumes/costume2.svg", {
        x: 259,
        y: 180
      }),
      new Costume("costume4", "./Background/costumes/costume4.svg", {
        x: 259,
        y: 180
      }),
      new Costume("costume3", "./Background/costumes/costume3.png", {
        x: 0,
        y: 0
      }),
      new Costume("costume5", "./Background/costumes/costume5.svg", {
        x: 421,
        y: 180
      })
    ];

    this.sounds = [new Sound("pop", "./Background/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "part2" }, this.whenIReceivePart2),
      new Trigger(Trigger.BROADCAST, { name: "cheer" }, this.whenIReceiveCheer)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    this.size = 100;
    this.costume = "costume1";
    this.visible = true;
    this.stage.vars.scale = 100;
    while (true) {
      this.costume = "costume3";
      this.size = this.toNumber(this.stage.vars.scale);
      this.costume = "costume1";
      this.goto(
        this.toNumber(this.stage.vars.scrollX),
        this.toNumber(this.stage.vars.scrollY)
      );
      yield;
    }
  }

  *whenIReceivePart2() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.stage.vars.scale = 100;
    while (true) {
      this.costume = "costume3";
      this.size = this.toNumber(this.stage.vars.scale);
      this.costume = "costume2";
      this.goto(
        this.toNumber(this.stage.vars.scrollX),
        this.toNumber(this.stage.vars.scrollY)
      );
      yield;
    }
  }

  *whenIReceiveCheer() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.costume = "costume3";
    this.size = 100;
    this.goto(0, -44);
    this.costume = "costume5";
  }
}

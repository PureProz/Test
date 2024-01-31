/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _7 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume2", "./_7/costumes/costume2.svg", { x: -86, y: 57 }),
      new Costume("costume3", "./_7/costumes/costume3.svg", { x: -62, y: 54 }),
      new Costume("costume4", "./_7/costumes/costume4.svg", { x: -37, y: 52 }),
      new Costume("costume5", "./_7/costumes/costume5.svg", { x: -16, y: 57 }),
      new Costume("costume6", "./_7/costumes/costume6.svg", { x: -3, y: 60 }),
      new Costume("costume7", "./_7/costumes/costume7.svg", { x: 7, y: 59 }),
      new Costume("costume8", "./_7/costumes/costume8.svg", { x: 8, y: 56 }),
      new Costume("costume9", "./_7/costumes/costume9.svg", { x: 35, y: 56 }),
      new Costume("costume1", "./_7/costumes/costume1.svg", { x: 156, y: 57 }),
      new Costume("costume10", "./_7/costumes/costume10.png", { x: 0, y: 0 })
    ];

    this.sounds = [new Sound("pop", "./_7/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
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
    this.size = 100;
    this.visible = true;
    this.costume = "costume2";
    yield* this.wait(0.5);
    for (let i = 0; i < 8; i++) {
      this.costumeNumber++;
      yield* this.wait(0.05);
      yield;
    }
    while (true) {
      this.costume = "costume10";
      this.size = this.toNumber(this.stage.vars.scale);
      this.costume = "costume1";
      this.goto(
        this.toNumber(this.stage.vars.scrollX),
        this.toNumber(this.stage.vars.scrollY)
      );
      yield;
    }
  }

  *whenIReceiveWalkAway() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = true;
    this.size = 100;
    this.costume = "costume2";
    this.goto(-200, 0);
    for (let i = 0; i < 8; i++) {
      this.costumeNumber++;
      yield* this.wait(0.05);
      yield;
    }
    this.costume = "costume2";
    this.goto(-400, 0);
    for (let i = 0; i < 8; i++) {
      this.costumeNumber++;
      yield* this.wait(0.05);
      yield;
    }
  }

  *whenIReceivePart2() {
    this.visible = false;
  }
}

/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./_2/costumes/costume1.svg", { x: 144, y: 47 }),
      new Costume("costume2", "./_2/costumes/costume2.svg", { x: -76, y: 45 }),
      new Costume("costume3", "./_2/costumes/costume3.svg", { x: -82, y: 43 }),
      new Costume("costume4", "./_2/costumes/costume4.svg", { x: -101, y: 44 }),
      new Costume("costume5", "./_2/costumes/costume5.svg", { x: -112, y: 47 }),
      new Costume("costume6", "./_2/costumes/costume6.svg", { x: -120, y: 50 }),
      new Costume("costume7", "./_2/costumes/costume7.svg", { x: -138, y: 52 }),
      new Costume("costume8", "./_2/costumes/costume8.svg", { x: -143, y: 53 }),
      new Costume("costume9", "./_2/costumes/costume9.svg", { x: -148, y: 51 }),
      new Costume("costume10", "./_2/costumes/costume10.svg", {
        x: -159,
        y: 48
      }),
      new Costume("costume11", "./_2/costumes/costume11.svg", {
        x: -175,
        y: 45
      }),
      new Costume("costume12", "./_2/costumes/costume12.svg", {
        x: -192,
        y: 43
      }),
      new Costume("costume13", "./_2/costumes/costume13.png", { x: 0, y: 0 })
    ];

    this.sounds = [new Sound("pop", "./_2/sounds/pop.wav")];

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
    this.costume = "costume1";
    this.size = 100;
    this.visible = true;
    this.costume = "costume12";
    yield* this.wait(0.5);
    for (let i = 0; i < 11; i++) {
      this.costume = this.costumeNumber - 1;
      yield* this.wait(0.05);
      yield;
    }
    while (true) {
      this.costume = "costume13";
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
    this.costume = "costume12";
    this.size = 100;
    this.goto(-200, 0);
    for (let i = 0; i < 8; i++) {
      this.costume = this.costumeNumber - 1;
      yield* this.wait(0.05);
      yield;
    }
    this.costume = "costume12";
    this.size = 100;
    this.goto(-290, 0);
    for (let i = 0; i < 8; i++) {
      this.costume = this.costumeNumber - 1;
      yield* this.wait(0.05);
      yield;
    }
    this.costume = "costume12";
    this.size = 100;
    this.goto(-380, 0);
    for (let i = 0; i < 8; i++) {
      this.costume = this.costumeNumber - 1;
      yield* this.wait(0.05);
      yield;
    }
  }

  *whenIReceivePart2() {
    this.visible = false;
  }
}

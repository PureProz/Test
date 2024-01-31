/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Eyes extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume2", "./Eyes/costumes/costume2.svg", { x: 21, y: 23 }),
      new Costume("costume3", "./Eyes/costumes/costume3.svg", { x: 21, y: 21 }),
      new Costume("costume4", "./Eyes/costumes/costume4.svg", { x: 20, y: 14 }),
      new Costume("costume5", "./Eyes/costumes/costume5.svg", { x: 20, y: 21 })
    ];

    this.sounds = [new Sound("pop", "./Eyes/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(
        Trigger.BROADCAST,
        { name: "walk away" },
        this.whenIReceiveWalkAway
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "mouth scale" },
        this.whenIReceiveMouthScale
      ),
      new Trigger(Trigger.BROADCAST, { name: "part2" }, this.whenIReceivePart2),
      new Trigger(Trigger.BROADCAST, { name: "cheer" }, this.whenIReceiveCheer)
    ];

    this.vars.costume = 1;
  }

  *whenGreenFlagClicked() {
    this.costume = "costume2";
    this.visible = true;
    yield* this.wait(2);
    yield* this.blink();
    yield* this.wait(3);
    yield* this.blink();
    yield* this.wait(7);
    yield* this.blink();
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.vars.costume = this.costumeNumber;
      this.costume = "empty";
      this.size = this.toNumber(this.stage.vars.scale);
      this.goto(
        this.toNumber(this.stage.vars.scrollX) -
          (0.88 + this.toNumber(this.stage.vars.faceX) / 10) *
            this.toNumber(this.stage.vars.scale),
        this.toNumber(this.stage.vars.scrollY) -
          -0.14 * this.toNumber(this.stage.vars.scale)
      );
      this.costume = this.vars.costume;
      yield;
    }
  }

  *blink() {
    this.costume = "costume2";
    yield* this.wait(0.05);
    this.costume = "costume3";
    yield* this.wait(0.05);
    this.costume = "costume4";
    yield* this.wait(0.05);
    this.costume = "costume3";
    yield* this.wait(0.05);
    this.costume = "costume2";
  }

  *whenGreenFlagClicked3() {
    this.stage.vars.faceX = 0;
    this.stage.vars.faceXSpeed = 0;
    yield* this.wait(7);
    yield* this.turnLeft(12, 0.01);
    yield* this.wait(1);
    yield* this.turnLeft(12, -0.01);
    yield* this.wait(10);
    yield* this.turnLeft(10, 0.02);
    yield* this.wait(2);
    yield* this.turnLeft(10, -0.02);
  }

  *turnLeft(number1, number2) {
    this.stage.vars.faceXSpeed = 0;
    for (let i = 0; i < this.toNumber(number1); i++) {
      this.stage.vars.faceXSpeed += this.toNumber(number2);
      this.stage.vars.faceX += this.toNumber(this.stage.vars.faceXSpeed);
      yield;
    }
    for (let i = 0; i < this.toNumber(number1); i++) {
      this.stage.vars.faceXSpeed += 0 - this.toNumber(number2);
      this.stage.vars.faceX += this.toNumber(this.stage.vars.faceXSpeed);
      yield;
    }
  }

  *whenIReceiveWalkAway() {
    this.costume = "costume5";
    this.stage.vars.faceX = 0;
    yield* this.turnLeft(10, 0.02);
  }

  *whenIReceiveMouthScale() {
    while (true) {
      this.vars.costume = this.costumeNumber;
      this.costume = "empty";
      this.size = this.toNumber(this.stage.vars.scale);
      this.goto(
        this.toNumber(this.stage.vars.scrollX) -
          (0.1 + this.toNumber(this.stage.vars.faceX) / 10) *
            this.toNumber(this.stage.vars.scale),
        this.toNumber(this.stage.vars.scrollY) -
          (-0.09 + this.toNumber(this.stage.vars.faceY) / 10) *
            this.toNumber(this.stage.vars.scale)
      );
      this.costume = this.vars.costume;
      yield;
    }
  }

  *whenIReceivePart2() {
    this.visible = true;
    this.costume = "costume2";
    this.stage.vars.faceY = 0;
    this.stage.vars.faceX = 0;
    this.goto(-8, 8);
    /* TODO: Implement stop other scripts in sprite */ null;
    yield* this.wait(1);
    yield* this.turnLeft(10, 0.005);
    yield* this.wait(2);
    yield* this.blink();
    yield* this.wait(3);
    yield* this.blink();
    yield* this.wait(3);
    this.costume = "costume5";
    yield* this.wait(5);
    this.costume = "costume5";
    this.stage.vars.faceY = 0.8;
    this.stage.vars.faceX = 0;
    yield* this.wait(2);
    for (let i = 0; i < 10; i++) {
      this.stage.vars.faceY -= 0.08;
      yield;
    }
    yield* this.wait(0.5);
    this.costume = "costume2";
    yield* this.wait(1);
    yield* this.turnLeft(8, 0.01);
  }

  *whenIReceiveCheer() {
    this.visible = false;
  }
}

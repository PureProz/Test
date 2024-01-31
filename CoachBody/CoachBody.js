/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class CoachBody extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("empty", "./CoachBody/costumes/empty.png", { x: 0, y: 0 }),
      new Costume("costume1", "./CoachBody/costumes/costume1.svg", {
        x: 167,
        y: 84
      }),
      new Costume("costume2", "./CoachBody/costumes/costume2.svg", {
        x: 169,
        y: 87
      }),
      new Costume("costume3", "./CoachBody/costumes/costume3.svg", {
        x: 167,
        y: 75
      }),
      new Costume("costume4", "./CoachBody/costumes/costume4.svg", {
        x: 74,
        y: 79
      })
    ];

    this.sounds = [new Sound("pop", "./CoachBody/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.BROADCAST, { name: "part2" }, this.whenIReceivePart2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(
        Trigger.BROADCAST,
        { name: "mouth scale" },
        this.whenIReceiveMouthScale
      ),
      new Trigger(Trigger.BROADCAST, { name: "cheer" }, this.whenIReceiveCheer)
    ];

    this.vars.scaleSpeed = -8.673617379884035e-17;
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    this.costume = "costume1";
    this.size = 100;
    this.visible = true;
    yield* this.wait(5);
    this.stage.vars.scale = 100;
    this.vars.scaleSpeed = 0;
    for (let i = 0; i < 50; i++) {
      this.vars.scaleSpeed += 0.01;
      this.stage.vars.scale += this.toNumber(this.vars.scaleSpeed);
      yield;
    }
    for (let i = 0; i < 210; i++) {
      this.stage.vars.scale += this.toNumber(this.vars.scaleSpeed);
      yield;
    }
    for (let i = 0; i < 50; i++) {
      this.vars.scaleSpeed -= 0.01;
      this.stage.vars.scale += this.toNumber(this.vars.scaleSpeed);
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.stage.vars.scrollX = 0;
    this.stage.vars.scrollY = 0;
    this.stage.vars.faceX = 0;
    while (true) {
      this.costume = "empty";
      this.size = this.toNumber(this.stage.vars.scale);
      this.costume = "costume3";
      this.goto(
        this.toNumber(this.stage.vars.scrollX),
        this.toNumber(this.stage.vars.scrollY)
      );
      if (this.compare(this.stage.vars.scale, 230) < 0) {
        this.stage.vars.scrollX =
          ((this.toNumber(this.stage.vars.scale) - 100) / 130) *
          (90 * (this.toNumber(this.stage.vars.scale) / 100));
        this.stage.vars.scrollY =
          ((this.toNumber(this.stage.vars.scale) - 100) / 130) *
          (-25 * (this.toNumber(this.stage.vars.scale) / 100));
      } else {
        this.stage.vars.scrollX =
          90 * (this.toNumber(this.stage.vars.scale) / 100);
        this.stage.vars.scrollY =
          -25 * (this.toNumber(this.stage.vars.scale) / 100);
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    yield* this.wait(19);
    this.vars.scaleSpeed = 0;
    for (let i = 0; i < 50; i++) {
      this.vars.scaleSpeed += 0.02;
      this.stage.vars.scale += this.toNumber(this.vars.scaleSpeed);
      yield;
    }
    for (let i = 0; i < 230; i++) {
      this.stage.vars.scale += this.toNumber(this.vars.scaleSpeed);
      yield;
    }
  }

  *whenIReceivePart2() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = true;
    yield* this.wait(5.5);
    this.stage.vars.scale = 100;
    this.vars.scaleSpeed = 0;
    for (let i = 0; i < 50; i++) {
      this.vars.scaleSpeed += 0.01;
      this.stage.vars.scale += this.toNumber(this.vars.scaleSpeed);
      yield;
    }
    for (let i = 0; i < 170; i++) {
      this.stage.vars.scale += this.toNumber(this.vars.scaleSpeed);
      yield;
    }
    for (let i = 0; i < 50; i++) {
      this.vars.scaleSpeed -= 0.01;
      this.stage.vars.scale += this.toNumber(this.vars.scaleSpeed);
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    yield* this.wait(30.3);
    /* TODO: Implement stop other scripts in sprite */ null;
    this.broadcast("walk away");
    while (true) {
      this.costume = "empty";
      this.size = this.toNumber(this.stage.vars.scale);
      this.costume = "costume3";
      this.goto(
        this.toNumber(this.stage.vars.scrollX),
        this.toNumber(this.stage.vars.scrollY)
      );
      this.stage.vars.scrollX =
        ((this.toNumber(this.stage.vars.scale) - 100) / 130) *
        (90 * (this.toNumber(this.stage.vars.scale) / 100));
      this.stage.vars.scrollY =
        ((this.toNumber(this.stage.vars.scale) - 100) / 130) *
        (-25 * (this.toNumber(this.stage.vars.scale) / 100));
      this.stage.vars.scale = 100;
      yield;
    }
  }

  *whenIReceiveMouthScale() {
    this.stage.vars.scale = 100;
    while (true) {
      this.costume = "empty";
      this.size = this.toNumber(this.stage.vars.scale);
      this.costume = "costume4";
      this.goto(
        this.toNumber(this.stage.vars.scrollX),
        this.toNumber(this.stage.vars.scrollY)
      );
      this.stage.vars.scrollX =
        ((this.toNumber(this.stage.vars.scale) - 100) / 130) *
        (0 * (this.toNumber(this.stage.vars.scale) / 100));
      this.stage.vars.scrollY =
        ((this.toNumber(this.stage.vars.scale) - 100) / 130) *
        (-25 * (this.toNumber(this.stage.vars.scale) / 100));
      yield;
    }
  }

  *whenIReceiveCheer() {
    this.visible = false;
  }
}

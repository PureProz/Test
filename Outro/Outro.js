/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Outro extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Outro/costumes/costume1.svg", {
        x: 43,
        y: 42
      }),
      new Costume("costume2", "./Outro/costumes/costume2.png", {
        x: 480,
        y: 360
      }),
      new Costume("costume3", "./Outro/costumes/costume3.svg", {
        x: 43,
        y: 16.99000000000001
      })
    ];

    this.sounds = [
      new Sound("Batman", "./Outro/sounds/Batman.wav"),
      new Sound(
        "Outra Vez Vince Guaraldi.mp3",
        "./Outro/sounds/Outra Vez Vince Guaraldi.mp3.wav"
      )
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "(outro)" },
        this.whenIReceiveOutro
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone)
    ];

    this.vars.speed = 55;
    this.vars.cloneType = 1;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveOutro() {
    this.costume = "costume2";
    this.goto(0, 0);
    this.vars.cloneType = 0;
    this.createClone();
    yield* this.wait(1);
    yield* this.startSound("Outra Vez Vince Guaraldi.mp3");
    this.vars.cloneType = 1;
    while (true) {
      this.createClone();
      this.createClone();
      this.createClone();
      this.createClone();
      this.createClone();
      this.createClone();
      this.createClone();
      this.createClone();
      this.createClone();
      this.createClone();
      this.createClone();
      this.createClone();
      yield* this.wait(0.4);
      yield;
    }
  }

  *startAsClone() {
    if (this.toNumber(this.vars.cloneType) === 0) {
      this.visible = true;
      this.stopAllSounds();
      yield* this.startSound("Batman");
      this.goto(0, 0);
      this.direction = 125;
      this.costume = "costume1";
      this.size = 0;
      this.vars.speed = 20;
      for (let i = 0; i < 21; i++) {
        this.direction += 5 * this.toNumber(this.vars.speed);
        this.size += this.toNumber(this.vars.speed);
        this.vars.speed--;
        yield;
      }
      this.vars.speed = 0;
      for (let i = 0; i < 5; i++) {
        this.vars.speed--;
        this.y += 0.5 * this.toNumber(this.vars.speed);
        yield;
      }
      for (let i = 0; i < 12; i++) {
        this.vars.speed += 5;
        this.y += this.toNumber(this.vars.speed);
        yield;
      }
      this.visible = false;
      this.deleteThisClone();
    } else {
      this.visible = true;
      this.goto(0, 0);
      this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
      this.effects.ghost = 92;
      this.effects.color = this.random(1, 200);
      this.direction = this.random(1, 360);
      this.costume = "costume3";
      this.move(200);
      for (let i = 0; i < 200; i++) {
        this.move(-2);
        yield;
      }
      this.deleteThisClone();
    }
  }
}

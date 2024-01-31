/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Fade extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Fade/costumes/costume1.svg", {
        x: 240,
        y: 180
      })
    ];

    this.sounds = [new Sound("pop", "./Fade/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "walk away" },
        this.whenIReceiveWalkAway
      ),
      new Trigger(Trigger.BROADCAST, { name: "cheer" }, this.whenIReceiveCheer)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    this.costume = "costume1";
    this.effects.ghost = 0;
    this.visible = true;
    for (let i = 0; i < 20; i++) {
      this.effects.ghost += 5;
      yield;
    }
    this.visible = false;
  }

  *whenIReceiveWalkAway() {
    this.visible = false;
    yield* this.wait(1.5);
    this.visible = true;
    this.effects.ghost = 100;
    for (let i = 0; i < 20; i++) {
      this.effects.ghost -= 5;
      yield;
    }
    this.broadcast("part2");
    yield* this.wait(0.4);
    for (let i = 0; i < 20; i++) {
      this.effects.ghost += 5;
      yield;
    }
    this.visible = false;
  }

  *whenIReceiveCheer() {
    yield* this.wait(2);
    this.visible = true;
    this.effects.ghost = 100;
    for (let i = 0; i < 20; i++) {
      this.effects.ghost -= 5;
      yield;
    }
    yield* this.wait(0.5);
    this.broadcast("(outro)");
  }
}

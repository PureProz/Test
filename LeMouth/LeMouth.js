/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class LeMouth extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume2", "./LeMouth/costumes/costume2.svg", {
        x: 12.550000000000011,
        y: 1.4000000953674316
      }),
      new Costume("costume3", "./LeMouth/costumes/costume3.svg", {
        x: 12,
        y: 6
      }),
      new Costume("costume4", "./LeMouth/costumes/costume4.svg", {
        x: 13,
        y: 6
      }),
      new Costume("costume5", "./LeMouth/costumes/costume5.svg", {
        x: 12,
        y: 3
      }),
      new Costume("costume1", "./LeMouth/costumes/costume1.svg", {
        x: 7,
        y: 7
      }),
      new Costume("costume6", "./LeMouth/costumes/costume6.svg", {
        x: 10,
        y: 4
      }),
      new Costume("costume7", "./LeMouth/costumes/costume7.svg", {
        x: 12,
        y: 4
      }),
      new Costume("costume8", "./LeMouth/costumes/costume8.svg", {
        x: 11,
        y: 3
      })
    ];

    this.sounds = [new Sound("pop", "./LeMouth/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(
        Trigger.BROADCAST,
        { name: "walk away" },
        this.whenIReceiveWalkAway
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(Trigger.BROADCAST, { name: "part2" }, this.whenIReceivePart2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "mouth scale" },
        this.whenIReceiveMouthScale
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "mouth scale" },
        this.whenIReceiveMouthScale2
      ),
      new Trigger(Trigger.BROADCAST, { name: "cheer" }, this.whenIReceiveCheer)
    ];

    this.vars.costume = 1;
    this.vars.frame = 59;
    this.vars.heyLookGuysBeforeWeStartPlayingToDayTheresSomethingIJustWannaSay = [
      1,
      1,
      1,
      2,
      3,
      7,
      3,
      2,
      4,
      3,
      2,
      4,
      1,
      1,
      1,
      1,
      1,
      2,
      4,
      5,
      6,
      3,
      4,
      3,
      2,
      1,
      3,
      2,
      4,
      3,
      2,
      1,
      2,
      1,
      1,
      1,
      1,
      4,
      3,
      2,
      1,
      3,
      1,
      4,
      3,
      2,
      1,
      5,
      3,
      4,
      3,
      2,
      1,
      3,
      2,
      1,
      1,
      1,
      1
    ];
    this.vars.butIllTellYuoWahtItIsAboutThroughProcessOfElimination = [
      1,
      2,
      1,
      3,
      7,
      4,
      3,
      2,
      1,
      5,
      3,
      1,
      2,
      1,
      3,
      4,
      1,
      2,
      1,
      3,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      4,
      5,
      6,
      1,
      3,
      4,
      2,
      4,
      1,
      2,
      1,
      3,
      1,
      7,
      1,
      2,
      4,
      2,
      1,
      1,
      1
    ];
    this.vars.alrightListenGreatEffortOutThereSoFarButWeCantKeepFallingBehind = [
      1,
      1,
      3,
      4,
      3,
      2,
      1,
      2,
      4,
      3,
      1,
      3,
      2,
      12,
      4,
      7,
      1,
      3,
      2,
      1,
      3,
      2,
      1,
      5,
      6,
      4,
      3,
      1,
      3,
      2,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      2,
      1,
      3,
      2,
      4,
      3,
      1,
      2,
      1,
      3,
      7,
      1,
      3,
      2,
      1,
      3,
      1,
      3,
      2,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      2,
      4,
      5,
      6,
      1,
      2,
      1,
      3,
      2,
      1,
      3,
      2,
      1,
      2,
      4,
      3,
      2,
      1,
      3,
      2,
      4,
      1,
      3,
      1,
      32,
      1,
      4,
      3,
      1,
      3,
      2,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      6,
      3,
      1,
      3,
      2,
      1,
      3,
      2,
      1,
      2,
      4,
      3,
      4,
      3,
      2,
      1,
      2,
      4,
      1,
      3,
      2,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      6,
      2,
      1,
      3,
      2,
      1,
      3,
      1,
      3,
      2,
      4,
      2,
      1,
      4,
      3,
      2,
      1,
      3,
      4,
      1,
      3,
      2,
      1
    ];
    this.vars.weMayBeTheFifthBestTeamWeMayBeTheSixthBestTeam = [
      5,
      3,
      1,
      3,
      2,
      1,
      2,
      4,
      3,
      2,
      1,
      2,
      4,
      1,
      3,
      2,
      1,
      3,
      2,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      2,
      3,
      1,
      3,
      2,
      1,
      3,
      2,
      1,
      2,
      4,
      3,
      2,
      1,
      2,
      4,
      1,
      3,
      2,
      1,
      3,
      2,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      3,
      2,
      1,
      2,
      4,
      1,
      3,
      2,
      1,
      2,
      1,
      3,
      5,
      4,
      2,
      1,
      3,
      4,
      3,
      2,
      1,
      5,
      6,
      4,
      3,
      2,
      1,
      3,
      2,
      1,
      3,
      2,
      4,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      4,
      5,
      6,
      3,
      2,
      1,
      5,
      4,
      3,
      1,
      3,
      2,
      1,
      5,
      4,
      2,
      1,
      4,
      2,
      1,
      2,
      1,
      5,
      6,
      1,
      3,
      1,
      2,
      1,
      3,
      2,
      1,
      2,
      1,
      3,
      1,
      2,
      4,
      5,
      6,
      1,
      5,
      6,
      1,
      2,
      1,
      3,
      2,
      1,
      3,
      2,
      4,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      3,
      2,
      1,
      2,
      1,
      3,
      4,
      1,
      2,
      1,
      3,
      4,
      3,
      2,
      1,
      1
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    this.costume = "costume2";
    this.size = 100;
    this.visible = true;
    yield* this.wait(1);
    this.vars.frame = 0;
    this.vars.frame++;
    for (
      let i = 0;
      i <
      this.vars.heyLookGuysBeforeWeStartPlayingToDayTheresSomethingIJustWannaSay
        .length;
      i++
    ) {
      this.vars.frame++;
      this.costume = this.itemOf(
        this.vars
          .heyLookGuysBeforeWeStartPlayingToDayTheresSomethingIJustWannaSay,
        this.vars.frame - 1
      );
      yield* this.wait(0);
      yield;
    }
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

  *whenGreenFlagClicked3() {
    yield* this.wait(5.15);
    this.vars.frame = 0;
    this.vars.frame++;
    for (
      let i = 0;
      i <
      this.stage.vars
        .inTheEndItsNotAboutWinningItsNotAboutLosingItsNotAboutTheJourneyItsNotAboutTheDestination
        .length;
      i++
    ) {
      this.vars.frame++;
      this.costume = this.itemOf(
        this.stage.vars
          .inTheEndItsNotAboutWinningItsNotAboutLosingItsNotAboutTheJourneyItsNotAboutTheDestination,
        this.vars.frame - 1
      );
      yield* this.wait(0);
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    yield* this.wait(18.1);
    this.vars.frame = 0;
    this.vars.frame++;
    for (
      let i = 0;
      i <
      this.vars.butIllTellYuoWahtItIsAboutThroughProcessOfElimination.length;
      i++
    ) {
      this.vars.frame++;
      this.costume = this.itemOf(
        this.vars.butIllTellYuoWahtItIsAboutThroughProcessOfElimination,
        this.vars.frame - 1
      );
      yield* this.wait(0);
      yield;
    }
  }

  *whenIReceiveWalkAway() {
    this.costume = "costume8";
  }

  *whenGreenFlagClicked5() {
    yield* this.wait(22.5);
    this.vars.frame = 0;
    this.vars.frame++;
    for (
      let i = 0;
      i < this.stage.vars.itsNotAboutAardvarksItsNotAboutAardwolves.length;
      i++
    ) {
      this.vars.frame++;
      this.costume = this.itemOf(
        this.stage.vars.itsNotAboutAardvarksItsNotAboutAardwolves,
        this.vars.frame - 1
      );
      yield* this.wait(0);
      yield;
    }
  }

  *whenIReceivePart2() {
    this.visible = true;
    this.costume = "costume2";
    /* TODO: Implement stop other scripts in sprite */ null;
    this.goto(-8, 8);
    yield* this.wait(0);
    this.broadcast("mouth scale");
    yield* this.wait(1);
    this.vars.frame = 0;
    this.vars.frame++;
    for (
      let i = 0;
      i <
      this.vars.alrightListenGreatEffortOutThereSoFarButWeCantKeepFallingBehind
        .length;
      i++
    ) {
      this.vars.frame++;
      this.costume = this.itemOf(
        this.vars
          .alrightListenGreatEffortOutThereSoFarButWeCantKeepFallingBehind,
        this.vars.frame - 1
      );
      yield* this.wait(0);
      yield;
    }
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
          (-0.1 + this.toNumber(this.stage.vars.faceY) / 10) *
            this.toNumber(this.stage.vars.scale)
      );
      this.costume = this.vars.costume;
      yield;
    }
  }

  *whenIReceiveMouthScale2() {
    yield* this.wait(16.2);
    this.vars.frame = 0;
    this.vars.frame++;
    for (
      let i = 0;
      i < this.vars.weMayBeTheFifthBestTeamWeMayBeTheSixthBestTeam.length;
      i++
    ) {
      this.vars.frame++;
      this.costume = this.itemOf(
        this.vars.weMayBeTheFifthBestTeamWeMayBeTheSixthBestTeam,
        this.vars.frame - 1
      );
      yield* this.wait(0);
      yield;
    }
  }

  *whenIReceiveCheer() {
    this.visible = false;
  }
}

import {
  Project,
  Sprite
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import CoachBody from "./CoachBody/CoachBody.js";
import Background from "./Background/Background.js";
import Fade from "./Fade/Fade.js";
import _7 from "./_7/_7.js";
import _2 from "./_2/_2.js";
import _9 from "./_9/_9.js";
import Aspect from "./Aspect/Aspect.js";
import LeMouth from "./LeMouth/LeMouth.js";
import Eyes from "./Eyes/Eyes.js";
import Hat from "./Hat/Hat.js";
import Arms from "./Arms/Arms.js";
import Bench from "./Bench/Bench.js";
import GuysHand from "./GuysHand/GuysHand.js";
import OtherHand from "./OtherHand/OtherHand.js";
import OtherHand2 from "./OtherHand2/OtherHand2.js";
import Outro from "./Outro/Outro.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  CoachBody: new CoachBody({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 4,
    size: 100,
    visible: true,
    layerOrder: 2
  }),
  Background: new Background({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1
  }),
  Fade: new Fade({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 10
  }),
  _7: new _7({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 9,
    size: 100,
    visible: true,
    layerOrder: 6
  }),
  _2: new _2({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 7
  }),
  _9: new _9({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 9
  }),
  Aspect: new Aspect({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 16
  }),
  LeMouth: new LeMouth({
    x: -88,
    y: 14.000000000000002,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3
  }),
  Eyes: new Eyes({
    x: -88,
    y: 14.000000000000002,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 4
  }),
  Hat: new Hat({
    x: -88,
    y: 14.000000000000002,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 5
  }),
  Arms: new Arms({
    x: 0,
    y: -44.42307692307692,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 210,
    visible: false,
    layerOrder: 8
  }),
  Bench: new Bench({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 11
  }),
  GuysHand: new GuysHand({
    x: -400,
    y: -10,
    direction: -10,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 12
  }),
  OtherHand: new OtherHand({
    x: 330,
    y: 7,
    direction: 160,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 13
  }),
  OtherHand2: new OtherHand2({
    x: 330,
    y: -60,
    direction: 160,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 14
  }),
  Outro: new Outro({
    x: 0,
    y: 0,
    direction: 95,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 216.02409638554226,
    visible: false,
    layerOrder: 15
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;

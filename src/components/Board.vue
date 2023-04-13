<template>
  <div class="wrapper">
    <div class="board">
      <div class="next-piece-section">Next piece</div>
      <div class="scores">
        <div class="scores1">
          <div class="score x1 y7">11</div>
          <div class="score x2 y8">12</div>
          <div class="score x3 y7">13</div>
        </div>
        <div class="scores2">
          <div class="score x0 y4">21</div>
          <div class="score x0 y2">22</div>
          <div class="score x1 y1">23</div>
        </div>
        <div class="scores3">
          <div class="score x3 y1">31</div>
          <div class="score x4 y2">32</div>
          <div class="score x4 y4">33</div>
        </div>
      </div>
      <div class="hex x1 y3" @click="select($event)">
        <div class="rec rec1"></div>
        <div class="rec rec2"></div>
        <div class="rec rec3"></div>
      </div>
      <div class="hex x1 y5" @click="select($event)">
        <div class="rec rec1"></div>
        <div class="rec rec2"></div>
        <div class="rec rec3"></div>
      </div>
      <div class="hex x2 y2" @click="select($event)">
        <div class="rec rec1"></div>
        <div class="rec rec2"></div>
        <div class="rec rec3"></div>
      </div>
      <div class="hex x2 y4" @click="select($event)">
        <div class="rec rec1"></div>
        <div class="rec rec2"></div>
        <div class="rec rec3"></div>
      </div>
      <div class="hex x2 y6" @click="select($event)">
        <div class="rec rec1"></div>
        <div class="rec rec2"></div>
        <div class="rec rec3"></div>
      </div>
      <div class="hex x3 y3" @click="select($event)">
        <div class="rec rec1"></div>
        <div class="rec rec2"></div>
        <div class="rec rec3"></div>
      </div>
      <div class="hex x3 y5" @click="select($event)">
        <div class="rec rec1"></div>
        <div class="rec rec2"></div>
        <div class="rec rec3"></div>
      </div>
      <div class="pce x1 y3">
        <div class="rec rec1 v1"></div>
        <div class="rec rec2 p1"></div>
        <div class="rec rec3 n1"></div>
      </div>
      <div class="pce x1 y5">
        <div class="rec rec1 v1"></div>
        <div class="rec rec2 p1"></div>
        <div class="rec rec3 n2"></div>
      </div>
      <div class="pce x2 y2">
        <div class="rec rec1 v1"></div>
        <div class="rec rec2 p2"></div>
        <div class="rec rec3 n1"></div>
      </div>
      <div class="pce x2 y4">
        <div class="rec rec1 v1"></div>
        <div class="rec rec2 p2"></div>
        <div class="rec rec3 n2"></div>
      </div>
      <div class="pce x2 y6">
        <div class="rec rec1 v2"></div>
        <div class="rec rec2 p1"></div>
        <div class="rec rec3 n1"></div>
      </div>
      <div class="pce x3 y3">
        <div class="rec rec1 v2"></div>
        <div class="rec rec2 p1"></div>
        <div class="rec rec3 n2"></div>
      </div>
      <div class="pce x3 y5">
        <div class="rec rec1 v2"></div>
        <div class="rec rec2 p2"></div>
        <div class="rec rec3 n1"></div>
      </div>
      <div class="pce next-piece">
        <div class="rec rec1 v2"></div>
        <div class="rec rec2 p2"></div>
        <div class="rec rec3 n2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Game from '../game/game.js'
export default Game;
</script>

<style scoped>
.wrapper {
  position: absolute;
  inset: 3% 3% 3% 3%;
  min-width: 400px;
  min-height: 400px;
  border: 2px dotted red;
  display: grid;
  justify-items: center;
  align-items: center;
}

.board {
  --sqrt3: 1.732051;
  --hex-height: min(min(18vh, 18vw),25rem);
  --rec-width: calc(var(--hex-height) / var(--sqrt3));
  --hex-gap: 2rem;

  --hex-border-size: 0.5rem;
  --hex-border-color: rgb(255, 183, 0);
  --hex-border-color-hover: cornflowerblue;

  --pce-gap: 1rem;
  --pce-border-size: var(--hex-border-size);
  --pce-height: calc(var(--hex-height) - 2 * var(--pce-gap));
  --pce-width: calc(var(--pce-height) / 2.3 / var(--sqrt3));

  --pce-v1: #00aeff;
  --pce-v2: red;
  --pce-p1: #fee000;
  --pce-p2: green;
  --pce-n1: magenta;
  --pce-n2: hsl(239, 70%, 27%);

  --board-color: rgb(68, 68, 68);
  --font-main-color: white;
  --font-neg-color: rgb(68, 68, 68);

  position: relative;
  width: 95%;
  height: 95%;
  background-color: var(--board-color);
}

.next-piece-section{
  margin: var(--pce-gap);
  width: calc(var(--pce-height) + 2*var(--pce-gap));
  display: flex;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--font-main-color);
  font-family: Arial, Helvetica, sans-serif;
}

.pce.next-piece{
  margin: 0 var(--pce-gap);
  display: grid;
  justify-items: center;
  padding-top: var(--pce-gap);
  translate: 0;
  height: calc(var(--pce-height) + 3*var(--pce-gap));
  width: calc(var(--pce-height) + 2*var(--pce-gap));
  border: var(--hex-border-size) solid var(--font-main-color);
}

.rec {
  position: relative;
  user-select: none;
  display: grid;
}

.rec2 {
  rotate: 60deg;
}

.rec3 {
  rotate: -60deg;
}

.hex,
.pce,
.score {
  position: absolute;
  width: fit-content;
}

.hex {
  height: var(--hex-height);
}

.hex:hover .rec {
  border-top: var(--hex-border-size) solid var(--hex-border-color-hover);
  border-bottom: var(--hex-border-size) solid var(--hex-border-color-hover);
}

.hex.selected .rec {
  border-top: var(--hex-border-size) solid var(--hex-border-color-hover);
  border-bottom: var(--hex-border-size) solid var(--hex-border-color-hover);
}

.hex .rec {
  height: var(--hex-height);
  width: var(--rec-width);
  border-top: var(--hex-border-size) solid var(--hex-border-color);
  border-bottom: var(--hex-border-size) solid var(--hex-border-color);
}

.hex .rec2 {
  top: calc(-1 * var(--hex-height));
}

.hex .rec3 {
  top: calc(-2 * var(--hex-height));
}

.pce {
  height: var(--pce-height);
  translate: calc(var(--rec-width) / 2 - var(--pce-width) / 2) calc(var(--pce-gap));
}

.pce .rec {
  height: calc(var(--pce-height));
  width: var(--pce-width);
  border: var(--pce-border-size) solid var(--board-color);
  border-radius: var(--pce-width);
  justify-content: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--font-main-color);
  padding-top: var(--pce-gap);
  font-family: Arial, Helvetica, sans-serif;
}

.pce .rec2 {
  top: calc(-1 * var(--pce-height));
}

.pce .rec3 {
  top: calc(-2 * var(--pce-height));
}

.score {
  display: flex;
  width: var(--rec-width);
  justify-content: center;
  font-size: 4rem;
  font-weight: bold;
  color: var(--font-main-color);
  padding-top: var(--pce-gap);
  font-family: Arial, Helvetica, sans-serif;
  z-index: 11;
  padding: 0;
}

.scores1>* {
  translate: 0 calc(0.75*var(--hex-height));
}

.scores2>* {
  translate: calc(0.29*var(--hex-height)) calc(0.23*var(--hex-height));
}

.scores3>* {
  translate: calc(-0.29*var(--hex-height)) calc(0.23*var(--hex-height));
}

.x0 {
  left: calc(50% - 3.5*var(--rec-width) - 2*var(--hex-gap));
}

.x1 {
  left: calc(50% - 2*var(--rec-width) - var(--hex-gap));
}

.x2 {
  left: calc(50% - 0.5*var(--rec-width));
}

.x3 {
  left: calc(50% + var(--rec-width) + var(--hex-gap));
}

.x4 {
  left: calc(50% + 2.5*var(--rec-width) + 2*var(--hex-gap));
}

.y0 {
  top: calc(50% + 1.5*var(--hex-height) + 2*var(--hex-gap));
}

.y1 {
  top: calc(50% + var(--hex-height) + 1.5*var(--hex-gap));
}

.y2 {
  top: calc(50% + 0.5*var(--hex-height) + var(--hex-gap));
}

.y3 {
  top: calc(50% + 0.5*var(--hex-gap));
}

.y4 {
  top: calc(50% - 0.5*var(--hex-height));
}

.y5 {
  top: calc(50% - var(--hex-height) - 0.5*var(--hex-gap));
}

.y6 {
  top: calc(50% - 1.5*var(--hex-height) - var(--hex-gap));
}

.y7 {
  top: calc(50% - 2* var(--hex-height) - 3*var(--hex-gap)/2);
}

.y8 {
  top: calc(50% - 2.5 * var(--hex-height) - 2*var(--hex-gap));
}

.v1 {
  background-color: var(--pce-v1);
}

.v2 {
  background-color: var(--pce-v2);
}

.p1 {
  background-color: var(--pce-p1);
  color: var(--font-neg-color) !important;
}

.p2 {
  background-color: var(--pce-p2);
}

.n1 {
  background-color: var(--pce-n1);
}

.n2 {
  background-color: var(--pce-n2);
}

.v1::after {
  content: "4"
}

.v2::after {
  content: "2"
}

.p1::after {
  content: "5"
}

.p2::after {
  content: "1"
}

.n1::after {
  content: "6"
}

.n2::after {
  content: "3"
}
</style>

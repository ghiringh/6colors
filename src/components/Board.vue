<template>
  <div class="wrapper">
    <div class="board" @click="unselect()">
      <div class="scores">
        <div class="scores1">
          <div class="score score11 x1 y7">11</div>
          <div class="score score12 x2 y8">12</div>
          <div class="score score13 x3 y7">13</div>
        </div>
        <div class="scores2">
          <div class="score score21 x0 y4">21</div>
          <div class="score score22 x0 y2">22</div>
          <div class="score score23 x1 y1">23</div>
        </div>
        <div class="scores3">
          <div class="score score31 x3 y1">31</div>
          <div class="score score32 x4 y2">32</div>
          <div class="score score33 x4 y4">33</div>
        </div>
      </div>
      <div class="hex x1 y3" id="hex11" @click="select($event)">
        <div class="rec rec1"></div>
        <div class="rec rec2"></div>
        <div class="rec rec3"></div>
      </div>
      <div class="hex x1 y5" id="hex12" @click="select($event)">
        <div class="rec rec1"></div>
        <div class="rec rec2"></div>
        <div class="rec rec3"></div>
      </div>
      <div class="hex x2 y2" id="hex21" @click="select($event)">
        <div class="rec rec1"></div>
        <div class="rec rec2"></div>
        <div class="rec rec3"></div>
      </div>
      <div class="hex x2 y4" id="hex22" @click="select($event)">
        <div class="rec rec1"></div>
        <div class="rec rec2"></div>
        <div class="rec rec3"></div>
      </div>
      <div class="hex x2 y6" id="hex23" @click="select($event)">
        <div class="rec rec1"></div>
        <div class="rec rec2"></div>
        <div class="rec rec3"></div>
      </div>
      <div class="hex x3 y3" id="hex31" @click="select($event)">
        <div class="rec rec1"></div>
        <div class="rec rec2"></div>
        <div class="rec rec3"></div>
      </div>
      <div class="hex x3 y5" id="hex32" @click="select($event)">
        <div class="rec rec1"></div>
        <div class="rec rec2"></div>
        <div class="rec rec3"></div>
      </div>
      <div class="pce x1 y3">
        <div class="rec rec1 color11"></div>
        <div class="rec rec2 color21"></div>
        <div class="rec rec3 color31"></div>
      </div>
      <div class="pce x1 y5">
        <div class="rec rec1 color11"></div>
        <div class="rec rec2 color21"></div>
        <div class="rec rec3 color32"></div>
      </div>
      <div class="pce x2 y2">
        <div class="rec rec1 color11"></div>
        <div class="rec rec2 color22"></div>
        <div class="rec rec3 color31"></div>
      </div>
      <div class="pce x2 y4">
        <div class="rec rec1 color11"></div>
        <div class="rec rec2 color22"></div>
        <div class="rec rec3 color32"></div>
      </div>
      <div class="pce x2 y6">
        <div class="rec rec1 color12"></div>
        <div class="rec rec2 color21"></div>
        <div class="rec rec3 color31"></div>
      </div>
      <div class="pce x3 y3">
        <div class="rec rec1 color12"></div>
        <div class="rec rec2 color21"></div>
        <div class="rec rec3 color32"></div>
      </div>
      <div class="pce x3 y5">
        <div class="rec rec1 color12"></div>
        <div class="rec rec2 color22"></div>
        <div class="rec rec3 color31"></div>
      </div>
      <div class="pce">
        <div class="rec rec1 color12"></div>
        <div class="rec rec2 color22"></div>
        <div class="rec rec3 color32"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    unselect: function () {
      document.querySelectorAll('.selected').forEach((element) => {
        element.classList.remove('selected')
      })
      console.log('unselect')
    },
    select: function (event) {
      document.querySelectorAll('.selected').forEach((element) => {
        element.classList.remove('selected')
      })
      console.log('select')
      const item = event.target.parentElement
      item.classList.add('selected')
    },
  }
}
</script>

<style scoped>
.wrapper {
  position: absolute;
  inset: 10% 10% 10% 10%;
  min-width: 400px;
  min-height: 400px;
  border: 2px dotted red;
  display: grid;
  justify-items: center;
  align-items: center;
}

.board {
  --sqrt3: 1.732051;
  --hex-height: 25rem;
  --rec-width: calc(var(--hex-height) / var(--sqrt3));
  --hex-gap: 2rem;

  --hex-border-color: rgb(255, 183, 0);
  --hex-border-color-hover: cornflowerblue;

  --pce-gap: 1rem;
  --pce-height: calc(var(--hex-height) - 2 * var(--pce-gap));
  --pce-width: calc(var(--pce-height) / 2.3 / var(--sqrt3));

  --pce-color11: #00aeff;
  --pce-color12: red;
  --pce-color21: #fee000;
  --pce-color22: green;
  --pce-color31: magenta;
  --pce-color32: hsl(239, 70%, 27%);

  --board-color: rgb(68, 68, 68);
  --font-main-color: white;
  --font-neg-color: rgb(68, 68, 68);

  position: relative;
  width: 95%;
  height: 95%;
  background-color: var(--board-color);
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
  border-top: 0.5rem solid var(--hex-border-color-hover);
  border-bottom: 0.5rem solid var(--hex-border-color-hover);
}

.hex.selected .rec {
  border-top: 0.5rem solid var(--hex-border-color-hover);
  border-bottom: 0.5rem solid var(--hex-border-color-hover);
}

.hex .rec {
  height: var(--hex-height);
  width: var(--rec-width);
  border-top: 0.5rem solid var(--hex-border-color);
  border-bottom: 0.5rem solid var(--hex-border-color);
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
  border: 0.5rem solid var(--board-color);
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

.scores1 > *{
  translate: 0 calc(0.75*var(--hex-height));
}

.scores2 > *{
  translate: calc(0.29*var(--hex-height)) calc(0.23*var(--hex-height));
}

.scores3 > *{
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

.color11 {
  background-color: var(--pce-color11);
}

.color12 {
  background-color: var(--pce-color12);
}

.color21 {
  background-color: var(--pce-color21);
  color: var(--font-neg-color) !important;
}

.color22 {
  background-color: var(--pce-color22);
}

.color31 {
  background-color: var(--pce-color31);
}

.color32 {
  background-color: var(--pce-color32);
}

.color11::after {
  content: "4"
}

.color12::after {
  content: "2"
}

.color21::after {
  content: "5"
}

.color22::after {
  content: "1"
}

.color31::after {
  content: "6"
}

.color32::after {
  content: "3"
}</style>

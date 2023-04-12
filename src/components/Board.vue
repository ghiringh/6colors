<template>
  <div class="wrapper">
    <div class="board" @click="unselect()">
      <div class="scores">
        <div class="scores1">
          <div class="score11">11</div>
          <div class="score12">12</div>
          <div class="score13">13</div>
        </div>
        <div class="scores2">
          <div class="score21">21</div>
          <div class="score22">22</div>
          <div class="score23">23</div>
        </div>
        <div class="scores3">
          <div class="score31">31</div>
          <div class="score32">32</div>
          <div class="score33">33</div>
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

<style></style>

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

  position: relative;
  width: 95%;
  height: 95%;
  background-color: var(--board-color);
}

.hex {
  position: absolute;
  width: fit-content;
  height: var(--hex-height);
}

.pce {
  position: absolute;
  width: fit-content;
  height: var(--pce-height);
  translate: calc(var(--rec-width) / 2 - var(--pce-width) / 2) calc(var(--pce-gap));
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
  position: relative;
  height: var(--hex-height);
  width: var(--rec-width);
  border-top: 0.5rem solid var(--hex-border-color);
  border-bottom: 0.5rem solid var(--hex-border-color);
  /* background-color: hsl(10, 0%, 85%); */
  user-select: none;
  display: grid;
}

.pce .rec {
  position: relative;
  height: calc(var(--pce-height));
  width: var(--pce-width);
  border: 0.5rem solid var(--board-color);
  border-radius: var(--pce-width);
  user-select: none;
  display: grid;
  justify-content: center;
  font-size: x-large;
  font-weight: bold;
  color: white;
  padding-top: var(--pce-gap);
  font-family: Arial, Helvetica, sans-serif;
}

.pce .rec2 {
  position: relative;
  rotate: 60deg;
  top: calc(-1 * var(--pce-height));
}

.pce .rec3 {
  position: relative;
  rotate: -60deg;
  top: calc(-2 * var(--pce-height));
}

.hex .rec1 {
  justify-content: center;
  align-content: center;
  font-size: xx-large;
  font-weight: bold;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  z-index: 10;
}

.hex .rec2 {
  position: relative;
  rotate: 60deg;
  top: calc(-1 * var(--hex-height));
}

.hex .rec3 {
  position: relative;
  rotate: -60deg;
  top: calc(-2 * var(--hex-height));
}

.posx .rec{
  border-color: blue !important;
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

/* .pos02 {
  top: calc(50% - var(--hex-height) / 2);
  left: calc(50% - 3.5*var(--rec-width) - 2*var(--hex-gap));
}

.pos03 {
  top: calc(50% + var(--hex-height) / 2 + var(--hex-gap));
  left: calc(50% - 3.5*var(--rec-width) - 2*var(--hex-gap));
}

.pos10 {
  top: calc(50% - 2* var(--hex-height) - 3*var(--hex-gap)/2);
  left: calc(50% - 2 * var(--rec-width) - var(--hex-gap));
}

.pos11 {
  top: calc(50% - var(--hex-height) - var(--hex-gap) / 2);
  left: calc(50% - 2 * var(--rec-width) - var(--hex-gap));
}

.pos12 {
  top: calc(50% + var(--hex-gap) / 2);
  left: calc(50% - 2 * var(--rec-width) - var(--hex-gap));
}

.pos13 {
  top: calc(50% + var(--hex-height) + 3*var(--hex-gap)/2);
  left: calc(50% - 2 * var(--rec-width) - var(--hex-gap));
}

.pos20 {
  top: calc(50% - 2.5 * var(--hex-height) - 2*var(--hex-gap));
  left: calc(50% - var(--rec-width) / 2);
}

.pos21 {
  top: calc(50% - 3 * var(--hex-height) / 2 - var(--hex-gap));
  left: calc(50% - var(--rec-width) / 2);
}

.pos22 {
  top: calc(50% - var(--hex-height) / 2);
  left: calc(50% - var(--rec-width) / 2);
}

.pos23 {
  top: calc(50% + var(--hex-height) / 2 + var(--hex-gap));
  left: calc(50% - var(--rec-width) / 2);
}

.pos30 {
  top: calc(50% - 2 * var(--hex-height) - 1.5*var(--hex-gap));
  left: calc(50% + var(--rec-width) + var(--hex-gap));
}

.pos31 {
  top: calc(50% - var(--hex-height) - var(--hex-gap) / 2);
  left: calc(50% + var(--rec-width) + var(--hex-gap));
}

.pos32 {
  top: calc(50% + var(--hex-gap) / 2);
  left: calc(50% + var(--rec-width) + var(--hex-gap));
}

.pos33 {
  top: calc(50% + var(--hex-height) + 1.5*var(--hex-gap));
  left: calc(50% + var(--rec-width) + var(--hex-gap));
}

.pos42 {
  top: calc(50% - var(--hex-height) / 2);
  left: calc(50% + 2.5*var(--rec-width) + 2*var(--hex-gap));
}

.pos43 {
  top: calc(50% + var(--hex-height) / 2 + var(--hex-gap));
  left: calc(50% + 2.5*var(--rec-width) + 2*var(--hex-gap));
} */

.color11 {
  background-color: var(--pce-color11);
}

.color12 {
  background-color: var(--pce-color12);
}

.color21 {
  background-color: var(--pce-color21);
  color: var(--board-color) !important;
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

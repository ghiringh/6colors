<template>
    <div class="wrapper">
        <div class="board">
            <div class="hex hex1">
                <div class="rec rec1"></div>
                <div class="rec rec2"></div>
                <div class="rec rec3"></div>
            </div>
            <div class="hex hex2">
                <div class="rec rec1"></div>
                <div class="rec rec2"></div>
                <div class="rec rec3"></div>
            </div>
            <div class="hex hex3">
                <div class="rec rec1"></div>
                <div class="rec rec2"></div>
                <div class="rec rec3"></div>
            </div>
            <div class="hex hex4">
                <div class="rec rec1"></div>
                <div class="rec rec2"></div>
                <div class="rec rec3"></div>
            </div>
            <div class="hex hex5">
                <div class="rec rec1"></div>
                <div class="rec rec2"></div>
                <div class="rec rec3"></div>
            </div>
            <div class="hex hex6">
                <div class="rec rec1"></div>
                <div class="rec rec2"></div>
                <div class="rec rec3"></div>
            </div>
            <div class="hex hex7">
                <div class="rec rec1"></div>
                <div class="rec rec2"></div>
                <div class="rec rec3"></div>
            </div>
        </div>
    </div>
</template>

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
  --hex-height: 15rem;
  --rec-width: calc(var(--hex-height) / var(--sqrt3));
  --hex-gap: 0.5rem;
  position: relative;
  width: 95%;
  height: 95%;
  border: 2px dotted green;
}

.hex {
  position: absolute;
  width: fit-content;
  height: var(--hex-height);
}

.hex:hover .rec {
  background-color: cornflowerblue;
}

.hex .rec {
  position: relative;
  height: var(--hex-height);
  width: var(--rec-width);
  background-color: hsl(10, 0%, 85%);
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

.hex1 {
  top: calc(50% - var(--hex-height) / 2);
  left: calc(50% - var(--rec-width) / 2);
}

.hex2 {
  top: calc(50% - 3 * var(--hex-height) / 2 - var(--hex-gap));
  left: calc(50% - var(--rec-width) / 2);
}

.hex3 {
  top: calc(50% - 2 * var(--hex-height) / 2 - var(--hex-gap) / 2);
  left: calc(50% + var(--rec-width) + var(--hex-gap));
}

.hex4 {
  top: calc(50% + var(--hex-gap) / 2);
  left: calc(50% + var(--rec-width) + var(--hex-gap));
}

.hex5 {
  top: calc(50% + var(--hex-height) / 2 + var(--hex-gap));
  left: calc(50% - var(--rec-width) / 2);
}

.hex6 {
  top: calc(50% + var(--hex-gap) / 2);
  left: calc(50% - 2 * var(--rec-width) - var(--hex-gap));
}

.hex7 {
  top: calc(50% - 2 * var(--hex-height) / 2 - var(--hex-gap) / 2);
  left: calc(50% - 2 * var(--rec-width) - var(--hex-gap));
}
</style>

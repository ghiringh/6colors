<template>
  <div class="score-total-section">
    <div class="score-total-title">Score</div>
    <div class="score-total">0</div>
  </div>
  <div class="next-piece-section">
    <div class="next-piece-title">Next piece</div>
    <div class="pce hidden" id="pce1">
      <div class="rec rec1"></div>
      <div class="rec rec2"></div>
      <div class="rec rec3"></div>
    </div>
    <div class="pce hidden" id="pce2">
      <div class="rec rec1"></div>
      <div class="rec rec2"></div>
      <div class="rec rec3"></div>
    </div>
    <div class="pce hidden" id="pce3">
      <div class="rec rec1"></div>
      <div class="rec rec2"></div>
      <div class="rec rec3"></div>
    </div>
    <div class="pce hidden" id="pce4">
      <div class="rec rec1"></div>
      <div class="rec rec2"></div>
      <div class="rec rec3"></div>
    </div>
    <div class="pce hidden" id="pce5">
      <div class="rec rec1"></div>
      <div class="rec rec2"></div>
      <div class="rec rec3"></div>
    </div>
    <div class="pce hidden" id="pce6">
      <div class="rec rec1"></div>
      <div class="rec rec2"></div>
      <div class="rec rec3"></div>
    </div>
    <div class="pce hidden" id="pce7">
      <div class="rec rec1"></div>
      <div class="rec rec2"></div>
      <div class="rec rec3"></div>
    </div>
  </div>
  <div class="restart-button-section hidden" @click="restartGame()">
    <div class="restart-button">Start</div>
  </div>
  <div class="board">
    <div class="hexagons">
      <div class="hex selectable x1 y3" @click="select($event)">
        <div class="rec rec1"></div>
        <div class="rec rec2"></div>
        <div class="rec rec3"></div>
      </div>
      <div class="hex selectable x1 y5" @click="select($event)">
        <div class="rec rec1"></div>
        <div class="rec rec2"></div>
        <div class="rec rec3"></div>
      </div>
      <div class="hex selectable x2 y2" @click="select($event)">
        <div class="rec rec1"></div>
        <div class="rec rec2"></div>
        <div class="rec rec3"></div>
      </div>
      <div class="hex selectable x2 y4" @click="select($event)">
        <div class="rec rec1"></div>
        <div class="rec rec2"></div>
        <div class="rec rec3"></div>
      </div>
      <div class="hex selectable x2 y6" @click="select($event)">
        <div class="rec rec1"></div>
        <div class="rec rec2"></div>
        <div class="rec rec3"></div>
      </div>
      <div class="hex selectable x3 y3" @click="select($event)">
        <div class="rec rec1"></div>
        <div class="rec rec2"></div>
        <div class="rec rec3"></div>
      </div>
      <div class="hex selectable x3 y5" @click="select($event)">
        <div class="rec rec1"></div>
        <div class="rec rec2"></div>
        <div class="rec rec3"></div>
      </div>
    </div>
    <div class="scores">
      <div class="scores-v">
        <div class="score x1 y7">0</div>
        <div class="score x2 y8">0</div>
        <div class="score x3 y7">0</div>
      </div>
      <div class="scores-p">
        <div class="score x0 y4">0</div>
        <div class="score x0 y2">0</div>
        <div class="score x1 y1">0</div>
      </div>
      <div class="scores-n">
        <div class="score x4 y4">0</div>
        <div class="score x4 y2">0</div>
        <div class="score x3 y1">0</div>
      </div>
    </div>
    <div class="pieces">
    </div>
  </div>
</template>

<script>
import Game from '../game/game.js'
export default Game;
</script>

<style scoped>
@import '../assets/board.css'
</style>

import './style.css';

import ScoresList from './modules/render.js';
import ScoreData from './modules/scoresdata.js';

const playerName = document.querySelector('.name');
const playerScore = document.querySelector('.score');
const submitScore = document.querySelector('.submitScore');
const refreshScores = document.querySelector('.refresh');
class PlayerScore {
    static scores = () => {
      ScoresList.render();
    }
}

submitScore.addEventListener('click', (event) => {
  event.preventDefault();
  ScoreData.addScore(playerName.value, playerScore.value);
  ScoresList.render();
  playerName.value = '';
  playerScore.value = '';
});

refreshScores.addEventListener('click', () => {
  ScoresList.render();
});

window.onload = () => {
  PlayerScore.scores();
};
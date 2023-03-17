import './style.css';

import ScoresList from './modules/render.js';

class PlayerScore {
    static scores = () => {
      ScoresList.render();
    }
}

window.onload = () => {
  PlayerScore.scores();
};
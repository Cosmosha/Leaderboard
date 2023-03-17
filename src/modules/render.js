import scores from './scoresdata.js';

class ScoresList {
    static render = () => {
      const tablelist = document.querySelector('table');
      const getScores = scores;
      const displayScores = getScores.map((scores) => ` <tr>
    <td>${scores.name}: ${scores.score}</td>
</tr>`);
      tablelist.innerHTML = displayScores.join('');
    }
}

export default ScoresList;
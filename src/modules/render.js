import ScoreData from './scoresdata.js';

class ScoresList {
    static render = async () => {
      const scores = await ScoreData.loadScore();
      const tablelist = document.querySelector('table');
      const getScores = scores.result;
      const displayScores = getScores.map((score) => ` <tr>
    <td> ${score.user}: ${score.score}</td>
</tr>`);
      tablelist.innerHTML = displayScores.join('');
    }
}

export default ScoresList;
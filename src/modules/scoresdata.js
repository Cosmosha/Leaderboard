const getUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/3Tw6sA3YpWEEK31uf553/scores/';
class ScoreData {
    static addScore = async (name, scores) => {
      try {
        if (name.value !== '' && scores.value !== '') {
          const res = await fetch(getUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user: name, score: scores }),
          });
          const data = res.json();
          return data;
        }
      } catch (error) {
        return error.message;
      }
      return null;
    }

    static loadScore = async () => {
      try {
        const res = await fetch(getUrl);
        const data = res.json();
        return data;
      } catch (error) {
        return error.message;
      }
    }
}

export default ScoreData;
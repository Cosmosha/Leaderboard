const gameID = async () => {
  const res = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    body: JSON.stringify({ name: 'My cool new game' }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return res.json();
};

export default gameID;

// 3Tw6sA3YpWEEK31uf553 - GameID
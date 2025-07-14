// make sure to include , after each game score
const scores = {
      day1: [182,177,185,171],
      day2: [],
      day3: [],
      day4: []
    };

    const baseScore = 200;
    const resultsContainer = document.getElementById('score-results');

    let totalAll = 0;
    let totalGames = 0;
    let totalPlusMinus = 0;

    Object.entries(scores).forEach(([day, games], index) => {
      const total = games.reduce((a, b) => a + b, 0);
      const avg = total / games.length;
      const plusMinus = games.reduce((sum, score) => sum + (score - baseScore), 0);

      totalAll += total;
      totalGames += games.length;
      totalPlusMinus += plusMinus;

      resultsContainer.innerHTML += `
        <div style="margin-bottom: 20px;">
          <h3 style="color: #66fcf1;">Day ${index + 1}</h3>
          <p style="color: #c5c6c7;">Scores: ${games.join(", ")}</p>
          <p style="color: #c5c6c7;">Average: ${avg.toFixed(2)}</p>
          <p style="color: #c5c6c7;">+/- from 200: ${plusMinus > 0 ? "+" : ""}${plusMinus}</p>
        </div>
      `;
    });

    const overallAverage = totalAll / totalGames;

    resultsContainer.innerHTML += `
      <hr style="border: 1px solid #66fcf1; margin: 40px 0;">
      <div style="margin-top: 20px;">
        <h3 style="color: #66fcf1;">🎯 Total Performance</h3>
        <p style="color: #c5c6c7;">Total Games: ${totalGames}</p>
        <p style="color: #c5c6c7;">Overall Average: ${overallAverage.toFixed(2)}</p>
        <p style="color: #c5c6c7;">Total +/- from 200: ${totalPlusMinus > 0 ? "+" : ""}${totalPlusMinus}</p>
      </div>
    `;
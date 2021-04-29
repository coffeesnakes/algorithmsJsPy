// function tournamentWinner(competitions, results) {
//   let mapOfTeams = {};
//  for (let i = 0; i < competitions.length; i++){
//    let match = competitions[i];
//    let away = match[1];
//    let home = match[0];
//    results[i] === 0 ? mapOfTeams[away]+=3 : mapOfTeams[home]+=3
//    for (let j = 0; j < match.length; j++) {
//      // console.log(match[j])
//      let team = match[j];
//      mapOfTeams[team] ? null : (mapOfTeams[team] = 0);
//    }
//  }
//  let winner = 0;
//  for (let value in mapOfTeams) {
// 	 if (mapOfTeams[value] > winner){
// 		 winner = value;
// 	 }
//  }
//  console.log(winner)
//   return winner;
// }

const HOME_TEAM_WON = 1;

function tournamentWinner(competitions, results) {
  const scores = new Map();

  for (let idx = 0; idx < competitions.length; idx++) {
    const [homeTeam, awayTeam] = competitions[idx];
    const result = results[idx];
    const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;
    const currentScore = scores.get(winningTeam) || 0;
    scores.set(winningTeam, currentScore + 3);
    console.log(scores);
  }

  let currentBestScore = 0;
  let currentBestTeam = "";
  scores.forEach((score, team) => {
    if (score > currentBestScore) {
      currentBestScore = score;
      currentBestTeam = team;
    }
  });

  console.log(currentBestTeam);
  return currentBestTeam;
}

let competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
];

let results = [0, 0, 1];

let comp2 = [
  ["HTML", "Java"],
  ["Java", "Python"],
  ["Python", "HTML"],
  ["C#", "Python"],
  ["Java", "C#"],
  ["C#", "HTML"],
];

let res2 = [0, 1, 1, 1, 0, 1];

tournamentWinner(competitions, results);
tournamentWinner(comp2, res2);

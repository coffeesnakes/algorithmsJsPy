function tournamentWinner(competitions, results) {
  let mapOfTeams = {};
 for (let i = 0; i < competitions.length; i++){
   let match = competitions[i];
   let away = match[1];
   let home = match[0];
   results[i] === 0 ? mapOfTeams[away]+=3 : mapOfTeams[home]+=3
   for (let j = 0; j < match.length; j++) {
     // console.log(match[j])
     let team = match[j];
     mapOfTeams[team] ? null : (mapOfTeams[team] = 0);
   }
 }
 let winner = 0;
 for (let value in mapOfTeams) {
	 if (mapOfTeams[value] > winner){
		 winner = value;
	 }
 }
 console.log(winner)
  return winner;
}

let competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
];

let results = [0, 0, 1];

tournamentWinner(competitions, results);
import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";

const reader = new CsvFileReader("football.csv");
reader.read();

const dateOfFirstMatch = reader.data[0][0];

let manchasterWins = 0;

for (const match of reader.data) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manchasterWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manchasterWins++;
  }
}

console.log(manchasterWins);

import { readFileSync } from "fs";
import { MatchResult } from "./MatchResult";
import { dataStringToDate } from "./utils";

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class CsvFileReader {
  data: MatchData[] = [];
  constructor(private fileName: string) {}

  read(): void {
    this.data = readFileSync(this.fileName, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => row.split(","))
      .map(
        (row: string[]): MatchData => [
          dataStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult,
          row[6],
        ]
      );
  }
}

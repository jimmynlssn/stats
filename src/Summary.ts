import { MatchData } from './MatchData';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { HtmlReport } from './reportTargets/HtmlReport';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public outoutTarget: OutputTarget) {}

  static winsAnalysisHtmlReport(teamName: string, reportName: string): Summary {
    return new Summary(new WinsAnalysis(teamName), new HtmlReport(reportName))
  }

  buildAndPrintReport(matchData: MatchData[]): void {
    const report = this.analyzer.run(matchData);
    this.outoutTarget.print(report);
  }
}

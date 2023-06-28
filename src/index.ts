import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

const summary = Summary.winsAnalysisHtmlReport('Chelsea', 'report.html');
summary.buildAndPrintReport(matchReader.matches);
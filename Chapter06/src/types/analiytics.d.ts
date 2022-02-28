export interface TopOpportunity {
  name: string;
  revenue: string;
}

export interface LeadsSource {
  source: string;
  count: number;
  percent: number;
}

export interface HistoryByMonth {
  name: string;
  month: string;
  value: string;
}

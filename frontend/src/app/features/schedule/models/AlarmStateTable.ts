export interface AlarmStateTable {
  TransactionId: string;
  TransactionName: string;
  IntervalMin: string;
  LastShift: string;
  CheckDate: string;
  AlarmDate: string;
  SendByFlash: string;
}

export interface AlarmStateTableRow extends AlarmStateTable {}

export interface AlarmStateTableCol {
  field: keyof AlarmStateTableRow;
  header: string;
}

export interface ExecuteLogTable {
  TRANSACTIONID: string;
  TRANSACTIONNAME: string;
  Shift: string;
  PreShift: string;
  IntervalMin: string;
  PassFlag: string;
  OverDueActive: string;
  RuleIndex: string;
  APName: string;
  Retries: string;
  MaxRetryTimes: string;
  MaxDispatchTimes: string;
  LoaderBufferTime: string;
  BackToBufferTime: string;
  ShiftBackToLoaderTime: string;
  BeginTime: string;
  EndTime: string;
  CreateTime: string;
}

export interface ExecuteLogTableRow extends ExecuteLogTable {
  retry?: string;
  JobId: string;
}

export interface ExecuteLogTableCol {
  field: keyof ExecuteLogTableRow;
  header: string;
}

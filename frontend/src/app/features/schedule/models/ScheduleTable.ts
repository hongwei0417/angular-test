export interface ScheduleTableRow {
  pause?: string;
  resume?: string;
  JobKey: string;
  TransactionId: string;
  TransactionName: string;
  CronExpress: string;
  StartAt: string;
  EndAt: string;
  State: string;
}

export interface ScheduleTableCol {
  field: keyof ScheduleTableRow;
  header: string;
}

export interface ScheduleTable {
  JobKey: string;
  TransactionId: string;
  TransactionName: string;
  CronExpress: string;
  StartAt: string;
  EndAt: string;
  State: string;
}

export interface ScheduleTableRow extends ScheduleTable {
  pause?: string;
  resume?: string;
}

export interface ScheduleTableCol {
  field: keyof ScheduleTableRow;
  header: string;
}

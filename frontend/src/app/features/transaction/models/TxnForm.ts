export interface TxnSetting {
  TransactionName: string;
  APBooking: string;
  ActiveFlag: boolean;
  date?: string;
  time?: number;
  alarmIntervalMin?: number;
}

export interface FrequencySetting {
  LastTranTime: string;
  CronExpression: string;
  TimeZone?: string;
  RetryTimes?: number;
  LoaderBufferTime?: number;
  BackToBufferTime?: number;
  ShiftBackToLoaderTime?: number;
  StartAt?: string;
  EndAt?: string;
  SkipOverDue: boolean;
  SkipAllOverDue: boolean;
}

export interface TxnFormData extends TxnSetting, FrequencySetting {}

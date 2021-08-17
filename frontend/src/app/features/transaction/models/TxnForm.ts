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

export interface ChooseModule {
  moduleName: string;
  issue: boolean;
}

export interface MailGroup {
  ownerIT: string;
  mailTo: string;
  ownerCoordinator: string;
  loaderOwner: string;
  mailCC: string;
  mailBCC: string;
  SAPOwner: string;
  MESOwner: string;
}

export interface TxnFormData extends TxnSetting, FrequencySetting {}

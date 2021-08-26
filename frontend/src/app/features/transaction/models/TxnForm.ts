export enum TxnFormType {
  CREATE = 'create',
  VIEW = 'view',
  EDIT = 'edit',
  COPY = 'copy',
}

export enum TxnFormRoute {
  CREATE = '/transaction/create',
  VIEW = '/transaction/view',
  EDIT = '/transaction/edit',
  COPY = '/transaction/copy',
}

export interface TxnBasicInfo {
  TransactionID?: string;
  TransactionName: string;
  APBooking: string;
  ActiveFlag: string;
  date?: string | null;
  time?: number | null;
  alarmIntervalMin?: number;
}

export interface FrequencySetting {
  LastTranTime: string | null;
  CronExpression: string;
  TimeZone?: string;
  RetryTimes?: number;
  LoaderBufferTime?: number;
  BackToBufferTime?: number;
  ShiftBackToLoaderTime?: number;
  StartAt?: string | null;
  EndAt?: string | null;
  SkipOverDue: boolean;
  SkipAllOverDue: boolean;
}

export interface TxnModule {
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

export interface JobBasicInfo {
  jobName: string;
  maxRetry: string;
  DLLSeq: string;
}

export interface JobDllCondition {
  ConditionID: string;
  ConditionName: string;
  ConditionValue: string;
  Memo: string;
}

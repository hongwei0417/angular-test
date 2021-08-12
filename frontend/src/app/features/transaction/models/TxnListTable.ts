export interface TxnListTableData {
  TRANSACTIONID: string;
  TRANSACTIONNAME: string;
  STARTTIME: string;
  EXECUTINGFLAG: string;
  ACTIVEFLAG: string;
  TRANSACTION_TYPE: string;
  SHIFTPAGE: string;
  AP_BOOKING: string;
  ISDBLOGFLAG: string;
}

export interface TxnListTableRow extends TxnListTableData {
  view?: string;
  edit?: string;
  copy?: string;
  execute?: string;
  reload?: string;
  endTime?: string;
}

export interface TxnListTableCol {
  field: string;
  header: string;
}

export interface DllListTable {
  DLL_SEQ: string;
  DLL_DESC: string;
  DLL_PATH: string;
  DLL_NAME: string;
  NAMESPACE: string;
  CLASS_NAME: string;
}

export interface DllListTableRow extends DllListTable {
  edit?: string;
}

export interface DllListTableCol {
  field: keyof DllListTableRow;
  header: string;
}

export interface MailGroupListTable {
  MAIL_G_ID: string;
  MAIL_G_NAME: string;
  ACTIVEFLAG: string;
}

export interface MailGroupListTableRow extends MailGroupListTable {
  edit?: string;
}

export interface MailGroupListTableCol {
  field: keyof MailGroupListTableRow;
  header: string;
}

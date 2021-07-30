export interface Transaction {
  id: string;
  title: string;
  content: string;
  executeCount: number;
  createTime?: Date;
}

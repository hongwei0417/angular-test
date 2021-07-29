export interface ITransaction {
  id: string;
  title: string;
  content: string;
  executeCount: number;
  createTime?: Date;
}

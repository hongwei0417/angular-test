export interface Transaction {
  id: string;
  title: string;
  content: string;
  executeCount: number;
  createTime?: Date;
}

export function generateMockTxn(): Transaction {
  return {
    id: '666',
    title: 'Testing',
    content: 'It is test content',
    executeCount: 10,
    createTime: new Date()
  };
}

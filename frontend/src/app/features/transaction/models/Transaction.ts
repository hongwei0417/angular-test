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

export function generateMockTxnForm(): any {
  return {
    title: 'Jest Testing',
    content: 'This is a test case',
    executeCount: 10
  };
}

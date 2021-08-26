import { ScheduleTableRow } from 'src/app/features/schedule/models/ScheduleTable';

export const scheduleListTableData: ScheduleTableRow[] = [
  {
    CronExpress: '0 20 10 ? * * *',
    EndAt: '2099/01/01',
    JobKey: '0000000020-0',
    StartAt: '2000/01/01',
    State: 'Normal',
    TransactionId: '0000000020',
    TransactionName: 'Test1081119_1134',
  },
  {
    CronExpress: '0 20/10 0 ? * * *',
    EndAt: '2099-01-01',
    JobKey: '0000000045-0',
    StartAt: '2019-12-24',
    State: 'Normal',
    TransactionId: '0000000045',
    TransactionName: 'CBDM TEST uTest1090115_1127',
  },
];

import { useEffect } from 'react';
import type { NextPage } from 'next';
import { useCounter } from '../utils/hooks/useCounter';

import TaskRow from '../components/ui/TaskRow';
import DateClass from '../utils/classes/Date';
import LocalStorageClass from '../utils/classes/LocalStorage';

import { STORAGE_NAME } from '../utils/consts';

const Home: NextPage = () => {
  const [crossCount, sumCross, subCross] = useCounter();
  const [dinnerCount, sumDinner, subDinner] = useCounter();

  // useEffect(() => {
  //   // LocalStorageClass.SetData(STORAGE_NAME, {
  //   //   date: DateClass.today,
  //   //   crossfit: crossCount,
  //   //   dinner: dinnerCount,
  //   // });
  // }, [crossCount, dinnerCount]);

  return (
    <div className="w-full">
      <div className="week-title">
        Semana de{' '}
        <strong>
          {DateClass.workingWeekStart()} a {DateClass.workingWeekEnd()}
        </strong>
      </div>

      <div className="main-wrapper">
        <TaskRow label="Cross na semana" count={Number(crossCount)} sumCount={sumCross} subCount={subCross} />

        <TaskRow label="Alimentação decente" count={Number(dinnerCount)} sumCount={sumDinner} subCount={subDinner} />

        {/* <aside className="calendar"></aside> */}
      </div>
    </div>
  );
};

export default Home;

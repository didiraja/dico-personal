import { useEffect } from 'react';
import type { NextPage } from 'next';
import { useCounter } from '../utils/hooks/useCounter';

import TaskRow from '../components/ui/TaskRow';
import { DateClass } from '../utils/Date';

const Home: NextPage = () => {
  const [crossCount, sumCross, subCross] = useCounter();
  const [dinnerCount, sumDinner, subDinner] = useCounter();

  const dateClass = new DateClass();

  useEffect(() => {
    // const obj = {
    //   date: new Date(),
    //   crossfit: crossCount,
    //   dinner: dinnerCount,
    // };
    // console.log(JSON.stringify(obj));
  }, [crossCount, dinnerCount]);

  return (
    <div className="w-full">
      <div className="week-title">
        Semana de{' '}
        <strong>
          {dateClass.workingWeekStart()} a {dateClass.workingWeekEnd()}
        </strong>
      </div>

      <div className="main-wrapper">
        <TaskRow label="Cross na semana" count={crossCount} sumCount={() => sumCross()} subCount={() => subCross()} />

        <TaskRow
          label="Alimentação decente"
          count={dinnerCount}
          sumCount={() => sumDinner()}
          subCount={() => subDinner()}
        />

        {/* <aside className="calendar"></aside> */}
      </div>
    </div>
  );
};

export default Home;

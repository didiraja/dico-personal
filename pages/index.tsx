import { useEffect } from 'react';
import type { NextPage } from 'next';
import { useCounter } from '../utils/hooks/useCounter';

import TaskRow from '../components/ui/TaskRow';
import DateClass from '../utils/classes/Date';
import RequestClass from '../utils/classes/Request';
import LocalStorageClass from '../utils/classes/LocalStorage';

import { STORAGE_NAME } from '../utils/consts';

const Home: NextPage = () => {
  const [crossCount, setCross, sumCross, subCross] = useCounter();
  const [dinnerCount, setDinner, sumDinner, subDinner] = useCounter();

  // Load from DB
  useEffect(() => {
    RequestClass.findOne().then(response => {
      const { crossfit, dinner } = response.data.document;

      setCross(() => crossfit);
      setDinner(() => dinner);
    });
  });

  return (
    <div className="w-full">
      <div className="week-title">
        Semana de{' '}
        <strong>
          {' '}
          {DateClass.formattedWeekStart()} a {DateClass.formattedWeekEnd()}
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

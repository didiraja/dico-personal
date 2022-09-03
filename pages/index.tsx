import type { NextPage } from 'next';
import { useState } from 'react';

import TaskRow from '../components/ui/TaskRow';

const Home: NextPage = () => {
  const [crossCount, setCross] = useState(0);
  const [dinnerCount, setDinner] = useState(0);

  function updateState(state, setState) {
    if (state >= 5) return;

    setState(state + 1);
  }

  return (
    <div className="w-full">
      <div className="week-title">Semana de *segunda* a *sexta*</div>

      <div className="main-wrapper">
        <TaskRow label="Cross na semana" count={crossCount} updateCount={() => updateState(crossCount, setCross)} />

        <TaskRow
          label="Alimentação decente"
          count={dinnerCount}
          updateCount={() => updateState(dinnerCount, setDinner)}
        />

        {/* <aside className="calendar"></aside> */}
      </div>
    </div>
  );
};

export default Home;

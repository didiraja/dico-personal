import type { NextPage } from 'next';
import { useState, useEffect } from 'react';

import { Button, Callout } from '@blueprintjs/core';

const Home: NextPage = () => {
  const [crossCount, setCross] = useState(2);
  const [crossStatus, setStatus] = useState({
    intent: '',
    icon: '',
    title: '',
    description: '',
  });

  function updateCross() {
    setCross(crossCount + 1);

    // to do:: more than 5
  }

  useEffect(() => {
    const STATUS = {
      good: {
        intent: 'success',
        icon: 'heart',
        title: 'Ótimo',
        description: 'Boa! Em busca do shape.',
      },
      ok: {
        intent: 'primary',
        icon: 'tick-circle',
        title: 'OK',
        description: 'Fez o mínimo. Agora é melhorar essa meta.',
      },
      bad: {
        intent: 'danger',
        icon: 'cross',
        title: 'Ruim',
        description: 'Lembra da qualidade de vida.',
      },
    };

    if (crossCount > 3) return setStatus(STATUS.good);

    if (crossCount === 3) return setStatus(STATUS.ok);

    if (crossCount < 3) return setStatus(STATUS.bad);
  }, [crossCount]);

  return (
    <div className="w-full">
      <div className="week-title">Semana de *segunda* a *sexta*</div>

      <div className="main-wrapper">
        <div className="task-wrapper">
          <p className="cross-label">Cross na semana:</p>

          <p className="cross-count">{crossCount}</p>

          <div className="box-button">
            <Button large icon="plus" intent="primary" onClick={updateCross} />
          </div>

          <div className="status-box">
            <Callout icon={crossStatus.icon} intent={crossStatus.intent} title={`Status: ${crossStatus.title}`}>
              {crossStatus.description}
            </Callout>

            {/* <p className="status">Status: {crossStatus.title}</p>
            <hr />
            <div className="description">{crossStatus.description}</div> */}
          </div>
        </div>

        <aside className="calendar"></aside>

        {/* <div className="task-wrapper">
          <p className="dinner-label font-bold text-xl">Alimentação correta:</p>
          <p className="dinner-count text-3xl ml-2">{dinnerCount}</p>
        </div> */}
      </div>
    </div>
  );
};

export default Home;

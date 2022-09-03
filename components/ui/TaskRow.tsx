import type { NextPage } from 'next';
import { useState, useEffect } from 'react';

import { Button, Callout } from '@blueprintjs/core';

import style from './TaskRow.module.scss';

const TaskRow: NextPage = ({ label, count, updateCount }) => {
  const [crossStatus, setStatus] = useState({
    intent: '',
    icon: '',
    title: '',
    description: '',
  });

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

    if (count > 3) return setStatus(STATUS.good);

    if (count === 3) return setStatus(STATUS.ok);

    if (count < 3) return setStatus(STATUS.bad);
  }, [count]);

  return (
    <div className={style.taskWrapper}>
      <p className={style.taskLabel}>{label}:</p>

      <p className={style.taskCount}>{count}</p>

      <div className={style.boxButton}>
        <Button large icon="plus" intent="primary" onClick={updateCount} />
      </div>

      <div className={style.statusBox}>
        <Callout icon={crossStatus.icon} intent={crossStatus.intent} title={`Status: ${crossStatus.title}`}>
          {crossStatus.description}
        </Callout>
      </div>
    </div>
  );
};

export default TaskRow;

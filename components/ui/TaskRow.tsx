import { useState, useEffect, FC } from 'react';
import { Button, Callout, Intent } from '@blueprintjs/core';
import { IconName } from '@blueprintjs/icons';
import style from './TaskRow.module.scss';

interface TaskProps {
  label: string;
  count: number;
  sumCount: () => number;
  subCount: () => number;
}

interface TaskObject {
  intent: Intent;
  icon: null | IconName;
  title: string;
  description: string;
}

interface StatusBody {
  intent: Intent;
  icon: IconName;
  title: string;
  description: string;
}

interface StatusObject {
  good: StatusBody;
  ok: StatusBody;
  bad: StatusBody;
}

const TaskRow: FC<TaskProps> = ({ label, count, sumCount, subCount }) => {
  const [taskStatus, setStatus] = useState<TaskObject>({
    intent: Intent.NONE,
    icon: null,
    title: '',
    description: '',
  });

  useEffect(() => {
    const STATUS: StatusObject = {
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

    const average = 3;

    if (count > average) return setStatus(STATUS.good);

    if (count === average) return setStatus(STATUS.ok);

    if (count < average) return setStatus(STATUS.bad);
  }, [count]);

  return (
    <div className={style.taskWrapper}>
      <p className={style.taskLabel}>{label}:</p>

      <p className={style.taskCount}>{count}</p>

      <div className={style.boxButton}>
        <Button large icon="plus" intent="primary" onClick={sumCount} />
        <Button className="ml-3" large icon="minus" intent="primary" onClick={subCount} />
      </div>

      <div className={style.statusBox}>
        <Callout icon={taskStatus.icon} intent={taskStatus.intent} title={`Status: ${taskStatus.title}`}>
          {taskStatus.description}
        </Callout>
      </div>
    </div>
  );
};

export default TaskRow;

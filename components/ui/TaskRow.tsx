import type { NextPage } from 'next';
import { useState, useEffect } from 'react';

import { Button, Callout } from '@blueprintjs/core';

const TaskRow: NextPage = () => {
  return (
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
      </div>
    </div>
  );
};

export default TaskRow;

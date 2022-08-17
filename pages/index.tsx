import type { NextPage } from 'next';
import { Button } from '@blueprintjs/core';

const Home: NextPage = () => {
  const crossCount = 2;
  const dinnerCount = 0;

  const statusCross = 'OK';
  const statusDesc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis sapien magna..';

  return (
    <div className="p-5">
      <div className="week-title">Semana de *segunda* a *sexta*</div>

      <div className="main-wrapper">
        <div className="task-wrapper">
          <p className="cross-label">Cross na semana:</p>
          <p className="cross-count">{crossCount}</p>
          <Button large intent="success" icon="insert" />
          <div className="status-box">
            <p className="status">Status: {statusCross}</p>
            <hr />
            <div className="description">{statusDesc}</div>
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

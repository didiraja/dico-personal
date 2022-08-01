import type { NextPage } from 'next';
import { Button } from '@blueprintjs/core';

const Home: NextPage = () => {
  return (
    <div className="p-5">
      <div className="container mx-auto">This is home page</div>

      <Button large intent="primary" text="button content" />
    </div>
  );
};

export default Home;

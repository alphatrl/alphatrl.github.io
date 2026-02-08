import React from 'react';

import DefaultLayout from './layouts/DefaultLayout';
import Introduction from './shared/components/Introduction';
import Projects from './shared/components/Projects';

const App: React.FC = () => {
  return (
    <DefaultLayout title="Portfolio">
      <div className="flex flex-col">
        <Introduction />
        <Projects />
      </div>
    </DefaultLayout>
  );
};

export default App;

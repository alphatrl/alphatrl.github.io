import React from 'react';

import DefaultLayout from '../../layouts/DefaultLayout';
import GridLayout from './components/GridLayout';

const HomePage: React.FC = () => {
  return (
    <DefaultLayout title="Portfolio">
      <div className="flex flex-col justify-center items-center">
        <GridLayout />
      </div>
    </DefaultLayout>
  );
};

export default HomePage;

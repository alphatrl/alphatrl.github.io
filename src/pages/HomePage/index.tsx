import React from 'react';

import DefaultLayout from '../../layouts/DefaultLayout';
import GridLayout from './components/GridLayout';
import { FilterType } from './components/GridLayout/types';
import Header from './components/Header';

const HomePage: React.FC = () => {
  const [activeFilter, setActiveFilter] = React.useState<FilterType>(
    FilterType.ALL,
  );

  return (
    <DefaultLayout title="Portfolio">
      <div className="flex flex-col justify-center items-center">
        <Header activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        <GridLayout activeFilter={activeFilter} />
      </div>
    </DefaultLayout>
  );
};

export default HomePage;

import cn from 'classnames';
import React from 'react';

import DefaultLayout from '../../layouts/DefaultLayout';
import GridLayout from './components/GridLayout';
import { FilterType } from './components/GridLayout/types';
import Header from './components/Header';

const HomePage: React.FC = () => {
  const [activeFilter, setActiveFilter] = React.useState<FilterType>(
    FilterType.ALL,
  );

  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <DefaultLayout title="Portfolio">
      <div className="flex flex-col justify-center items-center">
        <div
          className={cn(
            'fixed top-0 left-0 right-0 z-50 flex justify-center',
            'pb-4 pt-safe-offset-6',
            'transition-all duration-250',
          )}
        >
          <div
            className={cn(
              'absolute inset-0 -z-10 h-40 w-full pointer-events-none transition-opacity duration-500',
              {
                'opacity-100': isScrolled,
                'opacity-0': !isScrolled,
              },
            )}
          >
            <div className="absolute inset-0 bg-white/70 dark:bg-zinc-900/80 mask-[linear-gradient(to_bottom,black_10%,transparent)]" />
          </div>
          <Header
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </div>
        <div className="pt-safe-offset-24 pb-safe-offset-16 w-full">
          <GridLayout activeFilter={activeFilter} />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default HomePage;

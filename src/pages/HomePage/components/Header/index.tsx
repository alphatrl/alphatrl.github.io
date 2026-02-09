import cn from 'classnames';
import { motion } from 'framer-motion';
import React from 'react';

import { FilterType } from '../GridLayout/types';

interface Props {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const Header: React.FC<Props> = ({ activeFilter, onFilterChange }) => {
  const filters = [
    FilterType.ALL,
    FilterType.ABOUT,
    FilterType.PROJECTS,
    FilterType.HOBBIES,
  ];

  return (
    <div className="w-full flex justify-center py-6">
      <div
        className={cn(
          'flex p-1 bg-gray-100/80 dark:bg-zinc-800/80 backdrop-blur-md rounded-full shadow-sm relative overflow-hidden',
          'border border-gray-200 dark:border-zinc-700/50',
        )}
      >
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={cn(
              'relative z-10 px-4 py-2 text-sm md:text-base font-medium rounded-full cursor-pointer select-none',
              'transition-colors duration-300 ease-out',
              {
                'text-gray-900 dark:text-white': activeFilter === filter,
                'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200':
                  activeFilter !== filter,
              },
            )}
          >
            {activeFilter === filter && (
              <motion.div
                layoutId="activeFilter"
                className="absolute inset-0 bg-white dark:bg-zinc-700 shadow-[0_2px_8px_rgba(0,0,0,0.08)] rounded-full -z-10"
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 30,
                }}
              />
            )}
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Header;

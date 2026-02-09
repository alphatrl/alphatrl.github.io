import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

import classNames from 'classnames';
import React from 'react';
import {
  GridLayout as ResponsiveGridLayout,
  useContainerWidth,
  useResponsiveLayout,
} from 'react-grid-layout';

import ClassmaidCard from './components/ClassmaidCard';
import ContactMeCard from './components/ContactMeCard';
import CVCard from './components/CVCard';
import HuatCard from './components/HuatCard';
import MeCard from './components/MeCard';
import PebbleMinimalCard from './components/PebbleMinimalCard';
import RunningCountdownCard from './components/RunningCountdownCard';
import TaskadeCard from './components/TaskadeCard';
import {
  DashboardBreakpoints,
  DashboardCols,
  DashboardLayouts,
  DashboardMargin,
  DashboardRowHeight,
} from './constants/dashboard';
import { FilterType, PortfolioKeyEnum } from './types';

interface Props {
  activeFilter?: FilterType;
}

const ACTIVE_ITEMS: Record<FilterType, PortfolioKeyEnum[]> = {
  [FilterType.ALL]: Object.values(PortfolioKeyEnum),
  [FilterType.ABOUT]: [
    PortfolioKeyEnum.ME,
    PortfolioKeyEnum.CONTACT,
    PortfolioKeyEnum.CV,
  ],
  [FilterType.PROJECTS]: [
    PortfolioKeyEnum.HUAT,
    PortfolioKeyEnum.PEBBLE_MINIMAL,
    PortfolioKeyEnum.TASKADE,
    PortfolioKeyEnum.CLASSMAID,
  ],
  [FilterType.HOBBIES]: [PortfolioKeyEnum.RACE_COUNTDOWN],
};

const GridLayout: React.FC<Props> = ({ activeFilter = FilterType.ALL }) => {
  const { width, containerRef, mounted } = useContainerWidth();
  const { cols, layout } = useResponsiveLayout({
    width,
    breakpoints: DashboardBreakpoints,
    cols: DashboardCols,
    layouts: DashboardLayouts[activeFilter],
  });

  const cardHeight = React.useMemo(() => {
    // We want the grid items to be square, so rowHeight should equal the column width
    // Formula: (containerWidth - (cols - 1) * marginX) / cols
    if (!width) return DashboardRowHeight.lg || 150; // Fallback

    // Safe access to margin and fallback logic
    return (width - (cols - 1) * DashboardMargin) / cols;
  }, [width, cols]);

  const getOpacityClass = (key: PortfolioKeyEnum) => {
    const isActive = ACTIVE_ITEMS[activeFilter].includes(key);
    return classNames('transition-opacity duration-300', {
      'opacity-100': isActive,
      'opacity-20 hover:opacity-100': !isActive,
    });
  };

  return (
    <div
      ref={containerRef}
      className="w-full h-full max-w-sm md:max-w-4xl xl:max-w-7xl p-4 md:px-8 mx-auto"
    >
      {mounted && (
        <ResponsiveGridLayout
          width={width}
          layout={layout}
          dragConfig={{ enabled: false }}
          gridConfig={{
            cols,
            rowHeight: cardHeight,
            margin: [DashboardMargin, DashboardMargin],
          }}
        >
          <MeCard
            key={PortfolioKeyEnum.ME}
            className={getOpacityClass(PortfolioKeyEnum.ME)}
          />

          <RunningCountdownCard
            key={PortfolioKeyEnum.RACE_COUNTDOWN}
            className={getOpacityClass(PortfolioKeyEnum.RACE_COUNTDOWN)}
          />

          <TaskadeCard
            key={PortfolioKeyEnum.TASKADE}
            className={getOpacityClass(PortfolioKeyEnum.TASKADE)}
          />

          <ContactMeCard
            key={PortfolioKeyEnum.CONTACT}
            className={getOpacityClass(PortfolioKeyEnum.CONTACT)}
          />

          <CVCard
            key={PortfolioKeyEnum.CV}
            className={getOpacityClass(PortfolioKeyEnum.CV)}
          />

          <ClassmaidCard
            key={PortfolioKeyEnum.CLASSMAID}
            className={getOpacityClass(PortfolioKeyEnum.CLASSMAID)}
          />

          <HuatCard
            key={PortfolioKeyEnum.HUAT}
            className={getOpacityClass(PortfolioKeyEnum.HUAT)}
          />

          <PebbleMinimalCard
            key={PortfolioKeyEnum.PEBBLE_MINIMAL}
            className={getOpacityClass(PortfolioKeyEnum.PEBBLE_MINIMAL)}
          />
        </ResponsiveGridLayout>
      )}
    </div>
  );
};

export default GridLayout;

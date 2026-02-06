import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

import React from 'react';
import {
  Breakpoint,
  GridLayout as ResponsiveGridLayout,
  useContainerWidth,
  useResponsiveLayout,
} from 'react-grid-layout';

import GridCard from '../../../../shared/components/GridCard';
import MeCard from './components/MeCard';
import PebbleMinimalCard from './components/PebbleMinimalCard';
import TaskadeCard from './components/TaskadeCard';
import {
  DashboardBreakpoints,
  DashboardCols,
  DashboardLayout,
  DashboardMargin,
  DashboardRowHeight,
} from './constants/dashboard';
import { PortfolioKeyEnum } from './types';

const GridLayout: React.FC = () => {
  const { width, containerRef, mounted } = useContainerWidth();
  const { cols, layout, breakpoint } = useResponsiveLayout({
    width,
    breakpoints: DashboardBreakpoints,
    cols: DashboardCols,
    layouts: DashboardLayout,
  });

  const cardHeight = React.useMemo(() => {
    // We want the grid items to be square, so rowHeight should equal the column width
    // Formula: (containerWidth - (cols - 1) * marginX) / cols
    if (!width) return DashboardRowHeight[breakpoint as Breakpoint] || 150;

    return (width - (cols - 1) * DashboardMargin) / cols;
  }, [breakpoint, width, cols]);

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
          <MeCard key={PortfolioKeyEnum.ME} />

          <GridCard
            key={PortfolioKeyEnum.RACE_COUNTDOWN}
            title="Running Countdown lol"
          />

          <TaskadeCard key={PortfolioKeyEnum.TASKADE} />

          <GridCard key={PortfolioKeyEnum.CONTACT} title="Contact Me" />

          <GridCard key={PortfolioKeyEnum.CV} title="CV?" />

          <GridCard key={PortfolioKeyEnum.CLASSMAID} title="Classmaid" />

          <GridCard key={PortfolioKeyEnum.HUAT} title="Huat" />

          <PebbleMinimalCard key={PortfolioKeyEnum.PEBBLE_MINIMAL} />
        </ResponsiveGridLayout>
      )}
    </div>
  );
};

export default GridLayout;

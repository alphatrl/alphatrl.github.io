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
import {
  DashboardBreakpoints,
  DashboardCols,
  DashboardLayout,
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
    return (
      DashboardRowHeight?.[breakpoint as Breakpoint] ??
      DashboardBreakpoints['lg']
    );
  }, [breakpoint]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full max-w-6xl p-4 mx-auto overflow-y-scroll"
    >
      {mounted && (
        <ResponsiveGridLayout
          width={width}
          layout={layout}
          dragConfig={{ enabled: false }}
          gridConfig={{
            cols,
            rowHeight: cardHeight,
            margin: [16, 16],
          }}
        >
          <GridCard key={PortfolioKeyEnum.ME} title="Hey I'm Amos">
            <p className="text-gray-600">Full Stack Developer...</p>
          </GridCard>

          <GridCard
            key={PortfolioKeyEnum.RACE_COUNTDOWN}
            title="Running Countdown lol"
          />

          <GridCard key={PortfolioKeyEnum.TASKADE} title="Taskade" />

          <GridCard key={PortfolioKeyEnum.CONTACT} title="Contact Me" />

          <GridCard key={PortfolioKeyEnum.CV} title="CV?" />

          <GridCard key={PortfolioKeyEnum.CLASSMAID} title="Classmaid" />

          <GridCard key={PortfolioKeyEnum.HUAT} title="Huat" />

          <GridCard key={PortfolioKeyEnum.PEBBLE_MINIMAL} title="Pebble" />
        </ResponsiveGridLayout>
      )}
    </div>
  );
};

export default GridLayout;

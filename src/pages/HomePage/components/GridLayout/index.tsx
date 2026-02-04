import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

import React from 'react';
import {
  GridLayout as ResponsiveGridLayout,
  useContainerWidth,
  useResponsiveLayout,
} from 'react-grid-layout';

import GridCard from '../../../../shared/components/GridCard';
import {
  DashboardBreakpoints,
  DashboardCols,
  DashboardLayout,
} from './constants';

const GridLayout: React.FC = () => {
  const { width, containerRef, mounted } = useContainerWidth();
  const { cols, layout } = useResponsiveLayout({
    width,
    breakpoints: DashboardBreakpoints,
    cols: DashboardCols,
    layouts: DashboardLayout,
  });

  return (
    <div
      ref={containerRef}
      className="w-full h-full max-w-7xl p-4 mx-auto overflow-y-scroll"
    >
      {mounted && (
        <ResponsiveGridLayout
          width={width}
          layout={layout}
          dragConfig={{ enabled: false }}
          gridConfig={{
            cols,
            rowHeight: 150,
            margin: [16, 16],
          }}
        >
          <GridCard key="amos" title="Hey I'm Amos">
            <p className="text-gray-600">Full Stack Developer...</p>
          </GridCard>

          <GridCard key="countdown" title="Running Countdown lol" />

          <GridCard key="taskade" title="Taskade" />

          <GridCard key="contact" title="Contact Me" />

          <GridCard key="cv" title="CV?" />

          <GridCard key="classmaid" title="Classmaid" />

          <GridCard key="huat" title="Huat" />

          <GridCard key="pebble" title="Pebble" />
        </ResponsiveGridLayout>
      )}
    </div>
  );
};

export default GridLayout;

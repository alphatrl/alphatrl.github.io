import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

import React from 'react';
import { Responsive, useContainerWidth } from 'react-grid-layout';

import GridCard from '../../../../shared/components/GridCard';

const portfolioLayouts = {
  lg: [
    { i: 'amos', x: 0, y: 0, w: 2, h: 2 },
    { i: 'countdown', x: 2, y: 0, w: 1, h: 2 },
    { i: 'taskade', x: 3, y: 0, w: 1, h: 4 },
    { i: 'contact', x: 0, y: 2, w: 1, h: 2 },
    { i: 'cv', x: 1, y: 2, w: 1, h: 2 },
    { i: 'classmaid', x: 2, y: 2, w: 1, h: 4 },
    { i: 'huat', x: 0, y: 4, w: 2, h: 2 },
    { i: 'pebble', x: 3, y: 4, w: 1, h: 2 },
  ],
  md: [
    { i: 'amos', x: 0, y: 0, w: 2, h: 2 },
    { i: 'countdown', x: 2, y: 0, w: 1, h: 2 },
    { i: 'taskade', x: 3, y: 0, w: 1, h: 4 },
    { i: 'contact', x: 0, y: 2, w: 1, h: 2 },
    { i: 'cv', x: 1, y: 2, w: 1, h: 2 },
    { i: 'classmaid', x: 2, y: 2, w: 1, h: 4 },
    { i: 'huat', x: 0, y: 4, w: 2, h: 2 },
    { i: 'pebble', x: 3, y: 4, w: 1, h: 2 },
  ],
  sm: [
    { i: 'amos', x: 0, y: 0, w: 1, h: 1 },
    { i: 'countdown', x: 1, y: 0, w: 1, h: 1 },
    { i: 'taskade', x: 0, y: 1, w: 1, h: 1 },
    { i: 'contact', x: 1, y: 1, w: 1, h: 1 },
    { i: 'cv', x: 0, y: 2, w: 1, h: 1 },
    { i: 'classmaid', x: 1, y: 2, w: 1, h: 1 },
    { i: 'huat', x: 0, y: 3, w: 1, h: 1 },
    { i: 'pebble', x: 1, y: 3, w: 1, h: 1 },
  ],
  xs: [
    { i: 'amos', x: 0, y: 0, w: 1, h: 1 },
    { i: 'countdown', x: 0, y: 2, w: 1, h: 1 },
    { i: 'taskade', x: 0, y: 4, w: 1, h: 1 },
    { i: 'contact', x: 0, y: 8, w: 1, h: 1 },
    { i: 'cv', x: 0, y: 10, w: 1, h: 1 },
    { i: 'classmaid', x: 0, y: 12, w: 1, h: 1 },
    { i: 'huat', x: 0, y: 16, w: 1, h: 1 },
    { i: 'pebble', x: 0, y: 18, w: 1, h: 1 },
  ],
};

const GridLayout: React.FC = () => {
  const { width, containerRef, mounted } = useContainerWidth();

  return (
    <div
      ref={containerRef}
      className="w-full h-full max-w-5xl p-4 mx-auto overflow-y-scroll"
    >
      {mounted && (
        <Responsive
          width={width}
          margin={[16, 16]}
          rowHeight={150}
          breakpoints={{ lg: 1200, md: 768, sm: 480, xs: 320 }}
          cols={{ lg: 4, md: 4, sm: 2, xs: 1 }}
          layouts={portfolioLayouts}
          dragConfig={{ enabled: false }}
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
        </Responsive>
      )}
    </div>
  );
};

export default GridLayout;

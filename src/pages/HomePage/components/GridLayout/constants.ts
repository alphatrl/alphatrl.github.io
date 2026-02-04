import { Breakpoint, ResponsiveLayouts } from 'react-grid-layout';

export const DashboardLayout: ResponsiveLayouts<Breakpoint> = {
  lg: [
    { i: 'amos', x: 0, y: 0, w: 2, h: 2 },
    { i: 'countdown', x: 2, y: 0, w: 1, h: 2 },
    { i: 'taskade', x: 3, y: 0, w: 1, h: 4 },
    // Row 2
    { i: 'contact', x: 0, y: 2, w: 1, h: 2 },
    { i: 'cv', x: 1, y: 2, w: 1, h: 2 },
    { i: 'classmaid', x: 2, y: 2, w: 1, h: 4 },
    // Row 3
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
    { i: 'amos', x: 0, y: 0, w: 2, h: 2 },
    { i: 'contact', x: 0, y: 2, w: 2, h: 1 },
    { i: 'taskade', x: 0, y: 3, w: 1, h: 2 },
    { i: 'cv', x: 1, y: 3, w: 1, h: 2 },
    { i: 'countdown', x: 1, y: 3, w: 1, h: 1 },
    { i: 'classmaid', x: 0, y: 4, w: 1, h: 2 },
    { i: 'huat', x: 2, y: 4, w: 1, h: 2 },
    { i: 'pebble', x: 0, y: 5, w: 1, h: 1 },
  ],
};

export const DashboardBreakpoints = { lg: 1200, md: 768, sm: 480 };

export const DashboardCols = { lg: 4, md: 4, sm: 2 };

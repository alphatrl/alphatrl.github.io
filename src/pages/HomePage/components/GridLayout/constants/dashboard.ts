import { Breakpoint, ResponsiveLayouts } from 'react-grid-layout';

import { PortfolioKeyEnum } from '../types';

export const DashboardLayout: ResponsiveLayouts<Breakpoint> = {
  lg: [
    {
      i: PortfolioKeyEnum.ME,
      x: 0,
      y: 0,
      w: 2,
      h: 1,
    },
    {
      i: PortfolioKeyEnum.RACE_COUNTDOWN,
      x: 2,
      y: 0,
      w: 1,
      h: 1,
    },
    {
      i: PortfolioKeyEnum.TASKADE,
      x: 3,
      y: 0,
      w: 1,
      h: 2,
    },
    // Row 2
    {
      i: PortfolioKeyEnum.CONTACT,
      x: 0,
      y: 2,
      w: 1,
      h: 1,
    },
    {
      i: PortfolioKeyEnum.CV,
      x: 1,
      y: 2,
      w: 1,
      h: 1,
    },
    {
      i: PortfolioKeyEnum.CLASSMAID,
      x: 2,
      y: 2,
      w: 1,
      h: 2,
    },
    // Row 3
    {
      i: PortfolioKeyEnum.HUAT,
      x: 0,
      y: 4,
      w: 2,
      h: 1,
    },
    {
      i: PortfolioKeyEnum.PEBBLE_MINIMAL,
      x: 3,
      y: 4,
      w: 1,
      h: 1,
    },
  ],
  md: [
    { i: PortfolioKeyEnum.ME, x: 0, y: 0, w: 2, h: 2 },
    { i: PortfolioKeyEnum.RACE_COUNTDOWN, x: 2, y: 0, w: 1, h: 2 },
    { i: PortfolioKeyEnum.TASKADE, x: 3, y: 0, w: 1, h: 4 },
    { i: PortfolioKeyEnum.CONTACT, x: 0, y: 2, w: 1, h: 2 },
    { i: PortfolioKeyEnum.CV, x: 1, y: 2, w: 1, h: 2 },
    { i: PortfolioKeyEnum.CLASSMAID, x: 2, y: 2, w: 1, h: 4 },
    { i: PortfolioKeyEnum.HUAT, x: 0, y: 4, w: 2, h: 2 },
    { i: PortfolioKeyEnum.PEBBLE_MINIMAL, x: 3, y: 4, w: 1, h: 2 },
  ],
  sm: [
    { i: PortfolioKeyEnum.ME, x: 0, y: 0, w: 2, h: 2 },
    { i: PortfolioKeyEnum.CONTACT, x: 0, y: 2, w: 2, h: 1 },
    { i: PortfolioKeyEnum.TASKADE, x: 0, y: 3, w: 1, h: 2 },
    { i: PortfolioKeyEnum.CV, x: 1, y: 3, w: 1, h: 2 },
    { i: PortfolioKeyEnum.RACE_COUNTDOWN, x: 1, y: 3, w: 1, h: 1 },
    { i: PortfolioKeyEnum.CLASSMAID, x: 0, y: 4, w: 1, h: 2 },
    { i: PortfolioKeyEnum.HUAT, x: 2, y: 4, w: 1, h: 2 },
    { i: PortfolioKeyEnum.PEBBLE_MINIMAL, x: 0, y: 5, w: 1, h: 1 },
  ],
};

export const DashboardBreakpoints: Record<Breakpoint, number> = {
  lg: 1024,
  md: 768,
  sm: 480,
};

export const DashboardCols: Record<Breakpoint, number> = {
  lg: 4,
  md: 4,
  sm: 2,
};

export const DashboardRowHeight: Record<Breakpoint, number> = {
  lg: 150,
  md: 150,
  sm: 240,
};

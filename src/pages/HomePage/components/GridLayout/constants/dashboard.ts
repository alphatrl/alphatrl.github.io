import { Breakpoint, ResponsiveLayouts } from 'react-grid-layout';

import { FilterType, PortfolioKeyEnum } from '../types';

export const DashboardLayout: ResponsiveLayouts<Breakpoint> = {
  lg: [
    { i: PortfolioKeyEnum.ME, x: 0, y: 0, w: 2, h: 1 },
    { i: PortfolioKeyEnum.RACE_COUNTDOWN, x: 2, y: 0, w: 1, h: 1 },
    { i: PortfolioKeyEnum.TASKADE, x: 3, y: 0, w: 1, h: 2 },
    // Row 2
    { i: PortfolioKeyEnum.CONTACT, x: 0, y: 2, w: 1, h: 1 },
    { i: PortfolioKeyEnum.CV, x: 1, y: 2, w: 1, h: 1 },
    { i: PortfolioKeyEnum.CLASSMAID, x: 2, y: 2, w: 1, h: 2 },
    // Row 3
    { i: PortfolioKeyEnum.HUAT, x: 0, y: 4, w: 2, h: 1 },
    { i: PortfolioKeyEnum.PEBBLE_MINIMAL, x: 3, y: 4, w: 1, h: 1 },
  ],
  md: [
    { i: PortfolioKeyEnum.ME, x: 0, y: 0, w: 2, h: 2 },
    { i: PortfolioKeyEnum.RACE_COUNTDOWN, x: 2, y: 0, w: 1, h: 1 },
    { i: PortfolioKeyEnum.TASKADE, x: 3, y: 0, w: 1, h: 2 },
    // Row 2
    { i: PortfolioKeyEnum.CONTACT, x: 0, y: 2, w: 1, h: 1 },
    { i: PortfolioKeyEnum.CV, x: 1, y: 2, w: 1, h: 1 },
    { i: PortfolioKeyEnum.CLASSMAID, x: 2, y: 2, w: 1, h: 2 },
    // Row 3
    { i: PortfolioKeyEnum.HUAT, x: 0, y: 4, w: 2, h: 1 },
    { i: PortfolioKeyEnum.PEBBLE_MINIMAL, x: 3, y: 4, w: 1, h: 1 },
  ],
  sm: [
    { i: PortfolioKeyEnum.ME, x: 0, y: 0, w: 2, h: 2 },
    { i: PortfolioKeyEnum.CONTACT, x: 0, y: 2, w: 1, h: 1 },
    { i: PortfolioKeyEnum.CV, x: 1, y: 2, w: 1, h: 1 },
    { i: PortfolioKeyEnum.TASKADE, x: 0, y: 3, w: 1, h: 2 },
    { i: PortfolioKeyEnum.RACE_COUNTDOWN, x: 1, y: 3, w: 1, h: 1 },
    { i: PortfolioKeyEnum.CLASSMAID, x: 1, y: 4, w: 1, h: 2 },
    { i: PortfolioKeyEnum.HUAT, x: 0, y: 6, w: 2, h: 1 },
    { i: PortfolioKeyEnum.PEBBLE_MINIMAL, x: 0, y: 5, w: 1, h: 1 },
  ],
};

const AboutLayout: ResponsiveLayouts<Breakpoint> = {
  lg: [
    { i: PortfolioKeyEnum.ME, x: 0, y: 0, w: 2, h: 1 },
    { i: PortfolioKeyEnum.CONTACT, x: 2, y: 0, w: 1, h: 1 },
    { i: PortfolioKeyEnum.CV, x: 3, y: 0, w: 1, h: 1 },
    { i: PortfolioKeyEnum.TASKADE, x: 0, y: 1, w: 1, h: 2 },
    { i: PortfolioKeyEnum.CLASSMAID, x: 1, y: 1, w: 1, h: 2 },
    { i: PortfolioKeyEnum.HUAT, x: 2, y: 1, w: 2, h: 1 },
    { i: PortfolioKeyEnum.RACE_COUNTDOWN, x: 2, y: 2, w: 1, h: 1 },
    { i: PortfolioKeyEnum.PEBBLE_MINIMAL, x: 3, y: 2, w: 1, h: 1 },
  ],
  md: [
    { i: PortfolioKeyEnum.ME, x: 0, y: 0, w: 2, h: 2 },
    { i: PortfolioKeyEnum.CONTACT, x: 2, y: 0, w: 1, h: 1 },
    { i: PortfolioKeyEnum.CV, x: 3, y: 0, w: 1, h: 1 },
    { i: PortfolioKeyEnum.TASKADE, x: 0, y: 1, w: 1, h: 2 },
    { i: PortfolioKeyEnum.CLASSMAID, x: 1, y: 1, w: 1, h: 2 },
    { i: PortfolioKeyEnum.HUAT, x: 2, y: 1, w: 2, h: 1 },
    { i: PortfolioKeyEnum.RACE_COUNTDOWN, x: 2, y: 2, w: 1, h: 1 },
    { i: PortfolioKeyEnum.PEBBLE_MINIMAL, x: 3, y: 2, w: 1, h: 1 },
  ],
  sm: [
    { i: PortfolioKeyEnum.ME, x: 0, y: 0, w: 2, h: 2 },
    { i: PortfolioKeyEnum.CONTACT, x: 0, y: 2, w: 1, h: 1 },
    { i: PortfolioKeyEnum.CV, x: 1, y: 2, w: 1, h: 1 },
    { i: PortfolioKeyEnum.TASKADE, x: 0, y: 3, w: 1, h: 2 },
    { i: PortfolioKeyEnum.RACE_COUNTDOWN, x: 2, y: 3, w: 1, h: 1 },
    { i: PortfolioKeyEnum.CLASSMAID, x: 1, y: 4, w: 1, h: 2 },
    { i: PortfolioKeyEnum.PEBBLE_MINIMAL, x: 0, y: 5, w: 1, h: 1 },
    { i: PortfolioKeyEnum.HUAT, x: 0, y: 7, w: 2, h: 1 },
  ],
};

const ProjectsLayout: ResponsiveLayouts<Breakpoint> = {
  lg: [
    { i: PortfolioKeyEnum.HUAT, x: 0, y: 0, w: 2, h: 1 },
    { i: PortfolioKeyEnum.TASKADE, x: 2, y: 0, w: 1, h: 2 },
    { i: PortfolioKeyEnum.CLASSMAID, x: 3, y: 0, w: 1, h: 2 },
    { i: PortfolioKeyEnum.PEBBLE_MINIMAL, x: 0, y: 1, w: 1, h: 1 },
    { i: PortfolioKeyEnum.CONTACT, x: 1, y: 1, w: 1, h: 1 },
    { i: PortfolioKeyEnum.ME, x: 0, y: 2, w: 2, h: 1 },
    { i: PortfolioKeyEnum.CV, x: 2, y: 2, w: 1, h: 1 },
    { i: PortfolioKeyEnum.RACE_COUNTDOWN, x: 3, y: 2, w: 1, h: 1 },
  ],
  md: [
    { i: PortfolioKeyEnum.HUAT, x: 0, y: 0, w: 2, h: 1 },
    { i: PortfolioKeyEnum.TASKADE, x: 2, y: 0, w: 1, h: 2 },
    { i: PortfolioKeyEnum.CLASSMAID, x: 3, y: 0, w: 1, h: 2 },
    { i: PortfolioKeyEnum.PEBBLE_MINIMAL, x: 0, y: 1, w: 2, h: 1 },
    { i: PortfolioKeyEnum.ME, x: 0, y: 2, w: 2, h: 2 },
    { i: PortfolioKeyEnum.CONTACT, x: 2, y: 2, w: 1, h: 1 },
    { i: PortfolioKeyEnum.CV, x: 3, y: 2, w: 1, h: 1 },
    { i: PortfolioKeyEnum.RACE_COUNTDOWN, x: 2, y: 3, w: 1, h: 1 },
  ],
  sm: [
    { i: PortfolioKeyEnum.TASKADE, x: 0, y: 0, w: 1, h: 2 },
    { i: PortfolioKeyEnum.CLASSMAID, x: 1, y: 0, w: 1, h: 2 },
    { i: PortfolioKeyEnum.HUAT, x: 0, y: 2, w: 2, h: 1 },
    { i: PortfolioKeyEnum.PEBBLE_MINIMAL, x: 0, y: 3, w: 1, h: 1 },
    { i: PortfolioKeyEnum.RACE_COUNTDOWN, x: 1, y: 3, w: 1, h: 1 },
    { i: PortfolioKeyEnum.ME, x: 0, y: 4, w: 2, h: 2 },
    { i: PortfolioKeyEnum.CONTACT, x: 0, y: 6, w: 1, h: 1 },
    { i: PortfolioKeyEnum.CV, x: 1, y: 6, w: 1, h: 1 },
  ],
};

const HobbiesLayout: ResponsiveLayouts<Breakpoint> = {
  lg: [
    { i: PortfolioKeyEnum.RACE_COUNTDOWN, x: 0, y: 0, w: 1, h: 1 },
    { i: PortfolioKeyEnum.ME, x: 1, y: 0, w: 2, h: 1 },
    { i: PortfolioKeyEnum.CONTACT, x: 3, y: 0, w: 1, h: 1 },
    { i: PortfolioKeyEnum.TASKADE, x: 0, y: 1, w: 1, h: 2 },
    { i: PortfolioKeyEnum.CLASSMAID, x: 1, y: 1, w: 1, h: 2 },
    { i: PortfolioKeyEnum.HUAT, x: 2, y: 1, w: 2, h: 1 },
    { i: PortfolioKeyEnum.CV, x: 2, y: 2, w: 1, h: 1 },
    { i: PortfolioKeyEnum.PEBBLE_MINIMAL, x: 3, y: 2, w: 1, h: 1 },
  ],
  md: [
    { i: PortfolioKeyEnum.RACE_COUNTDOWN, x: 0, y: 0, w: 1, h: 1 },
    { i: PortfolioKeyEnum.ME, x: 1, y: 0, w: 2, h: 2 },
    { i: PortfolioKeyEnum.CONTACT, x: 3, y: 0, w: 1, h: 1 },
    { i: PortfolioKeyEnum.CV, x: 3, y: 1, w: 1, h: 1 },
    { i: PortfolioKeyEnum.TASKADE, x: 0, y: 1, w: 1, h: 2 },
    { i: PortfolioKeyEnum.CLASSMAID, x: 1, y: 1, w: 1, h: 2 },
    { i: PortfolioKeyEnum.HUAT, x: 2, y: 1, w: 2, h: 1 },
    { i: PortfolioKeyEnum.PEBBLE_MINIMAL, x: 3, y: 2, w: 2, h: 1 },
  ],
  sm: [
    { i: PortfolioKeyEnum.RACE_COUNTDOWN, x: 0, y: 0, w: 1, h: 1 },
    { i: PortfolioKeyEnum.CONTACT, x: 1, y: 0, w: 1, h: 1 },
    { i: PortfolioKeyEnum.ME, x: 0, y: 1, w: 2, h: 2 },
    { i: PortfolioKeyEnum.CV, x: 0, y: 3, w: 1, h: 1 },
    { i: PortfolioKeyEnum.TASKADE, x: 0, y: 4, w: 1, h: 2 },
    { i: PortfolioKeyEnum.CLASSMAID, x: 1, y: 4, w: 1, h: 2 },
    { i: PortfolioKeyEnum.PEBBLE_MINIMAL, x: 1, y: 5, w: 1, h: 1 },
    { i: PortfolioKeyEnum.HUAT, x: 0, y: 6, w: 2, h: 1 },
  ],
};

export const DashboardLayouts: Record<
  FilterType,
  ResponsiveLayouts<Breakpoint>
> = {
  [FilterType.ALL]: DashboardLayout,
  [FilterType.ABOUT]: AboutLayout,
  [FilterType.PROJECTS]: ProjectsLayout,
  [FilterType.HOBBIES]: HobbiesLayout,
};

export const DashboardBreakpoints: Record<Breakpoint, number> = {
  lg: 1000,
  md: 700,
  sm: 480,
};

export const DashboardCols: Record<Breakpoint, number> = {
  lg: 4,
  md: 4,
  sm: 2,
};

export const DashboardRowHeight: Record<Breakpoint, number> = {
  lg: 240,
  md: 240,
  sm: 240,
};

export const DashboardMargin = 16;

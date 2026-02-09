export enum PortfolioKeyEnum {
  ME = 'me',
  RACE_COUNTDOWN = 'race_countdown',
  TASKADE = 'taskade',
  CONTACT = 'contact',
  CV = 'cv',
  CLASSMAID = 'project_classmaid',
  HUAT = 'project_huat',
  PEBBLE_MINIMAL = 'project_pebble_minimal',
}

export enum FilterType {
  ALL = 'All',
  ABOUT = 'About',
  PROJECTS = 'Projects',
  HOBBIES = 'Hobbies',
  // WRITING = 'Writing', // Hidden for now
}

export interface PortfolioBaseItem {
  id: PortfolioKeyEnum;
}

export interface PortfolioItemWriting extends PortfolioBaseItem {
  content: string;
}

export interface PortfolioItemLink extends PortfolioBaseItem {
  title: string;
  url: string;
}

export type PortfolioItem = PortfolioItemWriting | PortfolioItemLink;

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

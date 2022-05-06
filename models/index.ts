export interface Asset {
  _ref: string;
  _type: string;
}

export interface CardImage {
  asset: Asset;
  _type: string;
}

export interface Slug {
  current: string;
  _type: string;
}

export interface Defense {
  average: number;
  defAwareness: number;
  heading: number;
  interceptions: number;
  slidingTackle: number;
  standingTackle: number;
}

export interface Dribbling {
  agility: number;
  average: number;
  balance: number;
  ballControl: number;
  composure: number;
  dribbling: number;
  reactions: number;
}

export interface Pace {
  acceleration: number;
  average: number;
  sprintSpeed: number;
}

export interface Passing {
  average: number;
  crossing: number;
  curve: number;
  freeKick: number;
  longPassing: number;
  shortPassing: number;
  vision: number;
}

export interface Physical {
  aggression: number;
  average: number;
  jumping: number;
  stamina: number;
  strength: number;
}

export interface Shooting {
  average: number;
  finishing: number;
  longShot: number;
  penalties: number;
  positioning: number;
  shotPower: number;
  volleys: number;
}

export interface Statistics {
  defense: Defense;
  dribbling: Dribbling;
  pace: Pace;
  passing: Passing;
  physical: Physical;
  shooting: Shooting;
}

export enum Rate {
  low = 'Low',
  medium = 'Medium',
  high = 'High'
}

export interface Card {
  age: string;
  cardImage: CardImage;
  cardType: string;
  club: string;
  description: string;
  gameVersion: number;
  goalkeeperStatistics: {};
  height: string;
  isGoalkeeper: boolean;
  league: string;
  name: string;
  nation: string;
  position: string;
  rating: number;
  skillMoves: number;
  slug: Slug;
  statistics: Statistics;
  strongFoot: string;
  weakFoot: number;
  workRatesAttacking: Rate;
  workRatesDefensive: Rate;
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}

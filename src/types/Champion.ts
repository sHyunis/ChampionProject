export type Champion = {
  id: string;
  name: string;
  title: string;
  blurb: string;
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  tags: string[];
  key: number;
};

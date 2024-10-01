export type Item = {
  id: string;
  name: string;
  gold: {
    base: number;
    total: number;
    sell: number;
    purchaseable: number;
  };
  colloq: string;
  plaintext: string;
  description: string;
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  title: string;
};

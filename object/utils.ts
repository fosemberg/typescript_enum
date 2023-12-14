export const Enum = {
  a: 'a',
  b: 'b',
};

export type Enum = ValueOf<typeof Enum>;

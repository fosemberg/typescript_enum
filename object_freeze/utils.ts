export const Enum = Object.freeze({
  a: 'a',
  b: 'b',
});

export type Enum = ValueOf<typeof Enum>;

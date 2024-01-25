export const Enum = {
  a: 'a',
  b: 'b',
} as const;

export type Enum = ValueOf<typeof Enum>;

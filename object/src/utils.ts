type ValueOf<Object, Value extends keyof Object = keyof Object> = Object[Value]

export const Enum1 = {
  a: 'a1',
  b: 'b1',
  c: 'c1',
  d: 'd1',
  e: 'e1',
} as const;

export type Enum1 = ValueOf<typeof Enum1>;

export const Enum2 = {
  a: 'a2',
  b: 'b2',
  c: 'c2',
  d: 'd2',
  e: 'e2',
} as const;

export type Enum2 = ValueOf<typeof Enum2>;

export const Enum3 = {
  a: 'a3',
  b: 'b3',
  c: 'c3',
  d: 'd3',
  e: 'e3',
} as const;

export type Enum3 = ValueOf<typeof Enum3>;

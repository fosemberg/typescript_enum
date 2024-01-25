type ValueOf<Object, Value extends keyof Object = keyof Object> = Object[Value]

export const Enum1 = Object.freeze({
  a: 'a1',
  b: 'b1',
  c: 'c1',
  d: 'd1',
  e: 'e1',
});

export type Enum1 = ValueOf<typeof Enum1>;

export const Enum2 = Object.freeze({
  a: 'a2',
  b: 'b2',
  c: 'c2',
  d: 'd2',
  e: 'e2',
});

export type Enum2 = ValueOf<typeof Enum2>;

export const Enum3 = Object.freeze({
  a: 'a3',
  b: 'b3',
  c: 'c3',
  d: 'd3',
  e: 'e3',
});

export type Enum3 = ValueOf<typeof Enum3>;

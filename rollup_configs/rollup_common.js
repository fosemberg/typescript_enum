import typescript from "@rollup/plugin-typescript";

const tsconfig = 'tsconfig.json';
import tsconfigJson from '../tsconfig.json';
const include = tsconfigJson.include;

export const plugins = [
  typescript({tsconfig, include}),
];

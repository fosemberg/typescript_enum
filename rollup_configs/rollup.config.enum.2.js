import typescript from '@rollup/plugin-typescript';
import {plugins} from "./rollup_common";

export default {
  input: [
    'src/enum/index_2.ts',
  ],
  output: {
    file: 'dist/enum/index_2.js',
  },
  plugins,
}

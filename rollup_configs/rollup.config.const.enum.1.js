import typescript from '@rollup/plugin-typescript';
import {plugins} from "./rollup_common";

export default {
  input: [
    'src/const_enum/index_1.ts',
  ],
  output: {
    file: 'dist/const_enum/index_1.js',
  },
  plugins,
}

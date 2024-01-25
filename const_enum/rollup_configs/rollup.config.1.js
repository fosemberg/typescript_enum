import typescript from '@rollup/plugin-typescript';
import {plugins} from "../../rollup_configs/rollup_common";

export default {
  input: [
    'const_enum/src/index_1.ts',
  ],
  output: {
    file: 'const_enum/dist/index_1.js',
  },
  plugins
}

import typescript from '@rollup/plugin-typescript';
import {plugins} from "../../rollup_configs/rollup_common";

export default {
  input: [
    'const_enum/src/index_2.ts',
  ],
  output: {
    file: 'const_enum/dist/index_2.js',
  },
  plugins,
}

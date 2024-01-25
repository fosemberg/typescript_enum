import typescript from '@rollup/plugin-typescript';
import {plugins} from "../../rollup_configs/rollup_common";

export default {
  input: [
    'enum/src/index_2.ts',
  ],
  output: {
    file: 'enum/dist/index_2.js',
  },
  plugins,
}

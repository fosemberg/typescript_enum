import typescript from '@rollup/plugin-typescript';
import {plugins} from "../../rollup_configs/rollup_common";

export default {
  input: [
    'object/src/index_2.ts',
  ],
  output: {
    file: 'object/dist/index_2.js',
  },
  plugins,
}

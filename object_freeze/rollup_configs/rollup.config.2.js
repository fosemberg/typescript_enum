import typescript from '@rollup/plugin-typescript';
import {plugins} from "../../rollup_configs/rollup_common";

export default {
  input: [
    'object_freeze/src/index_2.ts',
  ],
  output: {
    file: 'object_freeze/dist/index_2.js',
  },
  plugins,
}

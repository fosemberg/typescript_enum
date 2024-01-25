import typescript from '@rollup/plugin-typescript';
import {plugins} from "../../rollup_configs/rollup_common";

export default {
  input: [
    'object_const/src/index_2.ts',
  ],
  output: {
    file: 'object_const/dist/index_2.js',
  },
  plugins,
}

import typescript from '@rollup/plugin-typescript';
import {plugins} from "../../rollup_configs/rollup_common";

export default {
  input: [
    'object_const/src/index_1.ts',
  ],
  output: {
    file: 'object_const/dist/index_1.js',
  },
  plugins
}

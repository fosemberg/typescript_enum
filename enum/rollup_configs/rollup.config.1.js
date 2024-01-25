import typescript from '@rollup/plugin-typescript';
import {plugins} from "../../rollup_configs/rollup_common";

export default {
  input: [
    'enum/src/index_1.ts',
  ],
  output: {
    file: 'enum/dist/index_1.js',
  },
  plugins
}

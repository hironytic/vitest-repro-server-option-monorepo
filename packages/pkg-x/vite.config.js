// Configure Vitest (https://vitest.dev/config/)

import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    // // debug: {
    // //   dumpModules: './dbg',
    // // },
    // deps: {
    //   inline: ['vitest-css-test-module'],
    // },
    server: {
      // debug: {
      //   dumpModules: './dbg',
      // },
      deps: {
        inline: ['vitest-css-test-module'],
      },
    },
  },
});

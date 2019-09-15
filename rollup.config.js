import { createDefaultConfig } from '@open-wc/building-rollup';

// if you need to support IE11 use `createCompatibilityConfig` instead.
// import { createCompatibilityConfig } from '@open-wc/building-rollup';
// export default createCompatibilityConfig({ input: './index.html' });

export default createDefaultConfig({ input: './index.html' });
// src/setup-jest.ts
// This imports the new recommended way to set up the Zone.js testing environment
import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone';

// Call the setup function
// setupZoneTestEnv();

// Optional: If you want to extend Jest matchers with @testing-library/jest-dom
// First, install it: npm install --save-dev @testing-library/jest-dom
// import '@testing-library/jest-dom/extend-expect';

// Workaround for Jest error - ReferenceError: TextEncoder is not defined
// This is sometimes needed in Jest's JSDOM environment, especially in older Node.js versions
if (typeof globalThis.TextEncoder === 'undefined') {
  const { TextEncoder } = require('util');
  globalThis.TextEncoder = TextEncoder;
}
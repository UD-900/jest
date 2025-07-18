// jest.config.ts
import type { Config } from 'jest';
import { pathsToModuleNameMapper } from 'ts-jest';

// Import the entire tsconfig.json content
import * as tsconfigJson from './tsconfig.json';
import path from 'node:path';

// Define a minimal interface to assert the type of compilerOptions
// This tells TypeScript that 'paths' is an optional property on compilerOptions
interface TsConfigCompilerOptions {
  paths?: { [key: string]: string[] }; // 'paths' is an object where keys are strings and values are arrays of strings
}

const config: Config = {
  preset: 'jest-preset-angular',
  // This path is relative to the project root (where jest.config.ts is)
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
  testMatch: [
    // REVERT THIS BACK to the original glob pattern, but still relative to rootDir
    //'<rootDir>/src/**/*.spec.ts' // This pattern tells Jest where to find your test files
      'C:\ProgramData\Jenkins\.jenkins\workspace\angular-jest\src\app\app.component.spec.ts'

  ],
  // Safely access paths using a type assertion and provide an empty object fallback
  moduleNameMapper: pathsToModuleNameMapper(
    (tsconfigJson.compilerOptions as TsConfigCompilerOptions).paths || {},
    { prefix: '<rootDir>/' }
  ),
  // Optional: Coverage settings
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'lcov', 'text-summary'],
  reporters: ['default', ['jest-junit', { outputDirectory: 'test-results', outputName: 'junit.xml' }]]
};

export default config;

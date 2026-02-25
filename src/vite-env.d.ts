/// &lt;reference types="vite/client" />
/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
/// <reference types="vitest/globals" />

import 'vitest';
import { MockInstance as _MockInstance } from 'vitest';
import type { AxeMatchers } from 'vitest-axe/matchers';

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string
  readonly VITE_WEATHER_API_KEY: string
  // Add more environment variables here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
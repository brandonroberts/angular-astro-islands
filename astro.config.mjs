import { defineConfig } from 'astro/config';

import brSaucedAngular from "@br-sauced/astro-angular";

// https://astro.build/config
export default defineConfig({
  integrations: [brSaucedAngular()]
});
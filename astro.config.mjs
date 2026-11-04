import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  // Set this explicitly when hosting under a subdirectory.
  base: process.env.BASE_PATH || "/",
});

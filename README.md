# Bundle inspection

This is an early prototype of a tool to inspect Metro bundles.

## How to use

1. Install the package
2. Customize the Metro config (see [**metro.config.js**](./metro.config.js))
3. Create one or more exports with `bun expo export --platform android|ios` (or `bun export`)
4. Run `npx @bycedric/inspect-test` (or `bun inspect`)

When building React components:

- Use TypeScript with explicit prop types
- Always start types names for component properties with 'TX' prefix
- Add barrel exports (index.ts)
- Keep components under 150 lines
- Co-locate tests in the same folder
- Use <ComponentName>.styles.ts conventions for files with exported objects (not CSS-in-JS). Example: `appStyles.root = { display: 'flex', flexDirection: 'column' }`
- Always use one component per file, even for small components. Example: `WeatherCard.tsx` should export only the `WeatherCard` component, not multiple components.
- Always prefer default exports for components, not named exports. Example: `export default WeatherCard` instead of `export const WeatherCard = () => { ... }`
- Use function declaration instead of arrow functions for components. Example: `function WeatherCard() { ... }` instead of `const WeatherCard = () => { ... }`
- Example component structure:
- Always put sx style objects in a separate file with .styles.ts extension. Example: `WeatherCard.styles.ts` should export an object with styles, not the component itself.

```
src/components/WeatherCard/
├── index.ts          # barrel export
├── WeatherCard.tsx
├── WeatherCard.styles.ts
└── WeatherCard.test.tsx
```

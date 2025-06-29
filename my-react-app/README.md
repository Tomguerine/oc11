# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Using the sample data

A JSON file containing demo housing listings is available at `src/data/annonces.json`.
Import it directly inside your components to render the list of logements:

```javascript
import annonces from './data/annonces.json'

function Listings() {
  return (
    <ul>
      {annonces.map((annonce) => (
        <li key={annonce.id}>{annonce.title}</li>
      ))}
    </ul>
  )
}
```

The file exports a simple array of objects describing each listing (id, title, location, pictures, etc.).
Replace it with real API data once the backend is ready.

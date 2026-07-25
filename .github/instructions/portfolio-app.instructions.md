---
description: "Use when working anywhere in this React portfolio app. Preserves the existing Vite, Tailwind, GSAP, and react-three-fiber implementation style."
applyTo: "**"
---
# Portfolio App Conventions

- Keep changes focused and local. Prefer updating the existing section or component over adding a parallel implementation.
- Preserve the current visual language: bold portfolio typography, layered layout, Tailwind utility classes, and GSAP or Three.js driven motion where it already exists.
- Reuse the current component structure under `src/components/` and wire new sections through `src/App.jsx` in the established order.
- Avoid broad refactors, dependency changes, or styling rewrites unless they are required for the requested task.
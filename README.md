# Resume Portfolio

A modern personal resume and portfolio website built with React and Vite.

## Overview

This project showcases an interactive and responsive personal portfolio website, including:

- Hero section with introduction
- Education timeline
- Skills and projects highlights
- Experience and achievements
- Contact form with client-side submission handling

## Tech Stack

- React 19
- Vite
- Framer Motion for smooth animations
- React Icons for UI icons
- CSS modules for scoped component styling

## Folder Structure

- `src/` - React application source code
- `components/` - reusable app sections like Hero, About, Education, Experience, Projects, Contact
- `assets/` - static assets used by the site
- `public/` - public files served directly by Vite
- `dist/` - production build output

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview the production build locally:
   ```bash
   npm run preview
   ```

## Deployment

This app can be deployed as a static site.

### Render

If you deploy on Render, use the following settings:

- **Environment**: Static Site
- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `dist`
- **Root Directory**: `/`

A `render.yaml` file is included for automatic Render setup.

## Notes

- The contact form opens an email draft using `mailto:` in the visitor's email client.
- For automatic email delivery, add a backend or email service.

## License

This project is free to use and customize.

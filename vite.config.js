import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

const racine = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    base: './',
    plugins: [tailwindcss()],
    build: {
        rolldownOptions: {
            input: {
                accueil: resolve(racine, 'index.html'),
                projets: resolve(racine, 'projet.html'),
                contact: resolve(racine, 'contact.html'),
                veille: resolve(racine, 'veille.html'),
            },
        },
    },
});

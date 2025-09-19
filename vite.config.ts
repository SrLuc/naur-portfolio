import tailwindcss from '@tailwindcss/vite'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'

export default defineConfig({
    plugins: [
        vue({
            include: [/\.vue$/, /\.md$/], // permite importar .md como componente Vue
        }),
        tailwindcss(), // integra Tailwind CSS
        Markdown(), // transforma Markdown em componente Vue
    ],
})

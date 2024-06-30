import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    base: '/',
    preview: {
        port: 3000,
        strictPort: true,
    },
    server: {
        port: 3000,
        strictPort: true,
        host: true,
        origin: 'http://0.0.0.0:3000',
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@app': path.resolve(__dirname, './src/app'),
            '@assets': path.resolve(__dirname, './src/assets'),
            '@components': path.resolve(__dirname, './src/components'),
            '@config': path.resolve(__dirname, './src/config'),
            '@providers': path.resolve(__dirname, './src/providers'),
            '@routes': path.resolve(__dirname, './src/routes'),
            '@utils': path.resolve(__dirname, './src/utils'),
        },
    },
    plugins: [react()],
});

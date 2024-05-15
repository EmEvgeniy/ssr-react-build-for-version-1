import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
	plugins: [react()],
	build: {
		// Оптимизации для сборки
		target: "esnext", // Установка цели сборки ESNext для лучшей оптимизации
		minify: "terser", // Минификация JavaScript с помощью Terser
		cssCodeSplit: true, // Разделение CSS кода для более эффективной загрузки стилей
		assetsInlineLimit: 4096, // Ограничение в байтах для встраивания ресурсов напрямую в код
		sourcemap: false, // Отключение генерации sourcemaps для лучшей производительности
		cssMinify: true,
		ssrManifest: true,
		polyfill: true,

		optimizeDeps: {
			includes: ["./src/**/*.jsx"],
		},
	},
});

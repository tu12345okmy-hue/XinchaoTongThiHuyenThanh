import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // Đảm bảo đường dẫn tương đối, tránh lỗi màn hình trắng khi deploy (đặc biệt là GitHub Pages / Vercel)
  plugins: [react()],
  server: {
    port: 3000,
    host: true
  }
})

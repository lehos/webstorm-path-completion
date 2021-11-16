import path from 'path'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

const SOURCE_PATH = path.resolve(__dirname, 'src')

export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      '@': SOURCE_PATH,
    },
  },
})

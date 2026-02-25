import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'
import type { PluginOption } from 'vite'

export const plugins: PluginOption[] = [
  react(),
  svgr({
    svgrOptions: {
      exportType: 'default',
      ref: true,
      svgo: false,
      titleProp: true,
    },
    include: '**/*.svg',
  }),
]
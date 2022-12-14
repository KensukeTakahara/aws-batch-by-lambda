import {defineConfig} from 'vite'
import {VitePluginNode} from 'vite-plugin-node' 

export default defineConfig({
  plugins: [
    ...VitePluginNode({
      appPath:'./src/index.ts',
      exportName: 'lambda'
    })
  ]
})
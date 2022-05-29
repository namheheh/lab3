// vite.config.js
const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        main2: resolve(__dirname, 'index2.html'),
        main3: resolve(__dirname, 'index3.html'),

      }
    }
  }
})
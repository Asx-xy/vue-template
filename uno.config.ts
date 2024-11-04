// uno.config.ts
import { defineConfig } from 'unocss'
import { presetUno } from 'unocss'
import { presetMini } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  presets: [presetUno(), presetMini(), presetRemToPx({ baseFontSize: 4 })]
})

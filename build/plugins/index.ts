import type { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { setupUnoCSS } from './unocss';
import { setupHtmlPlugin } from './html';
import { setupUnplugin } from './unplugin';

export function setupVitePlugins(viteEnv: Env.ImportMeta, buildTime: string) {
  const plugins: PluginOption[] = [
    vue(),
    vueJsx(),
    setupUnoCSS(viteEnv),
    ...setupUnplugin(viteEnv),
    setupHtmlPlugin(buildTime)
  ];

  return plugins;
}

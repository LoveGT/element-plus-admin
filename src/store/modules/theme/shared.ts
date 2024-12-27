import { overrideThemeSettings, themeSettings } from '@/theme/settings';
export function initThemeSettings() {
  const isProd = import.meta.env.PROD;
  if (!isProd) return themeSettings;
  return themeSettings;
}

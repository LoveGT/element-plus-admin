import { computed, ref, toRefs } from 'vue';
import type { Ref } from 'vue';
import { defineStore } from 'pinia';
import { SetupStoreId } from '@/enum';
import { initThemeSettings } from './shared';

export const useThemeStore = defineStore(SetupStoreId.Theme, () => {
  // c初始化主题设置
  const settings: Ref<App.Theme.ThemeSetting> = ref(initThemeSettings());

  const themeColors = computed(() => {
    const { themeColor, otherColor, isInfoFollowPrimary } = settings.value;
    const colors: App.Theme.ThemeColor = {
      primary: themeColor,
      ...otherColor,
      info: isInfoFollowPrimary ? themeColor : otherColor.info
    };
    return colors;
  });
  return {
    ...toRefs(settings.value),
    themeColors
  };
});

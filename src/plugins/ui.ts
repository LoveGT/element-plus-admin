import type { App } from 'vue';
import ElementPlus, { ElCard, ElTable } from 'element-plus';

// 全局设置tabble column align模式
ElTable.TableColumn.props.align = {
  type: String,
  default: 'center'
};

// 全局设置ELCard的box-shadow
ElCard.props.shadow = {
  type: String,
  default: 'never'
};

// 全局注册element-plus组件
export const setupUI = (app: App) => {
  app.use(ElementPlus);
};

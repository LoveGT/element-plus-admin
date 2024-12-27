<script setup lang="ts"></script>

<template>
  <div class="clip-box">
    <div class="circle-box"></div>
    <div class="svg-box">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        class="iconify iconify--tabler size-8"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M18 14a4 4 0 1 1-3.995 4.2L14 18l.005-.2A4 4 0 0 1 18 14M16.707 2.293a1 1 0 0 1 .083 1.32l-.083.094L15.414 5H19a3 3 0 0 1 2.995 2.824L22 8v3a1 1 0 0 1-1.993.117L20 11V8a1 1 0 0 0-.883-.993L19 7h-3.585l1.292 1.293a1 1 0 0 1-1.32 1.497l-.094-.083l-3-3a.98.98 0 0 1-.28-.872l.036-.146l.04-.104q.087-.191.245-.334l2.959-2.958a1 1 0 0 1 1.414 0M3 12a1 1 0 0 1 .993.883L4 13v3a1 1 0 0 0 .883.993L5 17h3.585l-1.292-1.293a1 1 0 0 1-.083-1.32l.083-.094a1 1 0 0 1 1.32-.083l.094.083l3 3a.98.98 0 0 1 .28.872l-.036.146l-.04.104a1 1 0 0 1-.245.334l-2.959 2.958a1 1 0 0 1-1.497-1.32l.083-.094L8.584 19H5a3 3 0 0 1-2.995-2.824L2 16v-3a1 1 0 0 1 1-1M6 2a4 4 0 1 1-3.995 4.2L2 6l.005-.2A4 4 0 0 1 6 2"
        ></path>
      </svg>
    </div>
    <div class="content">
      <h5>帮助中心</h5>
      <p>查阅使用教程和常见问题</p>
    </div>
    <canvas ref="canvasRef" width="300" height="300"></canvas>
  </div>
</template>

<style scoped lang="scss">
.clip-box {
  border: 1px solid #ccc;
  border-radius: 10px;
  height: 208px;
  width: 138px;
  padding: 24px;
  position: relative;
  z-index: 20;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.25s;
  overflow: hidden;

  &:hover {
    .circle-box {
      z-index: -1;
      width: 100%;
      height: 100%;
      border-radius: 0;
      left: 0;
      top: 0;
    }

    .svg-box {
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 0.25s;
      background-color: transparent;
      transform: scale(1.8);
    }
  }

  /* 遮罩层 */
  .circle-box {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #e4d4f4;
    position: absolute;
    top: 32px;
    left: 32px;
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    transition: all 0.2s ease-in-out;
    z-index: -10;
  }

  /* 图标盒子 */
  .svg-box {
    width: 56px;
    height: 56px;
    z-index: 1;
    /* background-color: purple; */
    color: #481878;
    transition: all 0.15s ease-in-out;
    background-color: #e4d4f4;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;

    svg {
      width: 32px;
      height: 32px;
      z-index: 1;
    }
  }
}
</style>

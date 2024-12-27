<script setup lang="ts">
import { onMounted } from 'vue';
defineOptions({
  name: 'CanvasPhotoBox'
});
const renderPhotoBox = async () => {
  // 等待图片加载完成
  await Promise.all(
    Array.from(document.images).map(image => new Promise(resolve => image.addEventListener('load', resolve)))
  );

  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

  // 绘制切片
  const source = document.getElementById('source') as HTMLImageElement;
  ctx.drawImage(source, 33, 71, 104, 124, 21, 20, 87, 104);
  // 绘制相框
  ctx.drawImage(document.getElementById('frame') as HTMLImageElement, 0, 0);
  console.log(canvas, '图片加载完成');
};
onMounted(() => {
  renderPhotoBox();
});
</script>

<template>
  <div class="canvas-photo-box">
    <canvas id="canvas" width="150" height="150"></canvas>
    <div style="display: none">
      <img id="source" src="https://mdn.github.io/shared-assets/images/examples/rhino.jpg" width="300" height="227" />
      <img id="frame" src="@/assets/images/canvas_picture_frame.png" width="132" height="150" />
    </div>
  </div>
</template>

<style scoped>
.canvas-photo-box {
  border: 1px solid #eee;
  width: 450px;
  height: 150px;
  padding: 20px;
}
</style>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import sunImg from '@/assets/images/sun.png';
import earthImg from '@/assets/images/earth.png';
import moonImg from '@/assets/images/moon.png';

const canvasRef = ref<HTMLCanvasElement | null>(null);

// 图片实例
const sun = new Image();
const earth = new Image();
const moon = new Image();

// 确保图片加载完成后再启动动画
const init = () => {
  sun.src = sunImg;
  earth.src = earthImg;
  moon.src = moonImg;

  // 确保图片加载完毕再开始动画
  let imagesLoaded = 0;
  const totalImages = 3;

  const checkImagesLoaded = () => {
    imagesLoaded++;
    if (imagesLoaded === totalImages) {
      window.requestAnimationFrame(renderAnimation);
    }
  };

  sun.onload = checkImagesLoaded;
  earth.onload = checkImagesLoaded;
  moon.onload = checkImagesLoaded;
};

// 渲染动画
const renderAnimation = () => {
  const ctx = canvasRef.value?.getContext('2d');
  if (!ctx) return;

  ctx.globalCompositeOperation = 'destination-over';
  // 清除画布
  ctx.clearRect(0, 0, 300, 300);

  ctx.fillStyle = 'rgb(0 0 0 / 40%)';
  ctx.strokeStyle = 'rgb(0 153 255 / 40%)';

  ctx.save();
  ctx.translate(150, 150); // 将坐标系移到画布中心

  // 获取当前时间
  const time = new Date();
  const seconds = time.getSeconds() + time.getMilliseconds() / 1000;

  // 地球旋转
  ctx.rotate(((2 * Math.PI) / 60) * seconds);
  ctx.translate(105, 0);
  ctx.fillRect(0, -12, 40, 24); // 地球阴影
  ctx.drawImage(earth, -12, -12); // 绘制地球

  // 月亮旋转
  ctx.save();
  ctx.rotate(((2 * Math.PI) / 6) * seconds);
  ctx.translate(0, 28.5);
  ctx.drawImage(moon, -3.5, -3.5); // 绘制月亮
  ctx.restore();

  ctx.restore();

  // 绘制地球轨道
  ctx.beginPath();
  ctx.arc(150, 150, 105, 0, Math.PI * 2, false);
  ctx.stroke();

  // 绘制太阳
  ctx.drawImage(sun, 0, 0, 300, 300); // 太阳

  // 请求下一帧
  window.requestAnimationFrame(renderAnimation);
};

onMounted(() => {
  init();
});
</script>

<template>
  <div>
    <canvas ref="canvasRef" width="300" height="300"></canvas>
  </div>
</template>

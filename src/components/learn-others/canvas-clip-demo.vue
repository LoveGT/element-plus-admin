<script setup lang="ts">
import { onMounted, ref } from 'vue';
const canvasRef = ref<HTMLCanvasElement | null>(null);

const renderClip = () => {
  const ctx = canvasRef.value?.getContext('2d');
  if (ctx) {
    ctx.fillRect(0, 0, 150, 150);
    ctx.translate(75, 75);
    // Create a circular clipping path
    ctx.beginPath();
    ctx.arc(0, 0, 60, 0, Math.PI * 2, true);
    ctx.clip();
    // draw background
    const lingrad = ctx.createLinearGradient(0, -75, 0, 75);
    lingrad.addColorStop(0, '#232256');
    lingrad.addColorStop(1, '#143778');

    ctx.fillStyle = lingrad;
    ctx.fillRect(-75, -75, 150, 150);

    // draw star
    for (let j = 1; j < 15; j++) {
      ctx.save();
      ctx.fillStyle = 'red';
      ctx.translate(75 - Math.floor(Math.random() * 150), 75 - Math.floor(Math.random() * 150));
      drawStar(ctx, Math.floor(Math.random() * 14) + 2);
      ctx.restore();
    }
  }
};
// 绘制星星
function drawStar(ctx: CanvasRenderingContext2D, r: number) {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(r, 0);
  for (let i = 0; i < 9; i++) {
    ctx.rotate(Math.PI / 5); // 旋转角度
    if (i % 2 == 0) {
      ctx.lineTo((r / 0.525731) * 0.200811, 0);
    } else {
      ctx.lineTo(r, 0);
    }
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}
onMounted(() => {
  renderClip();
});
</script>

<template>
  <div class="clip-box">
    <canvas ref="canvasRef" width="300" height="300"></canvas>
  </div>
</template>

<style scoped lang="scss"></style>

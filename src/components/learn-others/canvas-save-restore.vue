<script setup lang="ts">
import { onMounted, ref } from 'vue';

const canvasRef = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
  const canvas = canvasRef.value;
  const ctx = canvas?.getContext('2d') as CanvasRenderingContext2D;

  ctx.fillRect(0, 0, 150, 150);
  ctx.save(); // 保存默认状态

  ctx.fillStyle = '#09F'; // 在原有配置基础上对颜色做改变
  ctx.fillRect(15, 15, 120, 120); // 使用新的设置绘制一个矩形

  ctx.save(); // 保存当前状态
  ctx.fillStyle = '#FFF'; // 再次改变颜色配置
  ctx.globalAlpha = 1;
  ctx.fillRect(30, 30, 90, 90); // 使用新的配置绘制一个矩形

  ctx.restore(); // 重新加载之前的颜色状态
  ctx.fillRect(45, 45, 60, 60); // 使用上一次的配置绘制一个矩形

  ctx.restore(); // 加载默认颜色配置
  ctx.fillRect(60, 60, 30, 30); // 使用默认配置绘制一个矩形
});
</script>

<template>
  <div>
    <canvas id="canvas" ref="canvasRef"></canvas>
  </div>
</template>

<style scoped></style>

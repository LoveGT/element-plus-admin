<script setup lang="ts">
import { onMounted, ref } from 'vue';

const canvasRef = ref<HTMLCanvasElement | null>(null);
// canvas渲染一个矩形
const renderRect = () => {
  const canvas = canvasRef.value;
  if (canvas) {
    const ctx = canvas.getContext('2d');
    ctx!.fillStyle = 'red';
    ctx?.fillRect(10, 10, 100, 100);
    ctx?.clearRect(45, 45, 60, 60);
    ctx?.strokeRect(5, 5, 110, 110);
  }
};
// canvas渲染一个三角形
const renderTriangle = () => {
  const canvas = canvasRef.value;
  if (canvas) {
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle = 'deepskyblue'; // 你可以根据需要修改颜色
    ctx.moveTo(135, 50);
    ctx.lineTo(165, 75);
    ctx.lineTo(165, 25);
  }
};
// canvas渲染一个笑脸
const renderSmallFace = () => {
  const canvas = canvasRef.value;
  if (canvas) {
    const ctx = canvas.getContext('2d');
    if (ctx) {
      // 绘制脸型
      ctx.beginPath();
      ctx.arc(180, 135, 50, 0, Math.PI * 2, true);
      // ctx.moveTo(120, 135);
      ctx.strokeStyle = 'yellow'; // 设置轮廓的颜色
      ctx.stroke();
      // 绘制嘴巴
      ctx.beginPath();
      ctx.arc(180, 135, 35, 0, Math.PI * 1, false);
      ctx.strokeStyle = 'red'; // 设置嘴巴轮廓的颜色
      // ctx.lineWidth = 3; // 设置轮廓的宽度
      ctx.stroke();
      // 绘制左眼睛
      ctx.beginPath();
      ctx.fillStyle = 'green';
      ctx.arc(160, 125, 5, 0, Math.PI * 2, true);
      ctx.fill();
      // 绘制右眼睛
      ctx.beginPath();
      ctx.arc(200, 125, 5, 0, Math.PI * 2, true);
      ctx.fill();
    }
  }
};
// 三次贝塞尔曲线实现一个爱心
const renderHotHeart = () => {
  const canvas = canvasRef.value;
  if (canvas?.getContext) {
    const ctx = canvas.getContext('2d');
    if (ctx) {
      // 三次贝塞尔曲线
      ctx.beginPath();
      ctx.moveTo(75, 40);
      ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
      ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
      ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
      ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
      ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
      ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
      ctx.fillStyle = '#e62135';
      ctx.fill();
    }
  }
};
// canvas贝塞尔曲线
const renderBSRCurve = () => {
  const canvas = canvasRef.value;
  if (canvas) {
    const ctx = canvas.getContext('2d');
    if (ctx) {
      // 二次贝塞尔曲线
      ctx.beginPath();
      ctx.moveTo(75, 25);
      ctx.quadraticCurveTo(25, 25, 25, 62.5);
      ctx.quadraticCurveTo(25, 100, 50, 100);
      ctx.quadraticCurveTo(50, 120, 30, 125);
      ctx.quadraticCurveTo(60, 120, 65, 100);
      ctx.quadraticCurveTo(125, 100, 125, 62.5);
      ctx.quadraticCurveTo(125, 25, 75, 25);
      ctx.strokeStyle = 'red';
      ctx.stroke();
    }
  }
};

const renderDemo = () => {
  const canvas = canvasRef.value;
  if (canvas) {
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.beginPath();
      ctx.moveTo(300, 300);
      ctx.lineTo(300, 100);
      ctx.lineTo(100, 300);
      ctx.lineTo(300, 300);
      ctx.strokeStyle = 'red';
      ctx.stroke();
      ctx.fillStyle = 'deeppink';
      ctx.fill();
    }
  }
};
const renderTextCanvas = () => {
  const canvas = canvasRef.value;
  if (canvas) {
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.font = '48px serif';
      ctx.textBaseline = 'top';
      ctx.fillStyle = 'blue';
      ctx.strokeText('Hello world', 0, 100);
    }
  }
};
// canvas图片
const renderImageCanvas = async () => {
  const canvas = canvasRef.value;
  console.log(document.images, 'document.images');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    if (ctx) {
      await Promise.all(
        Array.from(document.images).map(image => new Promise(resolve => image.addEventListener('load', resolve)))
      );

      // 绘制切片
      ctx.drawImage(document.getElementById('source') as HTMLImageElement, 33, 71, 104, 124, 21, 20, 87, 104);
      // 绘制相框
      const frameElement = document.getElementById('frame') as HTMLImageElement;
      ctx.drawImage(frameElement, 0, 0);
    }
  }
};
onMounted(() => {
  // renderRect();
  // renderTriangle();
  // renderSmallFace();
  // renderHotHeart();
  // renderDemo();
  // renderBSRCurve();
  // renderTextCanvas()
  // renderImageCanvas()
  renderImageCanvas();
});
</script>

<template>
  <div class="canvas-demo w-600 h-600 bg-gray-200 flex justify-center items-center border border-solid">
    <canvas ref="canvasRef" style="border: 1px solid #eee" width="400" height="400" />
    <div style="display: none">
      <img
        id="source"
        width="300"
        height="277"
        src="https://mdn.github.io/shared-assets/images/examples/rhino.jpg"
        alt=""
      />
      <img id="frame" width="132" height="150" />
    </div>
  </div>
</template>

<style scoped>
.canvas-demo {
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

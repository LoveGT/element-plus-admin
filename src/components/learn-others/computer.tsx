import { defineComponent, ref } from 'vue';

const Computer = defineComponent({
  setup() {
    const counter = ref(0);

    return () => (
      <div>
        <h1>{counter.value}</h1>
        <button onClick={() => counter.value++}>add</button>
        <button onClick={() => counter.value--}>sub</button>
      </div>
    );
  }
});

export default Computer;

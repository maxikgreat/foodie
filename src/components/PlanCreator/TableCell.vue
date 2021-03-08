<template>
  <td
    :style="{background: backgroundColor}"
    @mouseenter="changeColor(false)"
    @mousedown="changeColor(true)"
  >&nbsp;</td>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'TableCell',
  props: {
    activeColor: {
      type: String,
      required: true,
    },
    isMouseDown: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    const backgroundColor = ref('#fff');

    const changeColor = (exact = false) => {
      if (props.isMouseDown || exact) {
        backgroundColor.value = props.activeColor;
      }
    };

    return { backgroundColor, changeColor };
  },
});
</script>

<style scoped>
  tbody td {
    width: 25px;
    height: 25px;
    border: 1px solid black;
  }
</style>

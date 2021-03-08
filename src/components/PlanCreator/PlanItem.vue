<template>
  <div class="flex items-center" @click="$emit('set-active-color', color)">
    <div
      class="w-10 h-10 bg-gray-500 rounded-full mr-2"
      :style="{backgroundColor: color}"
    ></div>
    <span>{{name}}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from 'vue';

export default defineComponent({
  name: 'PlanItem',
  emits: ['set-active-color'],
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    return {
      color: props.item.color,
      name: props.item.name,
    };
  },
});
</script>

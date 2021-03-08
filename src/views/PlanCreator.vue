<template>
  <section class="flex">
    <table @mouseleave="isMouseDown = false" class="flex-2">
      <tbody
        @mousedown="isMouseDown = true"
        @mouseup="isMouseDown = false"
      >
        <tr v-for="(row, index) in rows" :key="index">
          <TableCell
            v-for="(column, index) in columns"
            :key="index"
            :activeColor="activeColor"
            :isMouseDown="isMouseDown"
          />
        </tr>
      </tbody>
    </table>
    <div class="flex-1 px-5 w-full">
      <ul>
        <li
          v-for="item in planItems"
          :key="item.name"
          class="border-2 border-blue-400 rounded-lg p-2 mb-3"
        >
          <PlanItem
            @set-active-color="setActiveColor"
            :item="item"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import TableCell from '@/components/PlanCreator/TableCell.vue';
import PlanItem from '@/components/PlanCreator/PlanItem.vue';

export default defineComponent({
  name: 'PlanCreator',
  components: { TableCell, PlanItem },
  setup() {
    const rows = 20;
    const columns = 20;

    const planItems = [
      { name: 'Wall', color: '#472828' },
      { name: 'Table', color: '#3e6e21' },
      { name: 'Window', color: '#35798d' },
    ];

    const activeColor = ref('#c0c0c0');
    const isMouseDown = ref(false);

    const setActiveColor = (color: string) => {
      activeColor.value = color;
    };

    return {
      rows,
      columns,
      planItems,
      activeColor,
      setActiveColor,
      isMouseDown,
    };
  },
});
</script>

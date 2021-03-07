<template>
  <section class="table-wrapper">
    <table @mouseleave="isMouseDown = false">
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
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import TableCell from '@/components/PlanCreator/TableCell.vue';

export default defineComponent({
  name: 'PlanCreator',
  components: { TableCell },
  setup() {
    const rows = 20;
    const columns = 20;

    const activeColor = ref('#c0c0c0');
    const isMouseDown = ref(false);

    return {
      rows,
      columns,
      activeColor,
      isMouseDown,
    };
  },
});
</script>

<style scoped>
  .table-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

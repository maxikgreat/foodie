<template>
  <Header />
  <main class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen">
    <Sidebar />
    <div class="p-6 bg-gray-100 mb-20">
      <Breadcrumbs />
      <slot></slot>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Breadcrumbs from '@/components/common/Breadcrumbs.vue';
import Sidebar from '@/components/common/Sidebar.vue';
import Header from '@/components/common/Header.vue';

export default defineComponent({
  name: 'Layout',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Breadcrumbs, Sidebar, Header,
  },
});
</script>

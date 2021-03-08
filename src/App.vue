<template>
  <Layout>
    <router-view></router-view>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Layout from '@/components/common/Layout.vue';

export default defineComponent({
  name: 'App',
  components: { Layout },
});
</script>
<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

table, tbody, td, th {
  user-select: none;
}
</style>

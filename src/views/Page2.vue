<template>
    <section class="section">
    <div class="container">
      <h1 class="title">Section 1 - API Data</h1>
      <h2 class="subtitle">
        Todo data retrieved from API.</h2>
        <ApiData/>
    </div>
    <div class="container">
      <h1 class="title">Section 2</h1>
      <h2 class="subtitle">
        Another simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
      </h2>
    </div>
  </section>
</template>


<script>

import ApiData from '@/components/ApiData.vue'

export default {
  name: 'page2',
  components: {
    ApiData
  }
}
</script>
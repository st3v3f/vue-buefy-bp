<template>
  <div>
    <pre>{{ movies }}</pre>
    <pre>{{ genres }}</pre>
  </div>
</template>

<script>
import { mapState } from 'vuex';

// See https://codeburst.io/vuex-getters-are-great-but-dont-overuse-them-9c946689b414
export default {
  name: 'api-data',
  computed: {
    ...mapState(['movies', 'genres'])
  },

  mounted () {
  }
}
</script>
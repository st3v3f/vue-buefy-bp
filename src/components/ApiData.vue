<template>
  <div>
    <h2>Todo Data from API</h2>

    <div class="container">
        <table class="table is-striped is-bordered is-narrow is-hoverable">
        <thead>
            <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="todo in todos" :key="todo.id">
            <td>{{ todo.id }}</td>
            <td>{{ todo.title }}</td>
            <td>{{ todo.completed }}</td>
            </tr>
        </tbody>
        </table>
    </div>

    <pre>{{ todos }}</pre>
  </div>
</template>

<script>
import { mapState } from 'vuex';

// See https://codeburst.io/vuex-getters-are-great-but-dont-overuse-them-9c946689b414
export default {
  name: 'api-data',
  computed: {
    ...mapState(['todos'])
  },

  mounted () {
    this.$store.dispatch('loadTodos');
  }
}
</script>
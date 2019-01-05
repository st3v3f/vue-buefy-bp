<template>
  <section>
  <div class="columns">
    <div class="column">
      First column
      <img alt="Vue logo" src="../assets/logo.png">
    </div>
    <div class="column">
      Second column
      <HelloTest/>
    </div>
    <div class="column">
      Third column
      <DatePicker/>
    </div>
    <div class="column">
      Fourth column
    </div>
  </div>
  </section>

</template>


 <script>
  import DatePicker from '../components/DatePicker.vue'
  import HelloTest from '../components/HelloTest.vue'
 
 export default {
   name: 'page1',
   components: {
   HelloTest,
   DatePicker
   }
 }
 </script>
 

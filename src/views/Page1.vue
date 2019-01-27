<template>
<div>
  <section>
    <Carousel/>
  </section>
  <section>
    <SimpleTable/>
  </section>
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
      <StoreData/>
    </div>
  </div>


  </section>

  </div>
</template>


 <script>
  import DatePicker from '../components/DatePicker.vue'
  import HelloTest from '../components/HelloTest.vue'
  import StoreData from '@/components/StoreData.vue'
  import SimpleTable from '@/components/SimpleTable.vue'
  import Carousel from '@/components/Carousel.vue'

 export default {
   name: 'page1',
   components: {
   HelloTest,
   DatePicker,
   StoreData,
   SimpleTable,
   Carousel
   }
 }
 </script>
 

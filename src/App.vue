<template>
  <div id="app">

  <Navbar/>

<section>
  <div class="columns">
    <div class="column">
      First column
      <img alt="Vue logo" src="./assets/logo.png">
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

  <Page1/>
  
  <Page2/>
    
    
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import DatePicker from './components/DatePicker.vue'
import HelloTest from './components/HelloTest.vue'
import Navbar from './components/Navbar.vue'
import Page1 from './components/Page1.vue'
import Page2 from './components/Page2.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    HelloTest,
    DatePicker,
    Page1,
    Page2
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
   margin-top: 20px;
   margin-left: 200px;
   margin-right: 200px;
}
</style>

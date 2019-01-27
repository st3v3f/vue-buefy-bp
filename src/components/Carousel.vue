<template>
<div class="section">
<vue-flux
   :options="fluxOptions"
   :images="fluxImages"
   :transitions="fluxTransitions"
   ref="slider">
</vue-flux>

<button @click="$refs.slider.showImage('next')">NEXT</button>
</div>
</template>

<script>
import { VueFlux, Transitions } from 'vue-flux';
//import 'vue-flux/dist/vue-flux.css';


export default {
   components: {
      'vue-flux': VueFlux
   },

   data: () => ({
      fluxOptions: {
         autoplay: true
      },
      fluxImages: [
         'https://via.placeholder.com/150/0000FF/808080?Text=Image1',
         'https://via.placeholder.com/150/FF0000/FFFFFF?Text=Image2',
         'https://via.placeholder.com/150/FFFF00/000000?Text=Image3', 
         'https://via.placeholder.com/150/000000/FFFFFF/?text=Image4',
      ],
      fluxTransitions: {
         transitionTurn3d: Transitions.transitionTurn3d
      }
   })
}

</script>



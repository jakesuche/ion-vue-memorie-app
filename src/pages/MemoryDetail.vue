<template>
  <base-layout :Page-Title="memory ? memory.title : 'Loading... '" :DeFaultBack="'/memories'" >
    <ion-img :src="memory.image" :alt="memory.title"></ion-img>
    <h2 class="ion-text-center">{{memory.title}}</h2>
    <p class="ion-text-center">{{ memory.description }}</p>
   
    
  </base-layout>
</template>

<script>
import MemoryOverView from '../components/memories/memoryOverview'
import { IonImg } from '@ionic/vue'
// import BaseLayout from '../components/Base/BaseLayout.vue'
export default {
  components:{
    IonImg
  },
  data(){
    return{
      memory:null,
      memoryId:this.$route.params,
      
    }
  },
  created(){
    const datat = this.$store.getters.memories.find(res =>{
      return  res.id == this.$route.params.id
    })
    this.memory = datat
    
  },
  // methods:{
  //   memory(){
  //     const memories = this.$store.getters.memories
  //     console.log('state',memories)
  //     return memories.find(res =>{
  //       res.id == this.$route.params.id
  //     })
  //   }
  // },
 
 
 
  // components: { BaseLayout },

}
</script>

<style >

</style>
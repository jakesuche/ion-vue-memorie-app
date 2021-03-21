<template>
    <ion-item  :router-link="`/memories/${memory.id}`" :alt="memory.title">
      <ion-thumbnail slot="start">
      <ion-img :src="memory.image"></ion-img>
      </ion-thumbnail >
      <ion-label>

        {{memory.title}}
        </ion-label>
      </ion-item>
      <ion-img></ion-img>
</template>

<script>
import {  IonItem,IonImg, IonThumbnail, IonLabel } from "@ionic/vue";

export default {
    props:["memory"],
    components:{
         IonItem,IonImg, IonThumbnail, IonLabel
    },
//      computed:{
//     memories(){
//       return this.$store.getters.memories
//     }
//   }
}
</script>

<style>

</style>
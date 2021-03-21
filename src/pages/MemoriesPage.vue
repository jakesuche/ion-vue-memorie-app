<template>
  <base-layout Page-Title="All memories">
      <!-- <memories-list :memories ="memories"></memories-list> -->
      <template  v-slot:actions-end>
        <ion-button router-link="/memories/add">
          <i class="fas fa-plus"></i>
          <!-- <ion-icon slot="icon-only" :icon="funnel" name="add">

          </ion-icon> -->
        </ion-button>

      </template>
      <MemoriesList :memories="memories" />
  </base-layout>
</template>

<script>
import MemoriesList from "../components/memories/memoriesList"
import { IonButton, IonIcon } from '@ionic/vue';

//import { notificationsOutline, funnelOutline, searchOutline } from "ionicons/icons";


// import { IonList, IonItem,IonImg, IonThumbnail, IonLabel } from "@ionic/vue";
export default {
  
  components: {
    
    MemoriesList,
    IonButton, 

  },

  computed:{
    memories(){
      return this.$store.getters.memories
    }
  }
};
</script>

<style></style>

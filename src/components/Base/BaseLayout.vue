<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button :default-href="DeFaultBack"></ion-back-button>
        </ion-buttons>
         <ion-buttons slot="end" >
           <slot name="actions-end"></slot>
         </ion-buttons>
        <ion-title>
          {{ PageTitle }}
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <slot />
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonTitle,
  IonHeader,
  IonToolbar,
  IonContent,
  IonBackButton,

  IonButtons
} from "@ionic/vue";
export default {
  props: ["PageTitle","DeFaultBack"],
created(){
    console.log(this.PageTitle)
},
  components: {
      IonBackButton,
    IonPage,
    IonTitle,
    IonHeader,
    IonToolbar,
    IonContent,
     IonButtons
  },
};
</script>

<style></style>

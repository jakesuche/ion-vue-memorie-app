
<template>
 <ion-page>
        <ion-header>
      <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button :default-href="DeFaultBack"></ion-back-button>
        </ion-buttons>
        <ion-title>
            Company
        </ion-title>
         <ion-buttons slot="end" >
           <slot name="actions-end"></slot>
         </ion-buttons>
        
      </ion-toolbar>
    </ion-header>
     <ion-content>
    <div class="mb-3"></div>
    <search-bar class="mb-3"></search-bar>
    <div class="body-menu">
      <ion-list>
       
        <ion-item>
          <ion-label
            ><span class="label-header-big">Food</span> <br /><span
              class="label-header-small"
              >120 items</span
            ></ion-label
          >
        </ion-item>
     
       
        <ion-item>
          <ion-label
            ><span class="label-header-big">Beverages</span> <br /><span
              class="label-header-small"
              >111 items</span
            ></ion-label
          >
        </ion-item>
      
        <ion-item>
          <ion-label
            ><span class="label-header-big">Desserts</span> <br /><span
              class="label-header-small"
              >330 items</span
            ></ion-label
          >
        </ion-item>
       

       
        <ion-item class="mb-3">
          <ion-label
            ><span class="label-header-big">Promotions</span> <br /><span
              class="label-header-small"
              >29</span
            ></ion-label
          >
        </ion-item>
       
      </ion-list>
    </div>
     <ion-content>
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
import { cartSharp } from "ionicons/icons";
import DessetModal from "./Modals/Deserts.vue";
import { modalController } from "@ionic/vue";
import EventBus from "@/EventBus";



export default {
  components: {
    DessetModal,
     IonPage,
  IonTitle,
  IonHeader,
  IonToolbar,
  IonContent,
  IonBackButton,
  IonButtons
  },
  data() {
    return {
      cartSharp,
    };
  },
  mounted() {
    EventBus().emitter.on("text-EventBus", (data) => {
      this.closeModal();
      console.log("text-event", data);
    });
    //   const listEvent = new window.on()
  },
  methods: {
    async closeModal() {
      const modal = await modalController;
      return modal.dismiss();
    },
    async openModal(data) {
      const modal = await modalController.create({
        component: DessetModal,
        componentProps: {
          pageTitle: data,
        },
      });
      return modal.present();
    },
  },
};
</script>

<style scoped>
.body-menu {
  background: url("~@/theme/picture2/Sidebarorange.png");

  background-repeat: no-repeat;
  background-repeat: no-repeat;
  background-size: 120px 570px;
}
ion-item {
  margin-top: 30px;

  width: 80%;
  margin-left: 50px;
  box-shadow: -1px 2px 8px 5px rgb(0 0 0 / 13%);

  border-radius: 73px 11px 11px 73px / 71px 11px 11px 71px;
}
ion-list {
  background: none;
}
ion-label {
  height: 80px;
  margin-left: 70px;
  padding-top: 15px;
}
.menu-img {
  max-width: 100%;
  border: 0;
  width: 100px;
  position: absolute;
  z-index: 100;
  margin-top: 33px;
  margin-left: 20px;
  height: 100px;
}
.label-header-big {
  font-size: 20px;
  font-weight: bolder;
}
.label-header-small {
  font-size: 10px;
  opacity: 0.7;
}
.base-layout {
  height: 100vh;
  overflow: hidden;
}
img.img-arrow {
  position: absolute;
  margin-top: -80px;
  z-index: 100;
  margin-left: 350px;
}
</style>







 <!-- <img
          @click="openModal('promotion')"
          class="img-arrow"
          src="@/theme/picture2/Group8188.png"
        /> -->
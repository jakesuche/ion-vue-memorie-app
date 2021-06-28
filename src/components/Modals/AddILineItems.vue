<template>
  <base-layout PageTitle="Add Line Item">
    <template v-slot:ion-menu-btn>
      <ion-button @click="closeModal">
        <ion-icon :icon="arrowBack"> </ion-icon>
      </ion-button>
    </template>
    <template v-slot:actions-end1>
      <ion-button>
        <ion-title>
          DONE
        </ion-title>
      </ion-button>
    </template>

    <ion-content>
      <ion-card>
        <ion-card-content>
          <ion-item lines="none">
            <ion-label position="stacked" style="color:#0000ff85"
              >Item
            </ion-label>
            <ion-icon
              @click="ScanWithBarCode"
              class="barcode"
              :icon="barcode"
            ></ion-icon>
            <ion-input placeholder="Start typing to select a Item"></ion-input>
          </ion-item>

          <ion-item lines="none">
            <ion-label position="stacked" style="color:#0000ff85"
              >Description</ion-label
            >
            <ion-input
              placeholder="Add a description for your item"
            ></ion-input>
          </ion-item>
          <ion-item lines="none">
            <ion-label position="stacked" style="color:#0000ff85"
              >Account</ion-label
            >
            <ion-select interface="popover">
              <ion-select-option value="nes">NES</ion-select-option>
              <ion-select-option value="n64">Nintendo64</ion-select-option>
              <ion-select-option value="ps">PlayStation</ion-select-option>
              <ion-select-option value="genesis"
                >Sega Genesis</ion-select-option
              >
              <ion-select-option value="saturn">Sega Saturn</ion-select-option>
              <ion-select-option value="snes">SNES</ion-select-option>
            </ion-select>
          </ion-item>
          <ion-grid>
            <ion-row>
              <ion-col>
                <ion-item lines="none">
                  <ion-label position="stacked" style="color:#0000ff85"
                    >Quality</ion-label
                  >
                  <ion-input></ion-input>
                </ion-item>
              </ion-col>
              <ion-col>
                <ion-item lines="none">
                  <ion-label position="stacked" style="color:#0000ff85"
                    >Rate</ion-label
                  >
                  <ion-input></ion-input>
                </ion-item>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-card-content>
      </ion-card>
      <ion-card>
        <ion-card-content>
          {{barcodeResult}}
        </ion-card-content>
      </ion-card>
    </ion-content>
  </base-layout>
</template>

<script>
import { Plugins } from "@capacitor/core";

import {
  arrowBack,
  readerOutline,
  addCircleSharp,
  addCircle,
  barcode,
} from "ionicons/icons";
import EventBus from "@/EventBus";
import {
  IonPage,
  IonTitle,
  IonHeader,
  IonToolbar,
  IonContent,
  IonBackButton,
  IonButtons,
  IonLabel,
  IonIcon,
  IonItem,
  IonInput,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonCheckbox,
  modalController,
  IonDatetime,
} from "@ionic/vue";
import addContact from "@/components/Modals/addContacts.vue";
export default {
  data() {
    return {
      arrowBack,
      readerOutline,
      individual: "individual",
      business: "business",
      name: "",
      check: "",
      addCircle,
      barcode,
      form: {
        customerType: "",
        lastname: "",
        firstname: "",
        businessname: "",
        customerDisplayName: "",
        email: "",
        phone: "",
        mobile: "",
      },
      addCircleSharp,
      showAddSocial: false,
      barcodeResult:{}
    };
  },
  created() {},
  components: {
    IonBackButton,
    IonPage,
    IonTitle,
    IonHeader,
    IonToolbar,
    IonContent,
    IonButtons,
    IonLabel,
    IonIcon,
    IonItem,
    IonInput,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonGrid,
    IonRow,
    IonCol,
    IonCheckbox,
    IonDatetime,
  },

  methods: {
    async ScanWithBarCode() {
        const { BarcodeScanner } = Plugins;
        BarcodeScanner.hideBackground();
        const confirm = window.confirm('Do You Want to Scan a barcode?')
        if(confirm){
          const result = await BarcodeScanner.startScan();
          if(result.hasContent){
            this.barcodeResult = result
            console.log(result.content)
          }
        }
        
    },
    checked(e) {
      console.log(e.detail.value);
      this.form.customerType = e.detail.value;
    },
    showSocial() {
      this.showAddSocial = true;
    },
    async closeModal() {
      let modal = await modalController.dismiss();
      // EventBus().emitter.emit('closeModal',true)
    },
    async openModal() {
      let modal = await modalController.create({
        component: addContact,
      });
      return modal.present();
    },
  },
};
</script>

<style scoped>
ion-content {
  --background: #a3acb50d;
}
ion-toolbar {
  --background: #343a40;
}
ion-input {
  --padding-start: 20px;
}
.label-check {
  margin-left: 10px;
}
ion-label {
  color: rgb(24, 11, 84) !important;
  font-size: 20px !important;
}
.label[floating],
.label[stacked],
.input-has-focus .label[floating] {
  color: blue;
}
ion-input {
  border-bottom: 1px solid rgba(47, 11, 84, 0.153) !important;
}
.picker-wrapper.sc-ion-picker-md {
  border: none !important;
}
ion-button {
  height: 55px;
}
ion-col {
  margin-left: -10px;
}
ion-select {
  border-bottom: 1px solid #d4c4c4;
}
.barcode {
  position: absolute;
  top: 40px;
  right: 0;
}
</style>

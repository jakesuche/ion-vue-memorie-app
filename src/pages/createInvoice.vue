<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
            <ion-back-button default-href="/invoices"></ion-back-button>
          <!-- <ion-button @click="closeModal">
            <ion-icon :icon="arrowBack"> </ion-icon>
          </ion-button> -->
        </ion-buttons>
        <ion-title slot="start">
          New Invoices
        </ion-title>

        <ion-buttons slot="end">
          <ion-button>
            <ion-title>
              SAVE
            </ion-title>
          </ion-button>
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-button>
            <ion-icon
              style="font-size:40px"
              class="contact"
              :icon="readerOutline"
            >
            </ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card>
      

        <ion-card-content>
         

          <ion-item lines="none">
            <ion-label position="stacked" style="color:#0000ff85">Customer Name</ion-label>
            <ion-input></ion-input>
          </ion-item>

          <ion-item lines="none">
            <ion-label position="stacked" style="color:#0000ff85">Invoice Number</ion-label>
            <ion-input></ion-input>
          </ion-item>
          <ion-item lines="none">
            <ion-label position="stacked" style="color:#0000ff85">Order Number</ion-label>
            <ion-input></ion-input>
          </ion-item>
          <ion-item>
          <ion-label>Invoice Date</ion-label>
          <ion-datetime value="2021-01-19" placeholder="Select Date"></ion-datetime>
        </ion-item>
          <ion-item  lines="none">
            <ion-label position="stacked" style="color:#0000ff85">Terms </ion-label>
            <ion-input></ion-input>
          </ion-item>
          <ion-item lines="none">
            <ion-label position="stacked" style="color:#0000ff85">Due Date </ion-label>
            <ion-input></ion-input>
          </ion-item>
        </ion-card-content>
      </ion-card>

     
    </ion-content>
  </ion-page>
</template>

<script>
import { arrowBack, readerOutline, addCircleSharp } from "ionicons/icons";
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
  IonDatetime
} from "@ionic/vue";
import addContact from '@/components/Modals/addContacts.vue'
export default {
  data() {
    return {
      arrowBack,
      readerOutline,
      individual: "individual",
      business: "business",
      name: "",
      check: "",
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

  },
  
  methods: {
    checked(e) {
      console.log(e.detail.value);
      this.form.customerType = e.detail.value;
    },
    showSocial() {
      this.showAddSocial = true;
    },
    async closeModal(){
      let modal = await modalController.dismiss()
      // EventBus().emitter.emit('closeModal',true)

    },
    async openModal(){
        let modal = await modalController.create({
            component:addContact
        })
        return modal.present()
    }
  },
};
</script>

<style scoped>
ion-toolbar {
  --background: #343a40;
}
ion-input {
  --padding-start: 20px;
}
.label-check {
  margin-left: 10px;
}
ion-label{
 color: rgb(24, 11, 84)!important;
    font-size: 20px!important;
}
.label[floating],
.label[stacked],
.input-has-focus .label[floating] {
    color: blue ;
}
ion-input{
    border-bottom:1px solid rgba(47, 11, 84, 0.153)!important;
    
}
</style>

<template>
  <base-layout PageTitle="New Invoices">
    <template v-slot:ion-menu-btn>
      <ion-back-button default-href="/invoices"></ion-back-button>
    </template>
    <template v-slot:actions-end1>
      <ion-button>
        <ion-title>
          SAVE
        </ion-title>
      </ion-button>
    </template>
    <template v-slot:actions-end2>
      <ion-button>
        <ion-icon style="font-size:40px" class="contact" :icon="readerOutline">
        </ion-icon>
      </ion-button>
    </template>

    <ion-content>
      <ion-card>
        <ion-card-content>
          <ion-item lines="none">
            <ion-label position="stacked" style="color:#0000ff85"
              >Customer Name</ion-label
            >
            <ion-input placeholder="start typing to select a Customer"></ion-input>
          </ion-item>

          <ion-item lines="none">
            <ion-label position="stacked" style="color:#0000ff85"
              >Invoice Number</ion-label
            >
            <ion-input></ion-input>
          </ion-item>
          <ion-item lines="none">
            <ion-label position="stacked" style="color:#0000ff85"
              >Order Number</ion-label
            >
            <ion-input></ion-input>
          </ion-item>
          <ion-item  lines="none">
            <ion-label style="font-size: 15px !important;">Invoice Date</ion-label>
            <ion-datetime
              value="2021-01-01"
              placeholder="Select Date"
            ></ion-datetime>
          </ion-item>
          <ion-item lines="none">
            <ion-label position="stacked" style="color:#0000ff85"
              >Terms
            </ion-label>
            <ion-input></ion-input>
          </ion-item>
          <ion-item  lines="none">
            <ion-label style="font-size: 15px !important;">Due Date</ion-label>
            <ion-datetime
              value="2021-01-01"
              placeholder="Select Date"
            ></ion-datetime>
          </ion-item>
          <div class="date">
          <ion-item  lines="none">
          <ion-label style="font-size: 15px !important;">Time issued</ion-label>
          <ion-datetime display-format="h:mm A" picker-format="h:mm A" value="2021-01-01"></ion-datetime>
        </ion-item>
        </div>

          
        </ion-card-content>
      </ion-card>
      <ion-card>
        <ion-card-content>
           <ion-item lines="none">
          <ion-label style="font-size: 15px !important;">Sales Person</ion-label>
          <ion-select interface="popover">
            <ion-select-option value="uchechukwu">Uchechukwu</ion-select-option>
            <ion-select-option value="chidiebere">Chidiebere</ion-select-option>
            <ion-select-option value="tolu">Tolu</ion-select-option>
            </ion-select>
        </ion-item>
        </ion-card-content>
      </ion-card>
      <ion-card>
        <ion-card-content>
          <ion-button  @click="presentModal" shape="round"  expand="block" fill="outline"> <ion-icon :icon="addCircle"></ion-icon> Add Line Item</ion-button>
        </ion-card-content>
      </ion-card>
       <ion-card>
        <ion-card-content>
           <ion-item lines="none">
          <ion-label position="stacked" >Customer Notes</ion-label>
            <ion-input value="Thanks for your business."></ion-input>
        </ion-item>
        </ion-card-content>
      </ion-card>

    </ion-content>
  </base-layout>
</template>

<script>
import AddlineModal from "@/components/Modals/AddILineItems.vue" 
import { arrowBack, readerOutline, addCircleSharp, addCircle } from "ionicons/icons";
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
    IonDatetime,
  },

  methods: {
    async  presentModal(){
        const modal = await modalController.create({
          component:AddlineModal
        })
        modal.present()
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
ion-content{
  --background:#a3acb50d;
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
.picker-wrapper.sc-ion-picker-md{
  border:none!important
}
ion-button{
  height:55px
}
ion-select{
  border-bottom: 1px solid #d4c4c4;
}
</style>

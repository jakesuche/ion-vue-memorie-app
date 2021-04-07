<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button @click="closeModal">
            <ion-icon :icon="arrowBack"> </ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title slot="start">
          New Customer
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
        <ion-card-header>
          <ion-card-subtitle>Customer Information </ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          <ion-list>
            <ion-radio-group value="biff" @ionChange="checked($event)">
              <ion-list-header>
                <ion-label style="font-size: large;">Customer Type</ion-label>
              </ion-list-header>

              <ion-grid>
                <ion-row>
                  <ion-col>
                    <ion-item lines="none">
                      <ion-label>Business</ion-label>
                      <ion-radio
                        v-model="check"
                        slot="start"
                        value="businness"
                      ></ion-radio>
                    </ion-item>
                  </ion-col>
                  <ion-col>
                    <ion-item lines="none">
                      <ion-label>Individual </ion-label>
                      <ion-radio slot="start" value="individual"></ion-radio>
                    </ion-item>
                  </ion-col>
                </ion-row>
              </ion-grid>
            </ion-radio-group>
          </ion-list>

          <ion-item>
            <ion-label position="floating" style="color:#0000ff85">Last Name</ion-label>
            <ion-input></ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="floating" style="color:#0000ff85">Company Name</ion-label>
            <ion-input></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating" style="color:#0000ff85">Customer Display Name</ion-label>
            <ion-input></ion-input>
          </ion-item>
          <ion-item>
            <ion-label style="color:#0000ff85" position="floating">Email </ion-label>
            <ion-input></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating" style="color:#0000ff85">Phone </ion-label>
            <ion-input></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating" style="color:#0000ff85">Mobile </ion-label>
            <ion-input></ion-input>
          </ion-item>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-list>
          <ion-list-header>
            <ion-label>
              Other Details
            </ion-label>
          </ion-list-header>

          <ion-item class="container-fluid">
            <ion-label>Currency</ion-label>
            <ion-select interface="popover">
              <ion-select-option value="usd"
                >United State Dollar</ion-select-option
              >
              <ion-select-option value="GBP"
                >United Kingdom Pounds</ion-select-option
              >
            </ion-select>
          </ion-item>
        </ion-list>

        <ion-item class="container-fluid" lines="none" v-if="!showAddSocial">
          <ion-label style="color:#0000ff85" @click="showSocial"
            >Add Social Contact</ion-label
          >
        </ion-item>
        <ion-card-content v-if="showAddSocial">
          <ion-item>
            <ion-label position="floating" style="color:#0000ff85">Website</ion-label>
            <ion-input></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating" style="color:#0000ff85">Facebook</ion-label>
            <ion-input></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating" style="color:#0000ff85">Instagram</ion-label>
            <ion-input value="@"></ion-input>
          </ion-item>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-item  class="ion-activated" lines="none">
          <ion-icon style="color:#0000ff85" :icon="addCircleSharp" slot="start"></ion-icon>
          <ion-label style="color:#0000ff85"  >Add Billing & Shipping address </ion-label>
        </ion-item>
      </ion-card>
       <ion-card>
        <ion-item  class="ion-activated" lines="none">
          <ion-icon style="color:#0000ff85"  :icon="addCircleSharp" slot="start"></ion-icon>
          <ion-label style="color:#0000ff85" @click="openModal">Add Contact Person </ion-label>
        </ion-item>
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
  modalController
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
  color:#0000ff85
}
.label[floating],
.label[stacked],
.input-has-focus .label[floating] {
    color: blue ;
}
</style>

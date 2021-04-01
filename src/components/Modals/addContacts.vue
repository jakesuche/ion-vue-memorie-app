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
          Add Contact Person
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
          <ion-card-title>Contact Person </ion-card-title>
        </ion-card-header>

        <ion-card-content>
             <ion-item lines="none">
                  <ion-label position="floating" style="color:#0000ff85"
                    >Salutation</ion-label
                  >
                  <ion-input></ion-input>
                </ion-item>
                 <ion-item lines="none " >
                  <ion-label position="floating" style="color:#0000ff85"
                    >First Name</ion-label
                  >
                  <ion-input></ion-input>
                </ion-item>
                 <ion-item lines="none">
                  <ion-label position="floating" style="color:#0000ff85"
                    >Last Name</ion-label
                  >
                  <ion-input></ion-input>
                </ion-item>
                 <ion-item lines="none">
                  <ion-label position="floating" style="color:#0000ff85"
                    >Email</ion-label
                  >
                  <ion-input></ion-input>
                </ion-item>
                 
          <ion-grid>
            <ion-row>
              <ion-col >
                <ion-item lines="none">
                  <ion-label position="floating" style="color:#0000ff85" class="contact-person"
                    >Contact Phone</ion-label
                  >
                  <ion-input placeholder="Work Phone"></ion-input>
                </ion-item>
              </ion-col>
              <ion-col >
                <ion-item lines="none">
                  <ion-label class="contact-person" position="floating" style="color:#0000ff85" 
                    >Other Phone</ion-label
                  >
                  <ion-input placeholder="Your Mobile"></ion-input>
                </ion-item>
              </ion-col>
            </ion-row>
          </ion-grid>

          <ion-grid>
            <ion-row>
              <ion-col>
                <ion-item lines="none">
                  <ion-label position="floating" style="color:#0000ff85" class="contact-person"
                    >Other Details</ion-label
                  >
                  <ion-input placeholder="Designation "></ion-input>
                </ion-item>
              </ion-col>
              <ion-col>
                <ion-item lines="none">
                  <ion-label position="floating" style="color:#0000ff85" class="contact-person"
                    >other</ion-label
                  >
                  <ion-input placeholder="Department"></ion-input>
                </ion-item>
              </ion-col>
            </ion-row>
          </ion-grid>
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
} from "@ionic/vue";
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
    closeModal() {
      EventBus().emitter.emit("closeModal", true);
    },
  },
};
</script>

<style scoped>
.contact-person{
    font-size: 20px;
}

ion-item{
    border-bottom:1px solid black
}
ion-toolbar {
  --background: #0000ff85;
}
ion-input {
  --padding-start: 20px;
}
.label-check {
  margin-left: 10px;
}
ion-label {
  color: #0000ff85;
}
.label[floating],
.label[stacked],
.input-has-focus .label[floating] {
  color: blue;
}
</style>

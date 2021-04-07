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
          New Items
        </ion-title>

        <ion-buttons slot="end">
          <ion-button>
            <ion-title>
              SAVE
            </ion-title>
          </ion-button>
        </ion-buttons>
        
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card>
        <ion-card-header>
         
        </ion-card-header>

        <ion-card-content>
          <ion-list>
            <ion-radio-group value="biff" @ionChange="checked($event)">
              <ion-list-header>
                <ion-label style="font-size: 16px!important;">Item Type</ion-label>
              </ion-list-header>

              <ion-grid>
                <ion-row>
                  <ion-col>
                    <ion-item lines="none">
                      <ion-label>Goods</ion-label>
                      <ion-radio
                        v-model="check"
                        slot="start"
                        value="goods"
                      ></ion-radio>
                    </ion-item>
                  </ion-col>
                  <ion-col>
                    <ion-item lines="none">
                      <ion-label>Services</ion-label>
                      <ion-radio slot="start" value="services"></ion-radio>
                    </ion-item>
                  </ion-col>
                </ion-row>
              </ion-grid>
            </ion-radio-group>
          </ion-list>

          <ion-item lines="none">
            <ion-label position="stacked" style="color:#343a40">Item Name</ion-label>
            <ion-input></ion-input>
          </ion-item>

          <ion-item lines="none">
            <ion-label position="stacked" style="color:#343a40">SKU</ion-label>
            <ion-input></ion-input>
          </ion-item>
          <ion-item lines="none">
            <ion-label position="stacked" style="color:#343a40">Unit</ion-label>
            <ion-input placeholder="Type to add"></ion-input>
          </ion-item>
          <ion-item    lines="none">
             <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
            
             
              <ion-label  class="returnable" @click="showReturnableMessage"  style="color:#343a40">Returnable ? <ion-button class="alert-btn" fill="clear"  ><ion-icon   :icon="alertCircleOutline"></ion-icon></ion-button></ion-label>
           
           
          </ion-item>
          
        </ion-card-content>
      </ion-card>
       <ion-card>
        <ion-card-header class="d-flex justify-content-between">
          <ion-card-title style="color:black;">
            Sale Informations
          </ion-card-title>
          <ion-toggle checked="true" @ionChange="showSaleInfo=!showSaleInfo" color="primary"></ion-toggle>
        </ion-card-header>

        <ion-card-content v-if="showSaleInfo">
          

          <ion-item lines="none">
            <ion-label position="stacked" style="color:#343a40">Sellings Price (AUD)</ion-label>
            <ion-input></ion-input>
          </ion-item>

          <ion-item lines="none">
            <ion-label position="stacked" style="color:#343a40">Account</ion-label>
            <ion-input></ion-input>
          </ion-item>
          <ion-item lines="none" >
            <ion-label position="stacked" style="color:#343a40">Description</ion-label>
            <ion-input ></ion-input>
          </ion-item>
           <ion-item lines="none" >
            <ion-label>Account</ion-label>
            <ion-select interface="popover">
              <ion-select-option v-for="(option , i ) in options" :key="i" :value="option"
                >{{option}} </ion-select-option
              >
              
            </ion-select>
          </ion-item>
         
          
        </ion-card-content>
      </ion-card>

        <ion-card>
        <ion-card-header class="d-flex justify-content-between">
          <ion-card-title style="color:black;">
            Purchase Informations
          </ion-card-title>
          <ion-toggle checked="true" @ionChange="showPurchaseInfo=!showPurchaseInfo" color="primary"></ion-toggle>
        </ion-card-header>

        <ion-card-content v-if="showPurchaseInfo">
          

          <ion-item lines="none">
            <ion-label position="stacked" style="color:#343a40">Cost Price (AUD)</ion-label>
            <ion-input></ion-input>
          </ion-item>

          <ion-item lines="none">
            <ion-label position="stacked" style="color:#343a40">Account</ion-label>
            <ion-input></ion-input>
          </ion-item>
          <ion-item lines="none">
            <ion-label position="stacked" style="color:#343a40">Description</ion-label>
            <ion-input ></ion-input>
          </ion-item>
         
         
          
        </ion-card-content>
      </ion-card>
       <ion-card>
        <ion-card-header class="d-flex justify-content-between">
          <ion-card-title style="color:black;">
            Add More
          </ion-card-title>
          <ion-toggle checked="false" @ionChange="showMore=!showMore" color="primary"></ion-toggle>
        </ion-card-header>

        <ion-card-content v-if="showMore">
          

          <ion-item lines="none">
            <ion-label position="stacked" style="color:#343a40">Dimensions (cm)</ion-label>
            <ion-input></ion-input>
          </ion-item>

          <ion-item lines="none">
            <ion-label position="stacked" style="color:#343a40">Manufacturer </ion-label>
            <ion-input></ion-input>
          </ion-item>
          <ion-item lines="none">
            <ion-label position="stacked" style="color:#343a40">Brand</ion-label>
            <ion-input ></ion-input>
          </ion-item>
          <ion-item lines="none">
            <ion-label position="stacked" style="color:#343a40" @click="openUpc">UPC <ion-button fill="clear" class="alert-btn" ><ion-icon   :icon="alertCircleOutline"></ion-icon></ion-button></ion-label>
            <ion-input ></ion-input>
          </ion-item>
          <ion-item lines="none">
            <ion-label position="stacked" style="color:#343a40"  @click="ShowIsbn">ISBN <ion-button fill="clear" class="alert-btn" ><ion-icon   :icon="alertCircleOutline"></ion-icon></ion-button></ion-label>
            <ion-input ></ion-input>
          </ion-item>
          <ion-item lines="none">
            <ion-label position="stacked" style="color:#343a40" @click="ShowEan">EAN <ion-button fill="clear" class="alert-btn" ><ion-icon   :icon="alertCircleOutline"></ion-icon></ion-button></ion-label>
            <ion-input ></ion-input>
          </ion-item>
          <ion-item lines="none">
            <ion-label position="stacked" @click="ShowMpn"  style="color:#343a40">MPN <ion-button class="alert-btn" fill="clear"  ><ion-icon   :icon="alertCircleOutline"></ion-icon></ion-button></ion-label>
            <ion-input ></ion-input>
          </ion-item>
         
         
          
        </ion-card-content>
      </ion-card>

      
    </ion-content>
  </ion-page>
</template>

<script>
import popUp from '@/directives/clickSound/popUp.mp3'
import { arrowBack, readerOutline, addCircleSharp,alertCircleOutline } from "ionicons/icons";
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
  alertController
} from "@ionic/vue";
import addContact from '@/components/Modals/addContacts.vue'
import '@/theme/createItem.css'
export default {
  data() {
    return {
      arrowBack,
      readerOutline,
      individual: "individual",
      business: "business",
      name: "",
      check: "",
      alertCircleOutline,
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
      options:['Sales', 'General Income, Interest Income','Late Fee Income', 'Discount'],
      addCircleSharp,
      showAddSocial: false,
      showSaleInfo:true,
      showPurchaseInfo:true,
      showMore:false
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
    },
    async openUpc(){
      let alert = await alertController.create({
        
          cssClass: 'AlertClass',
         
          message: 'Twelve digit unique number associated with bar code (Universal product code)',
          buttons: ['OK'],
        });
       alert.present()
      .then(()=>{
        let audio =new Audio(popUp)
        audio.play()
      })
      
    },
    async showReturnableMessage(){
      let alert = await alertController.create({
        cssClass: 'AlertClass',
        message:'Enabling this option indicates that, the item can be return in a good condition',
        buttons: ['OK'],
      })
      alert.present()
      .then(()=>{
        let audio =new Audio(popUp)
        audio.play()
      })
    },
     async ShowIsbn(){
      let alert = await alertController.create({
        cssClass: 'AlertClass',
        message:'Twelve digit unique number associated with bar code (Universal Product Code',
        buttons: ['OK'],
      })
      alert.present()
      .then(()=>{
        let audio =new Audio(popUp)
        audio.play()
      })
    },
     async ShowEan(){
      let alert = await alertController.create({
        cssClass: 'AlertClass',
        message:'Thirteen digit unique number(internation Article Number)',
        buttons: ['OK'],
      })
      alert.present()
      .then(()=>{
        let audio =new Audio(popUp)
        audio.play()
      })
    },
     async ShowMpn(){
      let alert = await alertController.create({
        cssClass: 'AlertClass',
        message:'Thirteen digit unique commercial book identifier (International Standard book Number)',
        buttons: ['OK'],
      })
      alert.present()
      .then(()=>{
        let audio =new Audio(popUp)
        audio.play()
      })
    }

  },
};
</script>

<style scoped>
.alert-btn{
  font-size: 17px!important;
    margin-top: -10px!important;

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
ion-label{
  color:#2a5178!important;
  font-size:20px!important

  
}
.label[floating],
.label[stacked],
.input-has-focus .label[floating] {
    color: #343a40 ;
}
.returnable{
  color: rgb(52, 58, 64);
    margin-top: 19px;
    font-size: 19px;
}

ion-input{
  border-bottom: rgba(174, 166, 166, 0.441) 1px solid;
  border-radius:0px;
}

ion-radio{
  margin-right: 10px;
}

ion-checkbox{
  margin-right:10px
}

  
 

</style>

<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating">
          Title
        </ion-label>
        <ion-input type="text" required v-model="form.enteredTitle" />
      </ion-item>
      <ion-item>
       <ion-thumbnail slot="start">
           <img :src="form.previewImageUrl" />
       </ion-thumbnail>
       <ion-button type="button" fill="clear" @click="takePhoto">
           <ion-icon slot="start" :icon="camera"> </ion-icon>
           Take Photo
        </ion-button>
      </ion-item>
      <ion-item>
        <ion-label position="floating">
          Description
        </ion-label>
        <ion-textarea type="text" rows="5" required v-model="form.enteredDescription"> </ion-textarea>
      </ion-item>
    </ion-list>
    <ion-button  type="submit" expand="block">Save</ion-button>
   
  </form>
</template>

<script>

import {
  IonTextarea,
  IonInput,
  IonLabel,
  IonList,
  IonItem,
  IonButton,
  IonThumbnail,
  IonIcon
} from "@ionic/vue";
import { camera } from 'ionicons/icons'
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core'
const { Camera } = Plugins
export default {
    data(){
        return {
            form:{
            enteredTitle:'',
            previewImageUrl:'',
            enteredDescription:''

            },
            previewImageUrl:null,
            camera,
            
        }
    },
    emits:['save-memory'],
  components: {
    IonTextarea,
    IonInput,
    IonLabel,
    IonList,
    IonItem,
    IonButton,
    IonThumbnail,
    IonIcon
  },
  methods:{
      async takePhoto(){
       const photo =   await Camera.getPhoto({
           resultType: CameraResultType.Uri,
           source: CameraSource.Camera,
           quality:60
       });
       this.form.previewImageUrl = photo.webPath;

      },
      submitForm(){
          const memoryData = {
           title: this.form.enteredTitle,
            imageUrl:this.form.previewImageUrl,
            description:this.form.enteredDescription
          }
          this.$emit('save-memory', memoryData)
      }
  }
};
</script>

<style></style>


<template>
  <ion-menu content-id="main-content" type="overlay">
       <div class="menu-top">
           <ion-list id="inbox-list" class="menu-top-list ion-no-border" lines="none904">
                <ion-avatar>
    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
  </ion-avatar>
               <ion-list-header>Company</ion-list-header>
            <ion-note>uchechidi@gmail.com</ion-note>
        </ion-list>
       </div>
        <ion-content>
        
          <ion-list id="inbox-list" >
               <!-- <ion-list-header>Inbox</ion-list-header>
            <ion-note>hi@ionicframework.com</ion-note> -->
            <ion-menu-toggle auto-hide="false" v-for="(p, i) in appPages" :key="i">
              <ion-item @click="selectedIndex = i" router-direction="root" :router-link="p.url" lines="none" detail="false" class="hydrated" :class="{ selected: selectedIndex === i }">
                <ion-icon slot="start" :ios="p.iosIcon" :icon="p.mdIcon" :md="p.mdIcon"></ion-icon>
                <ion-label>{{ p.title }}</ion-label>
              </ion-item>
            </ion-menu-toggle>
         
          </ion-list>
  
         
        </ion-content>
</ion-menu>
</template>

<script>
 import { archiveOutline, archiveSharp, bookmarkOutline, bookmarkSharp, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
  // import { homeSharp, person, cartSharp, basketSharp,paperPlane, returnUpForward,settingsSharp, mail} from 'ionicons/icons';
 import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
const appPages = [
      {
        title: 'Dashboard',
        url: '/folder/Inbox',
        iosIcon: mailOutline,
        mdIcon: mailSharp
      },
      {
        title: 'Items',
        url: '/folder/Outbox',
        iosIcon: paperPlaneOutline,
        mdIcon: paperPlaneSharp
      },
      {
        title: 'Customers',
        url: '/folder/Favorites',
        iosIcon: heartOutline,
        mdIcon: heartSharp
      },
      {
        title: 'Packages',
        url: '/folder/Archived',
        iosIcon: archiveOutline,
        mdIcon: archiveSharp
      },
      {
        title: 'Invoices',
        url: '/folder/Trash',
        iosIcon: trashOutline,
        mdIcon: trashSharp
      },
      {
        title: 'Sales Returns',
        url: '/folder/Spam',
        iosIcon: warningOutline,
        mdIcon: warningSharp
      },
       {
        title: 'Venddors',
        url: '/folder/Spam',
        iosIcon: warningOutline,
        mdIcon: warningSharp
      },
       {
        title: 'Purchase Orders',
        url: '/folder/Spam',
        iosIcon: warningOutline,
        mdIcon: warningSharp
      },
       {
        title: 'Bills',
        url: '/folder/Spam',
        iosIcon: warningOutline,
        mdIcon: warningSharp
      },
       {
        title: 'Setting',
        url: '/folder/Spam',
        iosIcon: warningOutline,
        mdIcon: warningSharp
      },
       {
        title: 'Feedback',
        url: '/folder/Spam',
        iosIcon: warningOutline,
        mdIcon: warningSharp
      }
    ];
    const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
   
export default {
     data(){
         return{
             appPages,
             labels,
             bookmarkOutline,
             selectedIndex:1

         }
     },
     components:{ IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar}
 
}
</script>

<style scoped>
ion-list{
    border:none!important
}
.menu-top-list {
  background: #5656F2;
  color:white;
  margin-left:10px
}
ion-list-header,ion-note{
    color:white!important

}
.menu-top{
    background: #5656F2;
}
ion-menu ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, #fff));
}

ion-menu.md ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-top: 20px;
  --padding-bottom: 20px;
}

ion-menu.md ion-list {
  padding: 20px 0;
}

ion-menu.md ion-note {
  margin-bottom: 30px;
}

ion-menu.md ion-list-header,
ion-menu.md ion-note {
  padding-left: 10px;
}

ion-menu.md ion-list#inbox-list {
  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);
}

ion-menu.md ion-list#inbox-list ion-list-header {
  font-size: 22px;
  font-weight: 600;

  min-height: 20px;
}

ion-menu.md ion-list#labels-list ion-list-header {
  font-size: 16px;

  margin-bottom: 18px;

  color: #757575;

  min-height: 26px;
}

ion-menu.md ion-item {
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 4px;
}

ion-menu.md ion-item.selected {
  --background: rgba(var(--ion-color-primary-rgb), 0.14);
}

ion-menu.md ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.md ion-item ion-icon {
  color: #616e7e;
}

ion-menu.md ion-item ion-label {
  font-weight: 500;
}

ion-menu.ios ion-content {
  --padding-bottom: 20px;
}

ion-menu.ios ion-list {
  padding: 20px 0 0 0;
}

ion-menu.ios ion-note {
  line-height: 24px;
  margin-bottom: 20px;
}

ion-menu.ios ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --min-height: 50px;
}

ion-menu.ios ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.ios ion-item ion-icon {
  font-size: 24px;
  color: #73849a;
}

ion-menu.ios ion-list#labels-list ion-list-header {
  margin-bottom: 8px;
}

ion-menu.ios ion-list-header,
ion-menu.ios ion-note {
  padding-left: 16px;
  padding-right: 16px;
}

ion-menu.ios ion-note {
  margin-bottom: 8px;
}

ion-note {
  display: inline-block;
  font-size: 16px;

  color: var(--ion-color-medium-shade);
}

ion-item.selected {
  --color: var(--ion-color-primary);
}
</style>
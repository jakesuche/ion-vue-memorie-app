<template>
  <base-layout :Page-Title="'Add a memory'" :DeFaultBack="'/memories'">
    <create-memory-form @save-memory="saveMemory"></create-memory-form>
    
  </base-layout>
</template>

<script>
import CreateMemoryForm  from "../components/memories/CreateMemoryForm.vue"
import { toastController } from "@ionic/vue"
export default {
    components:{
        CreateMemoryForm
    },
    methods:{
        saveMemory(memoryData){
            this.$store.dispatch('addMemory', memoryData)
            .then( async ()=>{
                this.$router.replace('/memories')
                const toast = await toastController.create({
                    message: 'Your memory have been saved.',
                     duration: 2000
                })
                return toast.present()
                
            })
        }
    }
    //  const toast = await toastController
    //     .create({
    //       message: 'Your settings have been saved.',
    //       duration: 2000
    //     })
    //   return toast.present();
}
</script>

<style>

</style>
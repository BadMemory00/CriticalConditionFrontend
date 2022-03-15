<template>
  <div class="pos-1">
    <div>
      <NavSubuser class="pos-2" />
    </div>
      <SubUsercontent class="pos-3" />

      <WarningMsg/>
      <EditDevice class="hide"/>



      
    

  </div>
</template>

<script>
import NavSubuser from '@/components/NavSubuser.vue';
import SubUsercontent from '@/components/SubUserContent.vue';
import WarningMsg from '@/components/WarningMsg.vue'
import EditDevice from '@/components/EditDevice.vue'


export default {
  components:{
    NavSubuser,
    SubUsercontent,
    WarningMsg,
    EditDevice,
  },
 
  
}
</script>

<style>
.pos-1{
  position: relative;
}
.pos-2{
  position: relative;
}
.pos-3{
  position: relative;
  top: 65px;
  left: -200px;
}
.hide{
  visibility: hidden;
  position: relative;
  top: -775px;
  left: 40px;
  
}

</style>
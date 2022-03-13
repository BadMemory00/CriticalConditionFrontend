<template>
  <div class="pos-1">
    <div>
      <NavSubuser class="pos-2" />

    </div>
    <div>
      <SubUsercontent class="pos-3" />
    </div>

  </div>
</template>

<script>
import NavSubuser from '@/components/NavSubuser.vue';
import SubUsercontent from '@/components/SubUserContent.vue';

export default {
  components:{
    NavSubuser,
    SubUsercontent,

  }
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
  top: 100px;
  left: -160px;
}
</style>
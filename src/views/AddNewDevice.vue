<template>
    <div>
        <NavSubuser class="pos-2"/>
        <AddNewDeviceCard class="pos-3"/>
    </div>
</template>

<script>
import NavSubuser from '@/components/NavSubuser.vue';
import AddNewDeviceCard from '@/components/AddNewDeviceCard.vue'
export default {
    name:'AddNewDevice',
    components:{
        NavSubuser,
        AddNewDeviceCard,
    }
}
</script>

<style>
.pos-2{
  position: relative;
}
.pos-3{
  position: relative;
  top: 70px;
  left: -40px;
}
</style>
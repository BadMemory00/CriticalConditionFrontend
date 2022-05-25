<template>
    <div>
        <SubUserNavbar class="pos-2"/>
        <AddNewDeviceCard class="pos-3"/>
    </div>
</template>

<script>
import SubUserNavbar from '@/components/SubUserNavbar.vue';
import AddNewDeviceCard from '@/components/AddNewDeviceCard.vue'
export default {
    name:'AddNewDevice',
    components:{
        SubUserNavbar,
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
  top: 100px;
  left: -40px;
}
</style>
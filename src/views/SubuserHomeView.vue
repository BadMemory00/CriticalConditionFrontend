<template>
  <div class="">
    <NavSubuser />
    <SubUsercontent class="" @open="openModal" />
    <EditDevice class="edit overlay" v-if="false"/>
    <WarningMsg v-if="false"/>
    <QuickEdit v-if="false"/>
  </div>
</template>

<script>
import NavSubuser from "@/components/NavSubuser.vue";
import SubUsercontent from "@/components/SubUserContent.vue";
import EditDevice from "@/components/EditDevice.vue";
import WarningMsg from "@/components/WarningMsg.vue";
import QuickEdit from "@/components/QuickEdit.vue";
export default {
  components: {
    NavSubuser,
    SubUsercontent,
    WarningMsg,
    EditDevice,
    QuickEdit,
  },
  data() {
    return {
      opened: false,
    };
  },
  methods: {
    openModal() {
      this.opened = true;
    },
  },
};
</script>

<style>
.pos-1 {
  position: relative;
  height: 900px;
  /* width: 700px; */
}
.pos-2 {
  position: relative;
}
.pos-3 {
  position: relative;
  top: 65px;
  left: -200px;
}
.edit {
  position: relative;
  top: -775px;
  left: 40px;
}

.overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
/* */

.fixedNav {
  position: fixed;
  z-index: 2;
}
</style>
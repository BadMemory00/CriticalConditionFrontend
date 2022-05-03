<template>
  <div class="archive-modal">
    <div class="alert alert-warning warning" id="box2" role="alert">
      <button type="submit" class="icon-1-position">
        <div class="icon-0">
          <button @click="ChangeVisibility3()" class="button-5">
            <font-awesome-icon icon="fa-solid fa-xmark " />
          </button>
        </div>
      </button>
      <div class="warning-text">
        <p class="fw-bold text-black">
          <font-awesome-icon
            icon="fa-solid fa-triangle-exclamation"
            class="text-black me-2"
          />
          Are you sure you want to archive this device?
        </p>
        <div class="buttons">
          <button type="submit" class="me-2 button-check-1">yes</button>
          <button type="submit" class="mx-2 button-check-2">no</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WarningMsg",
  methods: {
    ChangeVisibility3() {
      document.querySelector(".archive-modal").style.visibility = "hidden";
    },
  },
};
</script>

<style>
.icon-1-position {
  position: relative;
  top: -15px;
  float: right;
  right: -10px;
  background-color: transparent;
  border: 0;
}
.icon-1-position .icon-0 {
  color: black;
}
.warning {
  padding: 1rem;
  border-radius: 20px;
  position: absolute;
  width: 48%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

}
.warning-text {
  margin-left: 20px;
}
.buttons {
  text-align: center;
}
.button-check-1 {
  font-size: 0.7rem;
  background-color: white;
  padding: 2px 20px;
  border: 1px solid red;
  border-radius: 20px;
}
.button-check-2 {
  font-size: 0.7rem;
  background-color: white;
  padding: 2px 20px;
  border: 1px solid green;
  border-radius: 20px;
}
.button-5 {
  background-color: transparent;
  border: 0;
}
.archive-modal {
  width: 100%;
  height: 100%;
  background-color: rgb(126 87 87 / 49%);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 5;
  display: none;
}
</style>

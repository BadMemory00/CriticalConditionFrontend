<template>
  <div class="pb-2">
    <div class="card content-card position-relative">
      <div class="card-body">
        <div class="card-title text-center mb-0">
          <button class="card-button" @click="changeVisibility()">
            {{ DeviceName }}
          </button>
        </div>
        <SubUserContentDropDown class="position-absolute card-menu" />
        <div class="card-model">
          <span class=""> {{ Model }}</span>
        </div>
        <hr />
        <!-- card-title -->
        <p class="fw-light">
          <span class="fw-bolder fs-16"> Area: </span>
          <span class="card-info">{{ AreaMsg }}</span>
        </p>
        <p class="fw-light">
          <span class="fw-bolder fs-16"> Number of failures: </span>
          <span class="card-info">{{ NumberOfFailures }} times</span>
        </p>
        <p class="fw-light ">
          <span class="fw-bolder fs-16"> Downtime: </span>
          <span class="card-info">{{ DownTime }} Days</span>
        </p>
      </div>
      <!-- card-body -->
    </div>
  </div>
</template>

<script>
import SubUserContentDropDown from "./SubUserContentDropDown.vue";
export default {
 name: "SubUserContentDeviceCard",
  components: {
    SubUserContentDropDown,
  },
  props: {
    DeviceName: {
      type: String,
      required: true,
    },
    Model: {
      type: String,
      required: true,
    },
    AreaMsg: {
      type: String,
      required: true,
    },
    NumberOfFailures: {
      type: Number,
      required: true,
    },
    DownTime: {
      type: Number,
      required: true,
    },
  },

  methods: {
    changeVisibility() {
      document.getElementById("box1").style.visibility = "visible";
    },
  },
};
</script>

<style scoped>
.dDown-2 {
  float: right;
}
.button1 {
  background-color: white;
  color: black;
  border: 0;
}
.button1:hover {
  background-color: white;
  color: black;
  border: 0;
}
.button1:focus {
  background-color: white;
  color: black;
  border: 0;
}
.icon-4 {
  margin-left: 10px;
  opacity: 0.5;
  margin-top: 2.5px;
  font-size: 1rem;
}
.Log-1:hover > .icon-4 {
  opacity: 1;
  color: #00a99d;
}
.Log-1 {
  font-size: 0.8rem;
}
.content-card {
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  color: black;
  box-shadow: -1px -1px 15px 1px rgb(0 0 0 / 30%);
  font-size: 0.8rem;
  margin: 20px 5px 0px 0px;
  width: 100%;
}
.card-button {
  border: none;
  background-color: white;
  color: #0a3440;
  font-weight: 700;
  font-size: 18px;
}
.card-menu {
  top: 0.5rem;
  right: 0;
}
.card-model {
  display: flex;
  justify-content: end;
  font-size: 16px;
  padding: 0 1rem;
  font-weight: 600;
}
/* Fix style -- Nour*/
.card-label {
  font-weight: bold;
}
.fs-15{
  font-size: 15px;
}
</style>

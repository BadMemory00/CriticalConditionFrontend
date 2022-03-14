<template>
  <div>
    <div class="card card-2 ">
      <div class="card-body ">
        <div class="card-title color-txt-2">
          <button class="card-title color-txt-2 border-0 bg-white" @click="changeVisibility()">
            {{ DeviceName }}
          </button>
          <!-- <div class="dropdown dDown-2 text-end">
            <button class="btn button1 btn-secondary" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" class="float-end icon-3"/>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li class="text-center">
                <a class="dropdown-item Log-1" href="#" ><font-awesome-icon icon="fa-solid fa-screwdriver-wrench" class="float-start icon-4" />Quick edit</a>
              </li>
              
              <li class="text-center">
                <a class="dropdown-item Log-1" href="#" ><font-awesome-icon icon="fa-solid fa-pen-to-square" class="float-start icon-4" />Edit</a>
              </li>
              <li class="text-center">
                <a class="dropdown-item Log-1" href="#" ><font-awesome-icon icon="fa-solid fa-box-archive" class="icon-4 float-start" />Archive</a>
              </li>

            </ul>
          </div> -->
          <SubUserContentDropDown />
          <br />
          <span class="iammodel"> {{ Model }}</span>
          <hr />
        </div>
        <!-- card-title -->
        <p class="fw-light card-text card-text-edit">
          Area: <span>{{ AreaMsg }}</span>
        </p>
        <p class="fw-light card-text card-text-edit">
          Number of failures: <span>{{ NumberOfFailures }} times</span>
        </p>
        <p class="fw-light card-text card-text-edit">
          Downtime: <span>{{ DownTime }} Days</span>
        </p>
      </div>
      <!-- card-body -->
    </div>
  </div>
</template>

<script>
import SubUserContentDropDown from './SubUserContentDropDown.vue'
export default {
  name: "SubUserContentDeviceCard",
  components:{
      SubUserContentDropDown,
  } ,
  data() {
    return {
      DeviceName: "Device name",
      Model: "Model",
      AreaMsg: "EmergencyICU",
      NumberOfFailures: 12,
      DownTime: 12,
    };
  },
  methods: {
    changeVisibility() {
      document.getElementById("box1").style.visibility = "visible";
    },
  },
};
</script>

<style>
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
.icon-4{
     margin-left: 10px;
  opacity: .5;
  margin-top: 2.5px;
  font-size: 1rem;
}
.Log-1:hover > .icon-4{
  opacity: 1;
  color: #00A99D;
}
.Log-1{
    font-size: .8rem;
}
</style>

<template>
  <div class="py-100">
    <div class="row">
      <div class="col-md-6 card-container position-relative py-4">
        <span class="container-icon position-absolute">
          <router-link to="/adddevice">
            <font-awesome-icon icon="fa-solid fa-plus" class="plus-icon" />
          </router-link>
        </span>
        <div class="wrapper-input_search d-flex justify-content-end mt-1">
          <input type="search" placeholder="Search" />
          <button type="submit" class="input-group-text text-end">
            <font-awesome-icon
              icon="fa-solid fa-magnifying-glass"
              class="icon-2"
            />
          </button>
        </div>

        <div class="row p-3">
          <p class="mx-2 card-header">
            Click on the device name to view its data!
          </p>
          <div class="col-md-6" v-for="item in cardDate" :key="item.id">
            <SubUserContentDeviceCard
              :DeviceName="item.DeviceName"
              :Model="item.Model"
              :AreaMsg="item.AreaMsg"
              :NumberOfFailures="item.DownTime"
              :DownTime="item.DownTime"
            />
          </div>
        </div>
        <div class="card-pagination text-center">
          <span class="bg-dark text-white p-1 rounded-3"> 6 of 7 </span>
        </div>
      </div>

      <div class="col-md-6" id="box1">
        test
        <!-- 
     <div class="card card-3">
          <div class="card-body pb-4">
            <div class="card-title color-txt-2 text-center">
              {{ DeviceName }}
              <SubUserContentDropDown class="bg-color" />
              <br />
              <span class="iammodel-2"> {{ Model }}</span>
              <hr />
            </div>
            <div class="card">
              <div class="card-body d-flex">
                <p class="card-title card-title-2 me-5">General Info</p>
                <div class="d-flex">
                  <div class="General-Info">
                    <span class="General-Info-text">Brand</span>
                    <div class="About">
                      <label class="search3">{{ label1 }}</label>
                    </div>
                  </div>
                  <div class="General-Info">
                    <span class="General-Info-text">Type of services</span>
                    <div class="About">
                      <label class="search3">{{ label2 }}</label>
                    </div>
                  </div>
                  <div class="General-Info">
                    <span class="General-Info-text">Purashse Date</span>
                    <div class="About">
                      <label class="search3"
                        ><font-awesome-icon
                          icon="fa-solid fa-calendar"
                          class="calender"
                        />{{ label3 }}</label
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card marginTop">
              <div class="card-body d-flex">
                <p class="card-title card-title-2 me-5">Probability Info</p>
                <div class="d-flex">
                  <div class="General-Info">
                    <span class="General-Info-text">Working Days</span>
                    <div class="About">
                      <label class="search3">{{ label4 }}</label>
                      <span class="little">per year</span>
                    </div>
                  </div>
                  <div class="General-Info">
                    <span class="General-Info-text">No.Failures</span>
                    <div class="About">
                      <label class="search3">{{ label5 }}</label>
                      <span class="little">times</span>
                    </div>
                  </div>
                  <div class="General-Info">
                    <span class="General-Info-text">Downtime</span>
                    <div class="About">
                      <label class="search3">{{ label6 }}</label>
                      <span class="little">days</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card marginTop">
              <div class="card-body d-flex">
                <p class="card-title card-title-2 me-5">Severity Info</p>
                <div class="d-flex">
                  <div class="General-Info">
                    <span class="General-Info-text">Safety</span>
                    <div class="About">
                      <label class="search3">{{ label7 }}</label>
                    </div>
                  </div>
                  <div class="General-Info">
                    <span class="General-Info-text">Function</span>
                    <div class="About">
                      <label class="search3">{{ label8 }}</label>
                    </div>
                  </div>
                  <div class="General-Info">
                    <span class="General-Info-text">Area</span>
                    <div class="About">
                      <label class="search3">{{ label9 }}</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body d-flex card-edit">
                <p class="card-title card-title-2 me-5">Severity Info</p>
                <div class="d-flex">
                  <div class="General-Info">
                    <span class="General-Info-text">Service cost</span>
                    <div class="About">
                      <label class="search3">{{ label10 }}</label>
                    </div>
                  </div>
                  <div class="General-Info">
                    <span class="General-Info-text">Operation cost</span>
                    <div class="About">
                      <label class="search3">{{ label11 }}</label>
                    </div>
                  </div>
                  <div class="General-Info">
                    <span class="General-Info-text">Purashse cost</span>
                    <div class="About">
                      <label class="search3">{{ label12 }}</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card card-4 marginTop">
              <div class="card-body d-flex">
                <p class="card-title card-title-2 me-5">Detectability Info</p>
                <div class="d-flex">
                  <div class="General-Info">
                    <span class="General-Info-text">Detection</span>
                    <div class="About">
                      <label for="" class="search3">{{ label13 }}</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card card-4 marginTop">
              <div class="card-body d-flex">
                <p class="card-title card-title-2 me-5">Risk Info</p>
                <div class="d-flex">
                  <div class="General-Info">
                    <span class="General-Info-text">Detection</span>
                    <form class="About-range">
                      <input
                        type="range"
                        min="0"
                        max="710"
                        value="250"
                        class="search5"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       -->
      </div>
    </div>
  </div>
</template>

<script>
import SubUserContentDeviceCard from "./SubUserContentDeviceCard.vue";
// import SubUserContentDropDown from "./SubUserContentDropDown.vue";

export default {
  name: "SubUsercontent",
  components: {
    SubUserContentDeviceCard,
    // SubUserContentDropDown,
  },
  data() {
    return {
      DeviceName: "Device name",
      Model: "Model",
      AreaMsg: "EmergencyICU",
      NumberOfFailures: 12,
      DownTime: 12,
      label1: "a",
      label2: "b",
      label3: "c",
      label4: "d",
      label5: "e",
      label6: "f",
      label7: "g",
      label8: "h",
      label9: "j",
      label10: "k",
      label11: "l",
      label12: "m",
      label13: "n",
      cardDate: [
        {
          DeviceName: "Device name 1",
          Model: "Model",
          AreaMsg: "EmergencyICU",
          NumberOfFailures: 12,
          DownTime: 12,
          id: new Date().getTime() + Math.random(),
        },
        {
          DeviceName: "Device name 2",
          Model: "Model",
          AreaMsg: "EmergencyICU",
          NumberOfFailures: 12,
          DownTime: 12,
          id: new Date().getTime() + Math.random(),
        },
        {
          DeviceName: "Device name 3",
          Model: "Model",
          AreaMsg: "EmergencyICU",
          NumberOfFailures: 12,
          DownTime: 12,
          id: new Date().getTime() + Math.random(),
        },
        {
          DeviceName: "Device name 4",
          Model: "Model",
          AreaMsg: "EmergencyICU",
          NumberOfFailures: 12,
          DownTime: 12,
          id: new Date().getTime() + Math.random(),
        },
      ],
    };
  },
};
</script>

<style>
.add {
  background-color: #0a3440;
  position: absolute;
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  top: -1.5rem;
  left: 46%;
}
.search2 {
  position: absolute;
  right: 0.2rem;
  top: 3%;
  width: 12.7rem;
}
.search2 input {
  width: 10rem;
  border-radius: 7px;
}
.search2 button {
  border-radius: 7px;
}
.align-end {
  margin-left: 193px;
  top: -20px;
}
.btn-search {
}
.icon-2 {
  color: white;
  opacity: 0.85;
}
.plus-icon {
  position: absolute;
  height: 2rem;
  width: 2rem;
  top: 0.5rem;
  left: 0.46rem;
}
.main-card-text {
  position: absolute;
}
.caard {
  background-color: #f7f9f8;
  top: 3rem;
  height: 33rem;
  border-radius: 25px;
  width: 35rem;
  position: relative;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
}

.main-card-text {
  position: absolute;
  top: 3.5rem;
  left: 3rem;
  font-weight: bolder;
  color: #00a99d;
}
.card-body2 {
  position: absolute;
  top: 4rem;
  left: 2.3rem;
}
/*.card-2 {
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  color: black;
  box-shadow: -1px -1px 15px 1px rgba(0, 0, 0, 0.3);
  margin-top: 15px;
  font-size: 0.8;
  position: relative;
  width: 13.5rem;
  height: 11.4rem;
  margin: 20px 5px 0px 0px;
}
*/
.iammodel {
  position: absolute;
  right: 3rem;
  top: 2rem;
}
.card-title hr {
  width: 40%;
  margin-left: 30%;
}
.card-text-edit {
  font-size: 0.8rem;
}
.color-txt {
  color: #00a99d;
}
.color-txt-2 {
  color: #0a3440;
  font-weight: 700;
}
.icon-3 {
  color: #00a99d;
}
.Device-info {
  position: relative;
  left: 190px;
  visibility: hidden;
}
.card-3 {
  background-color: #f7f9f8;
  top: 3rem;

  border-radius: 25px;
  width: 28.2rem;
  position: relative;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
}
.iammodel-2 {
  position: absolute;
  right: 4rem;
  top: 2rem;
}
.card-title-2 {
  position: absolute;
  top: -12.8px;
  background: linear-gradient(#f7f9f8, white);
  font-size: 0.9rem;
  font-weight: bold;
}
.card-4 {
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  color: black;
  box-shadow: 1px 10px 15px 1px rgba(0, 0, 0, 0.3);
  margin-top: 15px;
  font-size: 0.8;
  position: relative;
  margin: 20px 5px 0px 0px;
}
.General-Info {
  width: 8rem;
}
.General-Info-text {
  font-size: 0.8rem;
  font-weight: 500;
}
.About {
  width: 7.7rem;
}
.search3 {
  width: 7.7rem;
  height: 1.2rem;
  background-color: #f7f9f8;
  border: white;
  font-size: 0.8rem;
  font-weight: 400;
}
.search4 {
  width: 7.7rem;
  height: 1.2rem;
  background-color: #f7f9f8;
  border: white;
  font-size: 0.8rem;
}
.marginTop {
  margin-top: 43px;
}
.little {
  font-size: 0.7rem;
  float: right;
  margin-top: -4px;
  font-weight: 300;
}
.card-edit {
  margin-top: -30px;
}
.About-range {
  width: 24rem;
}
.search5 {
  width: 80%;
  outline: none;
  border-radius: 3px;
}

.calender {
  opacity: 0.7;
  font-size: 80%;
  float: right;
  margin-top: 2px;
  margin-right: 7px;
}
.button1 {
  background-color: transparent;
}
/* Fix style --- Nour */

.card-container {
  background-color: #f7f9f8;
  height: max-content;
  border-radius: 25px;
  box-shadow: 5px 5px 10px rgb(0 0 0 / 30%);
  border: 1px solid rgba(0, 0, 0, 0.125);
}
.container-icon {
  height: 3rem;
  width: 3rem;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #0a3440;
  border-radius: 50%;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
}
.plus-icon {
  height: 2rem;
  color: white;
  width: 2rem;
  border-radius: 50%;
  text-align: center;
}
.wrapper-input_search input {
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
  min-width: 30%;
  border: 1px solid rgba(0, 0, 0, 0.125);
}
.wrapper-input_search input:focus {
  border: 1px solid rgba(0, 0, 0, 0.125);
  outline: none;
}
.wrapper-input_search button {
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
  border-radius: 7px;
  background-color: #0a3440;
}
.card-header {
  font-weight: bolder;
  color: #00a99d;
}
.py-100 {
  padding-top: 100px;
  padding-bottom: 100px;
}
</style>

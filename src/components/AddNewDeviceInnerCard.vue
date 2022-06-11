<template>
    <div id="edit-1" class="">
        <div class="card card-edit">
            <p class="card-title card-title-4">General Info</p>
            <div class="card-body d-flex card-body-edit">
              <form class="porbability-info" >
                <p class="porbability-info-text">Name</p>
                <input type="text" class="input-edit">
              </form>
              <form class="porbability-info" >
                <p class="porbability-info-text">Model</p>
                <input type="text" class="input-edit">
              </form>
              <form class="porbability-info" >
                <p class="porbability-info-text">Brand</p>
                <input type="text" class="input-edit">
              </form>
            </div>
            <div class="card-body d-flex card-body-edit-2">
              <form class="porbability-info" >
                <p class="porbability-info-text">Type of services</p>
                <input type="text" class="input-edit">
              </form>
              <form class="porbability-info" >
                <p class="porbability-info-text">Purashace date</p>
                <input type="text" class="input-edit">
              </form>
            </div>
          </div>
          <div class="card card-edit-2  MarginTop-2 mt-5 ">
            <p class="card-title card-title-5">Porbability Info</p>
            <div class="card-body d-flex card-body-edit">
              <form class="porbability-info " >
                <p class="porbability-info-text">No. of working days</p>
                <input type="text" class="input-edit">
                <span class="little-2 d-block">per year</span>  
              </form>
              <form class="porbability-info" >
                <p class="porbability-info-text">No.failures</p>
                <input type="text" class="input-edit">
                <span class="little-2 d-block">per year</span>
              </form>
              <form class="porbability-info" >
                <p class="porbability-info-text">Downtime</p>
                <input type="text" class="input-edit">
                <span class="little-2 d-block">per year</span>
              </form>
            </div>
          </div>
          <div class="card mt-5 card-edit">
            <p class="card-title card-title-6">Severity Info</p>
            <div class="card-body d-flex card-body-edit">
              <form class="porbability-info" >
                <p class="porbability-info-text">Safety</p>
                <select class="input-edit">
                  <option class="input-edit">type of safety</option>
                  <option class="input-edit">type of safety</option>
                  <option class="input-edit">type of safety</option>
                </select>
              </form>
              <form class="porbability-info" >
                <p class="porbability-info-text">Function</p>
                 <select class="input-edit">
                  <option class="input-edit">type of safety</option>
                  <option class="input-edit">type of safety</option>
                  <option class="input-edit">type of safety</option>
                </select>
              </form>
              <form class="porbability-info" >
                <p class="porbability-info-text">Area</p>
                <select class="input-edit">
                  <option class="input-edit">type of safety</option>
                  <option class="input-edit">type of safety</option>
                  <option class="input-edit">type of safety</option>
                </select>
              </form>
            </div>
            <div class="card-body d-flex card-body-edit-2">
              <form class="porbability-info" >
                <p class="porbability-info-text">Service cost</p>
                <input type="text" class="input-edit">
              </form>
              <form class="porbability-info" >
                <p class="porbability-info-text">Operation cost</p>
                <input type="text" class="input-edit">
              </form>
              <form class="porbability-info" >
                <p class="porbability-info-text">Purashace cost</p>
                <input type="text" class="input-edit">
              </form>
            </div>
          </div>
           <div class="card mt-5 card-edit-2">
            <p class="card-title card-title-7">Detectability Info</p>
            <div class="card-body d-flex card-body-edit">
              <form class="porbability-info" >
                <p class="porbability-info-text">Detection</p>
                <select class="input-edit">
                  <option class="input-edit">type of safety</option>
                  <option class="input-edit">type of safety</option>
                  <option class="input-edit">type of safety</option>
                </select>
              </form>
            </div>
          </div>
    </div>
</template>

<script>
export default {
    name:'AddNewDeviceInnerCard',
}
</script>

<style scoped>

</style>
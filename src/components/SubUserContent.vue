<template>
  <div class="Content">
    <div class="row">
      <div class="col-md-6">
        <div class="card caard">
          <form>
            <button type="submit" class="btn btn-sm add">
              <font-awesome-icon icon="fa-solid fa-plus" class="icon-2" />
            </button>
          </form>
          <form class="input-group search2">
              <input
                type="search"
                placeholder="Search"
              />
              <button
                type="submit"
                class="btn-search input-group-text text-end"
              >
                <font-awesome-icon
                  icon="fa-solid fa-magnifying-glass"
                  class="icon-2 "
                />
              </button>
          </form>
          <p class="card-title mx-3 main-card-text">
            Click on the device name to view its data!
          </p>
          <div class="card-body card-body2">
            <div class="row">
              <div class="col-md-6">
                <div class="card card-2">
                  <div class="card-body">
                    <div class="card-title color-txt-2">
                      Device Name
                      <font-awesome-icon
                        icon="fa-solid fa-ellipsis-vertical"
                        class="float-end icon-3"
                      />
                      <br />
                        <span class="iammodel"> Model</span>
                      <hr>
                    </div>
                    <!-- card-title -->
                    <p class="fw-light card-text card-text-edit">
                      Area: <span>EmergencyICU</span>
                    </p>
                    <p class="fw-light card-text card-text-edit">
                      Number of failures: <span>12 times</span>
                    </p>
                    <p class="fw-light card-text card-text-edit">
                      Downtime: <span>12 days</span>
                    </p>
                  </div>
                  <!-- card-body -->
                </div>
                <!-- card -->
              </div>
              <div class="col-md-6">
                <div class="card card-2">
                  <div class="card-body">
                    <div class="card-title color-txt-2">
                      Device Name
                      <font-awesome-icon
                        icon="fa-solid fa-ellipsis-vertical"
                        class="float-end icon-3"
                      />
                      <br />
                      <span class="iammodel"> Model</span>
                      <hr>
                    </div>
                    <!-- card-title -->
                    <p class="fw-light card-text card-text-edit">
                      Area: <span>EmergencyICU</span>
                    </p>
                    <p class="fw-light card-text card-text-edit">
                      Number of failures: <span>12 times</span>
                    </p>
                    <p class="fw-light card-text card-text-edit">
                      Downtime: <span>12 days</span>
                    </p>
                  </div>
                  <!-- card-body -->
                </div>
                <!-- card -->
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="card card-2">
                  <div class="card-body">
                    <div class="card-title color-txt-2">
                      Device Name
                      <font-awesome-icon
                        icon="fa-solid fa-ellipsis-vertical"
                        class="float-end icon-3"
                      />
                      <br />
                      <span class="iammodel"> Model</span>
                      <hr>                    
                    </div>
                    <!-- card-title -->
                    <p class="fw-light card-text card-text-edit">
                      Area: <span>EmergencyICU</span>
                    </p>
                    <p class="fw-light card-text card-text-edit">
                      Number of failures: <span>12 times</span>
                    </p>
                    <p class="fw-light card-text card-text-edit">
                      Downtime: <span>12 days</span>
                    </p>
                  </div>
                  <!-- card-body -->
                </div>
                <!-- card -->
              </div>
              <div class="col-md-6">
                <div class="card card-2">
                  <div class="card-body">
                    <div class="card-title color-txt-2">
                      Device Name
                      <font-awesome-icon
                        icon="fa-solid fa-ellipsis-vertical"
                        class="float-end icon-3"
                      />
                      <br />
                      <span class="iammodel"> Model</span>
                      <hr>
                    </div>
                    <!-- card-title -->
                    <p class="fw-light card-text card-text-edit">
                      Area: <span>EmergencyICU</span>
                    </p>
                    <p class="fw-light card-text card-text-edit">
                      Number of failures: <span>12 times</span>
                    </p>
                    <p class="fw-light card-text card-text-edit">
                      Downtime: <span>12 days</span>
                    </p>
                  </div>
                  <!-- card-body -->
                </div>
                <!-- card -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubUsercontent",
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
.search2{
    position: absolute;
    right: 0.2rem;
    top: 3%;
    width: 12.7rem;
}
.search2 input{
    width: 10rem;
    border-radius: 7px;
}
.search2 button{
    border-radius: 7px;
}
.align-end {
  margin-left: 193px;
  top: -20px;
}
.btn-search {
  background-color: #0a3440;
}
.icon-2 {
  color: white;
  opacity: 0.85;
}
.main-card-text{
    position: absolute;
}
.caard {
  background-color: #f7f9f8;
  top: 3rem;
  height: 33rem;
  border-radius: 25px;
  width: 35rem;
  position: relative;
  box-shadow: 5px 5px 10px #888888;

  /* height: 400px; */
}

.main-card-text{
    position: absolute;
    top: 3.5rem;
    left: 3rem;
    font-weight: bolder;
    color: #00a99d;
}
.card-body2{
    position: absolute;
    top: 4rem;
    left: 2.3rem;
}
.card-2 {
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  color: black;
  box-shadow: -1px -1px 15px 1px rgba(0, 0, 0, 0.3);
  margin-top: 15px;
  font-size: 0.8;
  position: relative;
  width: 13.5rem;
  height: 11rem;
  margin: 20px 5px 0px 0px;
  
}
.iammodel{
    position: absolute;
    right: 3rem;
    top: 2rem;
}
.card-title hr{
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
.icon-3{
  color:#00a99d ;
}
</style>

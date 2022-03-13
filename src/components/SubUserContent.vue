<template>
  <div class="Content">
    <div class="row">
      <div class="col-md-6">
        <div class="card caard">
          <form>
            <button type="submit" class="btn btn-sm add">
              <font-awesome-icon icon="fa-solid fa-plus" class="icon-2 plus-icon" />
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
                      <a href=""><font-awesome-icon
                        icon="fa-solid fa-ellipsis-vertical"
                        class="float-end icon-3"
                      /></a>
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
                      <a href=""><font-awesome-icon
                        icon="fa-solid fa-ellipsis-vertical"
                        class="float-end icon-3"
                      /></a>
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
                      <a href=""><font-awesome-icon
                        icon="fa-solid fa-ellipsis-vertical"
                        class="float-end icon-3"
                      /></a>
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
                      <a href=""><font-awesome-icon
                        icon="fa-solid fa-ellipsis-vertical"
                        class="float-end icon-3"
                      /></a>
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
      <div class="col-md-6 Device-info">
         <div class="card card-3">
              <div class="card-body">
                <div class="card-title color-txt-2 text-center">
                      Device Name
                      <a href=""><font-awesome-icon
                        icon="fa-solid fa-ellipsis-vertical"
                        class="float-end icon-3"
                      /></a>
                      <br />
                        <span class="iammodel-2"> Model</span>
                      <hr>
                  </div>
                  <div class="card card-4 ">
                    <div class="card-body d-flex">
                      <p class="card-title card-title-2 me-5">General Info</p>
                      <div class="d-flex">
                        <div class="General-Info">
                          <span class=" General-Info-text">Brand</span>
                          <form class="About">
                            <input type="text" class=" search3">
                          </form>
                        </div>
                        <div class="General-Info">
                          <span class=" General-Info-text">Type of services</span>
                          <form class="About">
                            <input type="text" class=" search3">
                          </form>
                        </div>
                        <div class="General-Info">
                          <span class=" General-Info-text">Purashse Date</span>
                          <form class="About">
                            <input type="date" class=" search4">
                          </form>
                        </div>
                      </div>  
                    </div>
                  </div>
                  <div class="card card-4 marginTop">
                    <div class="card-body d-flex">
                      <p class="card-title card-title-2 me-5">Probability Info</p>
                      <div class="d-flex">
                        <div class="General-Info">
                          <span class=" General-Info-text">Working Days</span>
                          <form class="About">
                            <input type="text" class=" search3">
                            <span class="little">per year</span>
                          </form>
                        </div>
                        <div class="General-Info">
                          <span class=" General-Info-text">No.Failures</span>
                          <form class="About">
                            <input type="text" class=" search3">
                            <span class="little">times</span>
                          </form>
                        </div>
                        <div class="General-Info">
                          <span class=" General-Info-text">Downtime</span>
                          <form class="About">
                            <input type="text" class=" search4">
                            <span class="little">days</span>
                          </form>
                        </div>
                      </div>  
                    </div>
                  </div>
                  <div class="card card-4 marginTop">
                    <div class="card-body d-flex">
                      <p class="card-title card-title-2 me-5">Severity Info</p>
                      <div class="d-flex">
                        <div class="General-Info">
                          <span class=" General-Info-text">Safety</span>
                          <form class="About">
                            <input type="text" class=" search3">
                          </form>
                        </div>
                        <div class="General-Info">
                          <span class=" General-Info-text">Function</span>
                          <form class="About">
                            <input type="text" class=" search3">
                          </form>
                        </div>
                        <div class="General-Info">
                          <span class=" General-Info-text">Area</span>
                          <form class="About">
                            <input type="text" class=" search4">
                          </form>
                        </div>
                      </div>
                        
                    </div>
                    <div class="card-body d-flex card-edit">
                      <!-- <p class="card-title card-title-2 me-5">Severity Info</p> -->
                      <div class="d-flex">
                        <div class="General-Info">
                          <span class=" General-Info-text">Service cost</span>
                          <form class="About">
                            <input type="text" class=" search3">
                          </form>
                        </div>
                        <div class="General-Info">
                          <span class=" General-Info-text">Operation cost</span>
                          <form class="About">
                            <input type="text" class=" search3">
                          </form>
                        </div>
                        <div class="General-Info">
                          <span class=" General-Info-text">Purashse cost</span>
                          <form class="About">
                            <input type="text" class=" search4">
                          </form>
                        </div>
                      </div>
                        
                    </div>
                  </div>
                  <div class="card card-4 marginTop">
                    <div class="card-body d-flex">
                      <p class="card-title card-title-2 me-5">Detectability Info</p>
                      <div class="d-flex">
                        <div class="General-Info">
                          <span class=" General-Info-text">Detection</span>
                          <form class="About">
                            <input type="text" class=" search4">
                          </form>
                        </div>
                      </div>  
                    </div>
                  </div>
                  <div class="card card-4 marginTop">
                    <div class="card-body d-flex">
                      <p class="card-title card-title-2 me-5">Risk Info</p>
                      <div class="d-flex">
                        <div class="General-Info">
                          <span class=" General-Info-text">Detection</span>
                          <form class="About-range ">
                            <input type="range" min="0" max="710" value="250" class="search5">
                          </form>
                          
                        </div>
                      </div>  
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
.plus-icon{
    position: absolute;
    height: 2rem;
    width: 2rem;
    top: .5rem;
    left: .46rem;
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
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);

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
.Device-info{
  position: relative;
  left: 270px;
}
.card-3{
  background-color: #f7f9f8;
  top: 3rem;
  /* height: 33rem; */
  border-radius: 25px;
  width: 28.2rem;
  position: relative;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
}
.iammodel-2{

    position: absolute;
    right: 4rem;
    top: 2rem;

}
.card-title-2{
  position: absolute;
  top: -12.8px;
  background: linear-gradient(#f7f9f8,white);
  font-size: .9rem;
  font-weight: bold;

}
.card-4{
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  color: black;
  box-shadow: 1px 10px 15px 1px rgba(0, 0, 0, 0.3);
  margin-top: 15px;
  font-size: 0.8;
  position: relative;
  margin: 20px 5px 0px 0px;
}
.General-Info{
  width: 8rem;
}
.General-Info-text{
  font-size: .8rem;
  font-weight: 500;
}
.About{
    width: 7.7rem;
}
.search3{
    width: 7.7rem;
    height: 1.2rem;
    background-color: #f7f9f8;
    border: white;
}
.search4{
  width: 7.7rem;
    height: 1.2rem;
    background-color: #f7f9f8;
    border: white;
    font-size: .8rem;
}
.marginTop{
  margin-top: 43px;
}
.little{
  font-size: .7rem;
  float: right;
  margin-top: -4px;
  font-weight: 300;
  
}
.card-edit{
  margin-top: -30px;
}
.About-range{
  width: 24rem
}
.search5{
  width: 80%;
  outline: none;
  border-radius: 3px;
  
}




</style>

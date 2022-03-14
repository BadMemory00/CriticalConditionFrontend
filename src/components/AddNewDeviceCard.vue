<template>
  <div class="content">
    <div class="card card-shadow">
      <div class="card-body">
        <div class="d-block card-text-1">
          <p class="card-title text-center">
            Add new device
            <button type="button" class="float-end card-button">
              <font-awesome-icon
                icon="fa-solid fa-barcode"
                class="button-icon"
              />Scan
            </button>
          </p>
          <div class="card mt-4 w-100 card-info">
            <div class="card-body d-flex">
              <p class="card-title card-title-3">General Info</p>
              <div class="d-flex all-of-all">
                  <div class="all-info ">
                  <span class="all-info-text">Name</span>
                  <form class="about-all-info">
                      <input type="text" class="input-text">
                  </form>
              </div>
              <div class="all-info ">
                  <span class="all-info-text">Name</span>
                  <form class="about-all-info">
                      <input type="text" class="input-text">
                  </form>
              </div>
              <div class="all-info ">
                  <span class="all-info-text">Name</span>
                  <form class="about-all-info">
                      <input type="text" class="input-text">
                  </form>
              </div>
              </div>
            </div>
            <div class="card-body card-fix ">
              <div class="d-flex all-of-all">
                  <div class="all-info ">
                  <span class="all-info-text">Name</span>
                  <form class="about-all-info">
                      <input type="text" class="input-text">
                  </form>
              </div>
              <div class="all-info ">
                  <span class="all-info-text">Name</span>
                  <form class="about-all-info">
                      <input type="text" class="input-text">
                  </form>
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
  name: "AddNewDeviceCard",
};
</script>

<style>
.card-shadow {
  background-color: #f7f9f8;
  border-radius: 25px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
}
.card-text-1 {
  font-size: 1.2rem;
  font-weight: 600;
}
.card-button {
  /* position: relative; */
  font-size: 0.8rem;
  background-color: white;
  border: 2px #0a3440 solid;
  padding: 5px 15px;
  right: 5px;
  border-radius: 10px;
  color: #0a3440;
}
.button-icon {
  margin-right: 7px;
  opacity: 0.7;
  color: #0a3440;
}
.card-info {
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  color: black;
  box-shadow: 1px 10px 15px 1px rgba(0, 0, 0, 0.3);
  font-size: 0.8;
}
.card-title-3 {
  position: relative;
  top: -30px;
  font-size: 1rem;
  background-color: #f7f9f8;
  height: 0.85rem;
  width: 5.7rem;
}
.all-info{
    width: 7rem;
    margin-right: 40px;
    margin-left: 5px;
    
}
.all-info-text{
    font-size: .85rem;
    /* width: 5rem; */
    font-weight: 400;
}
.input-text{
    width: 8rem;
    height: 1rem;
    background: #f7f9f8;
    border: 0ch;
}
.all-of-all{
    position: relative;
    left: -60px;
}
.about-all-info{
    width: 5rem;
    font-size: .7rem;
}
.card-fix{
    margin-left: 90px;
    position: relative;
    top: -20px;
}


</style>

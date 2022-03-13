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
          <form class="input-group">
            <div class="input-group input-group-sm w-50 align-end">
              <input
                type="search"
                class="form-control form-control-sm search"
                placeholder="Search"
              />
              <button
                type="submit"
                class="btn-search input-group-text text-end"
              >
                <font-awesome-icon
                  icon="fa-solid fa-magnifying-glass"
                  class="icon-2"
                />
              </button>
            </div>
          </form>
          <p class="card-title text-device mx-3">
            Click on the device name to view its data!
          </p>
          <div class="card-body">
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
                      <span>____ Model</span>
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
                      <span>____ Model</span>
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
                      <span>____ Model</span>
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
                      <span>____ Model</span>
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
  margin-left: 180px;
  position: relative;
  top: -15px;
  margin-bottom: 10px;
  border-radius: 50%;
}
.align-end {
  margin-left: 193px;
  top: -20px;
}
.text-device {
  font-weight: 400;
}
.btn-search {
  background-color: #0a3440;
}
.icon-2 {
  color: white;
  opacity: 0.85;
}
.caard {
  background-color: #f7f9f8;
  width: 400px;
  height: 550px;
  border-radius: 25px;
  /* height: 400px; */
}
.card-2 {
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  color: black;
  box-shadow: -1px -1px 20px 1px rgba(0, 0, 0, 0.3);
  margin-top: 15px;
  font-size: 0.8;
  position: relative;
  top: -20px;
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

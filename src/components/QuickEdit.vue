<template>
  <div class="quickEditModel">
    <div class="card w-50 to-edit">
      <div class="card-body">
        <p class="card-title edit-title-card">
          <font-awesome-icon
            icon="fa-solid fa-hourglass"
            class="icon-edit-card"
          />
          Quick Edit
          <button @click="ChangeVisibility6()" class="exit">
            <font-awesome-icon icon="fa-solid fa-xmark" />
          </button>
        </p>
        <hr />
        <p>
          <span class="quick-edit-info">number of failures</span>
          <input type="text" class="quick-edit-input" />
        </p>
        <p>
          <span class="quick-edit-info">Downtime</span>
          <input type="text" class="quick-edit-input" />
        </p>
      </div>
      <div class="submit-button mb-2">
        <button class="Submit-button-1">Submit</button>
        <button class="Submit-button-2">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuickEdit",
  methods: {
    ChangeVisibility6() {
      document.querySelector(".quickEditModel").style.display = "none";
    },
  },
};
</script>

<style scoped>
  .icon-edit-card {
    font-weight: 400;
    opacity: 0.5;
    margin-right: 10px;
  }
  .edit-title-card {
    font-weight: 600;
  }
  .quick-edit-info {
    font-size: 0.9rem;
    margin-right: 10px;
  }
  .quick-edit-input {
    border: 0;
    background-color: #f7f9f8;
    height: 1.5rem;
    font-size: 0.9rem;
  }
  .quickEditModel {
    width: 100%;
    height: 100%;
    background-color: rgb(126 87 87 / 49%);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 5;
    display: none;
  }
  .to-edit {
    background-color: white;
    border-radius: 25px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
      padding: 1rem;
    border-radius: 20px;
    position: absolute;
    width: 48%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
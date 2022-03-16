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
          <AddNewDeviceInnerCard />
          <div class="mt-4 button-box ">
            <button class="Confirm-button-1"><font-awesome-icon icon="fa-solid fa-plus" class="button-box-edit" />Add</button>
            <button class="Confirm-button-2"><font-awesome-icon icon="fa-solid fa-eraser" class="button-box-edit" />Reset</button>
          </div>
          <!-- end -->
        </div>
      </div>
    </div>
    <div class="HomeButton">
      <router-link to="/subuser" class="HomeButton-btn"><font-awesome-icon icon="fa-solid fa-house" class="HomeButton-btnIcon"/>Home</router-link>
    </div>
  </div>
</template>

<script>
import AddNewDeviceInnerCard from './AddNewDeviceInnerCard.vue'
export default {
  name: "AddNewDeviceCard",
  components:{
  AddNewDeviceInnerCard
  },
  data(){
    return{
     
    }
  }
};
</script>

<style>
.content{

}
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
.card-button:hover{
  background-color: #0a3440;
color: white;
}
.card-button:hover > .button-icon{
  background-color: #0a3440;
color: white;
}
.button-icon {
  margin-right: 7px;
  opacity: 0.7;
  color: #0a3440;
}


.card-edit{
  margin-top: 30px;
   box-shadow: 1px 10px 15px 1px rgba(0, 0, 0, 0.3);
   border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 15px;
    height: 8rem;
}
.card-title-4{
  position: relative;
  top: -15px;
  margin: 0;
  margin-left: 30px;
  font-size: 1rem;
  background: linear-gradient(#f7f9f8,white);
  width: 15%;
  padding: 0;
}
.card-title-5{
  position: relative;
  top: -15px;
  margin: 0;
  margin-left: 30px;
  font-size: 1rem;
  background: linear-gradient(#f7f9f8,white);
  width: 19%;
  padding: 0;
}
.card-title-6{
  position: relative;
  top: -15px;
  margin: 0;
  margin-left: 30px;
  font-size: 1rem;
  background: linear-gradient(#f7f9f8,white);
  width: 16%;
  padding: 0;
}
.card-title-7{
  position: relative;
  top: -15px;
  margin: 0;
  margin-left: 30px;
  font-size: 1rem;
  background: linear-gradient(#f7f9f8,white);
  width: 21%;
  padding: 0;
}
.porbability-info{
  position: relative;
  top: -30px;
    margin-left: 20px;
}
.porbability-info-text{
  font-size: .8rem;
  margin: 2px;
  padding: 0;
  font-weight: 400;
  position: relative;
  top: 7px;

}
.input-edit{
  border: 0;
  background-color: #f7f9f8;
  height: 1.2rem;
  width: 10rem;
  font-size: .8rem;
}
.card-body-edit-2{
  position: relative;
  top: -30px;
}
/* .MarginTop-2{
  margin-top: 60px;
} */
.card-edit-2{
  margin-top: 30px;
   box-shadow: 1px 10px 15px 1px rgba(0, 0, 0, 0.3);
   border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 15px;
    height: 5rem;
}
.little-2{
font-size: .7rem;
font-weight: 300;
float: right;
position: relative;
top: -5px;
right: 8px;
color: #0a3440;
}
.button-box{
  text-align: center;

}
.Confirm-button-1{
  margin-left: 20px;
  margin-right: 20px;
  border: 2px green solid;
  background-color: white;
  padding: 0px 20px;
  border-radius: 7px;
  font-size: .7rem;
}
.Confirm-button-2{
  margin-left: 20px;
  margin-right: 20px;
  border: 2px rgb(255, 230, 0) solid;
  background-color: white;
  padding: 0px 20px;
  border-radius: 7px;
  font-size: .7rem;
}
.button-box-edit{
margin-right: 5px;
opacity: .7;
font-weight: 600;
}
.HomeButton{
  position: relative;
  top: -420px;
  left: -60px;

}
.HomeButton-btn{
  padding: 10px 20px;
  border: 2px #0a3440 solid;
  background-color: white;
  border-radius: 7px;
  text-decoration: none;
  color: #0a3440;
}
.HomeButton-btnIcon{
  margin-right: 7px;
  opacity: .7;
  font-weight: bold;
  
}
.HomeButton-btn:hover{
  color: white;
  background-color: #0a3440;
  border: white;
}
</style>

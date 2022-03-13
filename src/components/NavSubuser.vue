<template>
  <div>
    
      <p class="HName fw-bold">HostpitalName</p>
    
    <div class="dropdown dDown">
      <button
        class="btn button btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Dropdown button
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item Log" href="#"><font-awesome-icon class="icon1" icon="fa-solid fa-right-from-bracket" />LogOut</a></li>
        
      </ul>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style>
.HName{
  float: left;
  color: #00A99D;
  /* font-weight: bold; */
  font-size: 1.3rem;
}
.dDown{
  float: right;
  
}
.button{
  background-color: white;
  color: black;
  border: 0;
}
.button:hover{
  background-color: #00A99D;
  color: black;
  border: 0;

}
.button:focus{
  background-color: #00A99D;
  color: black;
  border: 0;


}
.icon1{
  margin-right: 10px;
  opacity: .5;
}
.Log:hover > .icon1{
  opacity: 1;
  color: #00A99D;
}

</style>

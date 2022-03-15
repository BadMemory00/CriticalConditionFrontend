<template>
        
        <div class="dropdown button6 dDown-2 text-end">
            <button class="btn button1  btn-secondary" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" class="float-end icon-3"/>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li class="text-center">
                <button class="dropdown-item Log-1"><font-awesome-icon icon="fa-solid fa-screwdriver-wrench" class="float-start icon-4" />Quick edit</button>
              </li>
              
              <li class="text-center">
                <button class="dropdown-item Log-1" @click="changeVisibility4()" ><font-awesome-icon icon="fa-solid fa-pen-to-square" class="float-start icon-4" />Edit</button>
              </li>
              <li class="text-center">
                <button class="dropdown-item Log-1" @click="changeVisibility2()" ><font-awesome-icon icon="fa-solid fa-box-archive" class="icon-4 float-start" />Archive</button>
                
              </li>
            </ul>
          </div>
    
</template>

<script>
export default {
    name:'SubUserContentDropDown',
    methods: {
    changeVisibility2() {
      document.getElementById("box2").style.visibility = "visible";
    },
    changeVisibility4(){
      document.getElementById("edit-1").style.visibility = "visible";
    }
    
  },
  
}
</script>

<style>

</style>
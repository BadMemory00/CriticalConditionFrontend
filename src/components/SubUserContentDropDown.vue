<template>
    
        <div class="dropdown dDown-2 text-end">
            <button class="btn button1  btn-secondary" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" class="float-end icon-3"/>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li class="text-center">
                <a class="dropdown-item Log-1" href="#" ><font-awesome-icon icon="fa-solid fa-screwdriver-wrench" class="float-start icon-4" />Quick edit</a>
              </li>
              
              <li class="text-center">
                <a class="dropdown-item Log-1" href="#" ><font-awesome-icon icon="fa-solid fa-pen-to-square" class="float-start icon-4" />Edit</a>
              </li>
              <li class="text-center">
                <a class="dropdown-item Log-1" href="#" ><font-awesome-icon icon="fa-solid fa-box-archive" class="icon-4 float-start" />Archive</a>
              </li>

            </ul>
          </div>
    
</template>

<script>
export default {
    name:'SubUserContentDropDown',
}
</script>

<style>
    .button1{
        background-color: transparent;
    }
</style>
<template>
<div>
  <!-- NAVBAR -->
<nav class="navbar navbar-expand-lg bg-success py-0">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="./assets/logo2.png" alt="" width="60" height="48">Filipino Cuisine</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Addrecipe</a>
        </li>
          
      </ul>
      
    </div>
  </div>
</nav>

<HomePage v-if="page ==='recipes'" />
<AddRecipe v-if="page ==='add'" />
<LogIn v-if="page ==='log'" />

</div>


</template>

<script>
 import HomePage from "./components/HomePage";
 import AddRecipe from "./components/AddRecipe";
 import LogIn from "./components/LogIn";

export default {
 
  name: 'App',
  
  data: function(){
    return{
      "page":"log"

    }
  },
  components: {
    HomePage,AddRecipe,LogIn
    
  }
}
</script>

<style>
.form{
  width: 15%;
  height:100vh;
  background-color:rgb(254, 250, 250);
  position: absolute;
  
}
.search-icon{
  display:block;
}
</style>

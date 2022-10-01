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
<!-- FORM SEARCH  -->

 <div class="form"> 
  <form class="d-flex">
        <input class="form-control mt-3 me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success mt-3 mx-auto" type="submit">Search</button>
      </form>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckDefault">
    Default checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
  <label class="form-check-label" for="flexCheckChecked">
    Checked checkbox
  </label>
  
</div>
</div> 

</div>


</template>

<script>


export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
.form{
  width: 15%;
  height:100vh;
  background-color:rgb(254, 250, 250);
  
}
.search-icon{
  display:block;
}
</style>

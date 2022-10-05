<template>
 <div>

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

<!-- card Grid Recipes -->
<ul>
  <li v-for=" r  in this.recipes" v-bind:key="r._id"/>
  
</ul>
  </div>
</template>


<script>

import axios from 'axios'
const baseAPIUrl ="http://localhost:3000"

export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  data:function() {
    return{
      recipes:[]
    }
  },
  components: {

    
  },
  
  async created() {
    const response = await axios.get(baseAPIUrl +'/recipes')
    this.recipes = response.data;
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.recipes{
  margin-left: 16%;
}
.form{
  width: 15%;
  height:100vh;
  background-color:rgb(254, 250, 250);
  position: absolute;
  
}
</style>

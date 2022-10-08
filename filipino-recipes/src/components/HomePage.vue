<template>
 <div>

<!-- FORM SEARCH  -->



<!-- card Grid Recipes -->
<div class="row row-cols-1 row-cols-md-2 g-4 mt-3" >
  <div class="col"  v-for=" r  in this.recipes" v-bind:key="r._id">
    <div class="card">
      <div class="card-body"  >
         <h5 class="card-title">{{r.title}}</h5>
         <p class="card-text">{{r.description}}</p>
         <button class="btn btn-success"  v-on:click="show">show</button>
      </div>
    </div>
  </div>
</div>


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
      recipes:[],
      
    }
  },
  components: {

    
  },
  methods: {
   
  },
  
  async created() {
    const response = await axios.get(baseAPIUrl +'/recipes',)
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

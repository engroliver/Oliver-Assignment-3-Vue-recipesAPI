<template>
<div >
 
    <div class="row  mx-auto text-center detailForm "  >
    <div class="container DetailBox mt-2">
    <div class="row mx-auto">
    <form class="text-center p-10" >
   
      <router-link to="/recipes"><button type="button" class="btn-close closeBtn" aria-label="Close" ></button></router-link>
      <h3 class="p-2 bg-light border">{{recipe.title}}</h3>
      <p>{{recipe.description}}</p>
      <ul class="list-group mb-3"  >
      <h3 class="p-2 bg-light border">Ingredients</h3>
  <li class="list-group-item " v-for="(ingredients, index) in recipe.ingredients" v-bind:key="index">{{ingredients}}</li>
      </ul>
      <h3 class="p-2 bg-light border">Instructions</h3>
    <ul class="list-group mb-3" >
  <li class="list-group-item " v-for="(instructions, index) in recipe.instructions" v-bind:key="index">{{instructions}}</li>
      </ul>
      <h3 class="p-2 bg-light border ">Nutrition Facts</h3>
      <p>{{recipe.nutrition_facts}}</p>
      <p>prep time:{{recipe.prep_time}}</p>
      <p>Total time:{{recipe.total_time}}</p>
      <p>Servings:{{recipe.servings}}</p>
      <p>Cost:{{recipe.cost}}</p>
      <router-link v-bind:to="'/RecipeEdit/' + recipeId " ><button type="button" class="btn btn-primary">EDIT</button></router-link> <button type="button" class="btn btn-danger">DELETE</button>
    </form>
    </div>
    </div>
  </div>

</div>
</template>
<script>
import axios from 'axios'
const baseAPIUrl ="http://localhost:3000"
export default {
name:'RecipeDetail',
  async created() {
    console.log(this.$route.params)
    console.log(this.recipeId)
    const recipeId = this.$route.params.recipeId
    const response = await axios.get(baseAPIUrl +'/recipes/'+ recipeId)
    this.recipe = response.data;
    
  },
data: function () {
    return{
        recipe:{},
        
       
    }
},
components:{
},
 
methods: {
    close(){
      this.$router.push('/recipes')
    },
  async process() {
  }
},
    
}
</script>
<style scoped>
.DetailBox{
  max-width: 700px;
  max-height: 100vh;
  font-family: 'Oswald', sans-serif;
  font-weight:bold;
  border-radius:25px;
  border: 2px solid rgb(17, 97, 73);
  font-size: 1.2rem;
  background-color:white ;
  justify-content: center;
  overflow: scroll
  
 
}
.closeBtn{
  top:0;
  position: relative;
  font-size: 30px;  
  margin-left: 90%;
}
.detailForm{
  background-image: url("../assets/reBG.jpg");
  background-repeat: no-repeat;
  background-size: cover;
 
}
</style>
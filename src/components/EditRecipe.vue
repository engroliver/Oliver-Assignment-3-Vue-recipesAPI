<template>
 <div>
 <NavBar/>
   <div class="row  mx-auto text-center shareForm">
   <div id="share" class="container mt-3">
      <div class="row my-5 mx-auto">
      <form class="text-center p-10">
        <h2 class="shareTitle">UPDATE RECIPE</h2>
          <div class="mb-2">
            <div class="errordiv"></div>
              <label  class="form-label">Title</label>
              <input id="name" type="text" class="form-control form-control-sm" v-model="recipe.title" >
            </div>
            <div class="mb-2">
              <label  class="form-label">Description</label>
              <textarea class="form-control form-control-sm" id="discription" rows="3" v-model="recipe.description"></textarea>
            </div> 
            <div class="mb-2">
            <div class="errordiv"></div>
              <label  class="form-label">Course</label>
              <input id="course" type="text" class="form-control form-control-sm" v-model="recipe.course" >
            </div>
            <div class="errordiv"></div>
              <div class="mb-2">
              <label  class="form-label">Ingredients</label>
              <textarea id="ingredients" placeholder="enter the ingredients seperated by a comma ex.(milk,flour,sugar)" type="text" class="form-control form-control-sm" rows="3" v-model="recipe.ingredients"></textarea>
            </div>
            <div class="errordiv"></div>
            <div class="mb-2">
              <label  class="form-label">Instructions</label>
              <textarea id="Instruction" type="text" placeholder="enter instruction step by step seprated by comma"  class="form-control form-control-sm" rows="3" v-model="recipe.instructions" ></textarea>
            </div>
            <div class="errordiv"></div>
            <div class="mb-2">
              <label  class="form-label">Nutrition Facts</label>
              <input id="nutriFacts" type="text" class="form-control form-control-sm" v-model="recipe.nutrition_facts" >
            </div>
            <div class="errordiv"></div>
            <div class="mb-2">
              <label  class="form-label">Prep Time</label>
              <input id="prep_time" type="text" class="form-control form-control-sm" v-model="recipe.prep_time" >
            </div>
            <div class="errordiv"></div>
            <div class="mb-2">
              <label  class="form-label">Cook time</label>
              <input id="cook_time" type="text" class="form-control form-control-sm" v-model="recipe.cook_time" >
            </div>
            <div class="errordiv"></div>
            <div class="mb-2">
              <label  class="form-label">Total time</label>
              <input id="total_time" type="text" class="form-control form-control-sm" v-model="recipe.total_time" >
            </div>
            <div class="errordiv"></div>
            <div class="mb-2">
              <label  class="form-label">Servings</label>
              <input id="servings" type="number" min="1" max="100" class="form-control form-control-sm" v-model="recipe.servings" >
            </div>
            <div class="errordiv"></div>
            <div class="mb-2">
              <label  class="form-label">Cost</label>
              <input id="cost" min="1" type="number" class="form-control form-control-sm" v-model="recipe.cost" >
            </div>
            <div class="mb-2">
              <label class="form-label">Upload Image</label>
              <!-- <Uploadcare publicKey="0776c9a63bf7b1c0aca0" v-on:success="addToDataBase" @error="onError"> -->
              <button class="btn btn-success "></button>
              <!-- </Uploadcare> -->
            </div>
            <button class="btn btn-success" v-on:click="UpdateDataBase" >UPDATE</button>
      </form>
      </div>
   </div>
</div> 


  </div>
</template>

<script>
// import Uploadcare from "uploadcare-vue";
import NavBar from "./NavBar.vue"
import axios from 'axios'
const baseAPIUrl ="http://localhost:3000"
export default {
  name: 'EditRecipe',
  props: {
    msg: String
  },
  data:function(){
    return{
      recipe:{}
    }
  },
  components: {NavBar
    
  },
    async created() {
    const response = await axios.get(baseAPIUrl +'/recipes/'+ this.$route.params.recipeId)
    this.recipe = response.data;
        console.log(response.data)
  },
  methods:{
  async UpdateDataBase(params){
    const NewRecipeData ={
      title:this.recipe.title,
      description: this.description,
      course: this.course,
      ingredients: this.ingredients.split(",").map((i) => i.trim()),
      instructions: this.instructions.split(",").map((i) => i.trim()),
      nutrition_facts:this.nutrition_Facts.split(",").map((i) => i.trim()),
      prep_time:this.prep_time,
      cook_time:this.cook_time,
      total_time:this.total_time,
      servings:this.servings,
      cost: this.cost,
      name:params.name,
      url:params.cdnUrl
    };
   await axios.put(baseAPIUrl+'/recipes/'+ this.$route.params.recipeId,NewRecipeData)
    this.$router.push("/recipes")
  
  },
  },

}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
#share{
  max-width: 600px;
  font-family: 'Oswald', sans-serif;
  font-weight:bold;
  border-radius:25px;
  border: 2px solid rgb(17, 97, 73);
  font-size: 1.2rem;
  background-color:white ;
}
.shareBtn{
  padding: 1em;
	border-radius: 30px;
	font-weight: 600;
  width: 300px;
  margin-top: 20px;
}
.shareTitle{
font-size: 1.5rem;
font-family: 'Oswald', sans-serif;
font-weight:bold;
}
.shareForm{
  background-image: url("../assets/shareBG.jpg");
  background-size: cover;
}
</style>

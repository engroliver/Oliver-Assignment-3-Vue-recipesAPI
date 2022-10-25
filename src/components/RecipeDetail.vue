<template>
  <div>
    <NavBar/>
    <div class="row mx-auto text-center detailForm">
      <div class="container DetailBox mt-2" v-bind:style="{fontFamily:font}">
        <div class="row mx-auto">
          <form class="text-center p-10">
            <router-link to="/recipes"
              ><button
                type="button"
                class="btn-close closeBtn"
                aria-label="Close"
              ></button
            ></router-link>
            <h3 class="p-2 bg-light border">{{ recipe.title }}</h3>
            <p>{{ recipe.description }}</p>
            <ul class="list-group mb-3">
              <h3 class="p-2 bg-light border">Ingredients</h3>
              <li
                class="list-group-item"
                v-for="(ingredients, index) in recipe.ingredients"
                v-bind:key="index"
              >
                {{ ingredients }}
              </li>
            </ul>
            <h3 class="p-2 bg-light border">Instructions</h3>
            <ul class="list-group mb-3">
              <li
                class="list-group-item"
                v-for="(instructions, index) in recipe.instructions"
                v-bind:key="index"
              >
                {{ instructions }}
              </li>
            </ul>
            <h3 class="p-2 bg-light border">Nutrition Facts</h3>
            <p>{{ recipe.nutrition_facts }}</p>
            <p>Course:{{ recipe.course }}</p>
            <p>prep time:{{ recipe.prep_time }}</p>
            <p>Total time:{{ recipe.total_time }}</p>
            <p>Servings:{{ recipe.servings }}</p>
            <p>Cost php:{{ recipe.cost }}</p>
            <router-link
              v-bind:to="'/RecipeEdit/' + this.$route.params.recipeId"
              ><button type="button" class="btn btn-primary ms-2">
                EDIT
              </button></router-link
            >
            <button type="button" class="btn btn-danger ms-2" v-on:click="ProcessDelete">DELETE</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "./NavBar.vue"
import axios from "axios";
const baseAPIUrl = "http://localhost:3000";
export default {
  name: "RecipeDetail",
   props: ["font"],
  async created() {
    console.log(this.$route.params);
    console.log(this.recipeId);
    const recipeId = this.$route.params.recipeId;
    const response = await axios.get(baseAPIUrl + "/recipes/" + recipeId);
    this.recipe = response.data;
  },
  data: function () {
    return {
      recipe: {},
    };
  
  },
  components: {NavBar},

  methods: {
    close() {
      this.$router.push("/recipes");
    },

     async ProcessDelete (){
    
    await axios.delete(baseAPIUrl+ "/recipes/" + this.$route.params.recipeId)
    
    this.$router.push("/recipes")
  }
  },

};
</script>
<style scoped>
.DetailBox {
  max-width: 700px;
  max-height: 100vh;
  font-weight: bold;
  border-radius: 25px;
  border: 2px solid rgb(17, 97, 73);
  font-size: 1.2rem;
  background-color: white;
  justify-content: center;
  overflow: scroll;
}
.closeBtn {
  top: 0;
  position: relative;
  font-size: 30px;
  margin-left: 90%;
}
.detailForm {
  background-image: url("../assets/reBG.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}
</style>
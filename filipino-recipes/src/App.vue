<template>
<div>
<NavBar v-if="page ==='/recipes'|| page ==='add' || page === 'detail' "  v-on:AddPage="selectPage('add')" v-on:mainPage="selectPage('/recipes')" />
<HomePage  v-if="page ==='/recipes'"   v-on:showDetail="showRecipe"/>
<AddRecipe v-if="page ==='add'" v-on:Recipe-added="selectPage('/recipes')" />
<LogIn v-if="page ==='log'" v-on:changePage="selectPage('/recipes')"/>
<RecipeDetail v-if="page ==='detail'" v-on:closeDetail="selectPage('/recipes')"  v-bind:recipeId="recipeBeingShow"/>

</div>


</template>

<script>
import RecipeDetail from "./components/RecipeDetail.vue"
import NavBar from "./components/NavBar.vue"
import HomePage from "./components/HomePage";
import AddRecipe from "./components/AddRecipe";
import LogIn from "./components/LogIn";
 

export default {
 
  name: 'App',
  
  data: function(){
    return{
      "page":"log",
      recipeBeingShow: 0
    }
  },
  components: {
    HomePage,AddRecipe,LogIn,NavBar,RecipeDetail
  
    
  },
  methods: {
    selectPage(turnPage){
      this.page = turnPage;
    },
    showRecipe(recipeId) {
      this.recipeBeingShow = recipeId
      this.selectPage("detail");
    }

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

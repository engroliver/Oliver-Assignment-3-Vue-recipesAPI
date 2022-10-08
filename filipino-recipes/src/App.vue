<template>
<div>


<NavBar v-if="page ==='/recipes'|| page ==='add'" v-on:AddPage="selectPage('add')" v-on:mainPage="selectPage('/recipes')" />
<HomePage  v-if="page ==='/recipes'"  />
<AddRecipe v-if="page ==='add'" v-on:Recipe-added="selectPage('/recipes')" />
<LogIn v-if="page ==='log'" v-on:changePage="selectPage('/recipes')"/>
<RecipeDetail v-on:showInfo="modal"/>
 
</div>


</template>

<script>
 import HomePage from "./components/HomePage";
 import AddRecipe from "./components/AddRecipe";
 import LogIn from "./components/LogIn";
 import NavBar from "./components/NavBar";
 import RecipeDetail from "./components/RecipeDetail.vue" 

export default {
 
  name: 'App',
  
  data: function(){
    return{
      "page":"log"

    }
  },
  components: {
    HomePage,AddRecipe,LogIn,NavBar,RecipeDetail
  
    
  },
  methods: {
    selectPage(turnPage){
      this.page = turnPage;
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

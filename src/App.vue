A<template>
  <div>
    <HomePage v-if="this.$router === '/recipes'" />
    <RecipeDetail v-if="this.$router === '/Rdetail/:recipeId'" />
    <NavBar
      v-if="
        this.$router === '/recipes' ||
        this.$router === '/add' ||
        this.$router === '/Rdetail/:recipeId'
      "
    />
    <AddRecipe v-if="this.$router === '/add'" />
    <LogIn v-if="this.$router === '/'" />
   
    <router-view></router-view>
  </div>
</template>

<script>
import HomePage from "./components/HomePage.vue";
import RecipeDetail from "./components/RecipeDetail.vue";
import AddRecipe from "./components/AddRecipe";
import LogIn from "./components/LogIn";
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",

  data: function () {
    return {};
  },
  components: {
    HomePage,
    RecipeDetail,
    AddRecipe,
    LogIn,
    NavBar,
   
  },
  methods: {},
};
</script>

<style>
.form {
  width: 15%;
  height: 100vh;
  background-color: rgb(254, 250, 250);
  position: absolute;
}
.search-icon {
  display: block;
}
</style>

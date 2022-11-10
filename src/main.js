
import Vue from "vue";
import App from './App.vue'
import Router from "vue-router";



import "bootstrap/dist/css/bootstrap.css"
import HomePage from './components/HomePage.vue'
import AddRecipe from './components/AddRecipe.vue'
import LogIn from './components/LogIn.vue'
import RecipeDetail from './components/RecipeDetail'
import EditRecipe from './components/EditRecipe'

Vue.config.productionTip = false

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes:[

        {
            path: '/',
            name: 'Log',
            component: LogIn
        },
        {
            path:'/recipes',
            name:'Home',
            component:HomePage
        },
        {
            path: '/add',
            name: 'AddRecipes',
            component: AddRecipe
        },
        {
            path: '/Rdetail/:recipeId' ,
            name: 'RecipeDetail',
            component: RecipeDetail
        },
        {
            path: '/RecipeEdit/:recipeId',
            name: 'RecipeEdit',
            component: EditRecipe
        },
        
        
    ]
})


new Vue({
    router: router,
    render: (h) => h(App)
}).$mount("#app");
import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'

import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css"
import VueToastr from "vue-toastr";
import HomePage from './components/HomePage.vue'
import AddRecipe from './components/AddRecipe.vue'
import LogIn from './components/LogIn.vue'
import RecipeDetail from './components/RecipeDetail'
import EditRecipe from './components/EditRecipe'

const router = createRouter({
    history: createWebHistory(),
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



createApp(App).use(router, VueToastr).mount('#app')

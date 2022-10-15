import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'

import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css"

import HomePage from './components/HomePage.vue'
import AddRecipe from './components/AddRecipe.vue'
import LogIn from './components/LogIn.vue'
import RecipeDetail from './components/RecipeDetail'

const router = createRouter({
    history: createWebHistory(),
    routes:[

        {
            path: '/login',
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
        
        
    ]
})



createApp(App).use(router).mount('#app')

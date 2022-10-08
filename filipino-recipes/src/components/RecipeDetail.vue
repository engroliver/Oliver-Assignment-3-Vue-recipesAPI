<template>
<div>
<!-- Vertically centered scrollable modal -->
<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content" v-for=" r  in this.recipes" v-bind:key="r._id">>
      <div class="modal-header">
        <h5 class="modal-title">{{r.title}}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>{{r.description}}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
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
props:{
    msg:String
},
data:function(){
    return{
        recipes:[]
    }
},
components:{

},
methods: {
      async created() {
    const response = await axios.get(baseAPIUrl +'/recipes',)
    this.recipes = response.data;
  }
},
    
}
</script>
<style scoped>

</style>

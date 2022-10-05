<template>
 <div>
 
   <div class="row  mx-auto text-center shareForm">
   <div id="share" class="container mt-3">
      <div class="row my-5 mx-auto">
      <form class="text-center p-10">
        <h2 class="shareTitle">SHARE YOUR OWN RECIPE</h2>
          <div class="mb-2">
            <div class="errordiv"></div>
              <label  class="form-label">Title</label>
              <input id="name" type="text" class="form-control form-control-sm" >
            </div>
            <div class="mb-2">
              <label  class="form-label">Description (optional)</label>
              <textarea class="form-control form-control-sm" id="discription" rows="3"></textarea>
            </div>  
            <div class="errordiv"></div>
              <div class="mb-2">
              <label  class="form-label">Ingredients</label>
              <textarea id="Ingredients" type="text" class="form-control form-control-sm" rows="3" ></textarea>
            </div>
            <div class="errordiv"></div>
            <div class="mb-2">
              <label  class="form-label">Instructions</label>
              <textarea id="Instruction" type="text" class="form-control form-control-sm" rows="3" ></textarea>
            </div>
            <div class="errordiv"></div>
            <div class="mb-2">
              <label  class="form-label">Nutrition Facts</label>
              <input id="nutriFacts" type="text" class="form-control form-control-sm" >
            </div>
            <div class="errordiv"></div>
            <div class="mb-2">
              <label  class="form-label">Prep Time</label>
              <input id="prep_time" type="text" class="form-control form-control-sm" >
            </div>
            <div class="errordiv"></div>
            <div class="mb-2">
              <label  class="form-label">Cook time</label>
              <input id="cook_time" type="text" class="form-control form-control-sm" >
            </div>
            <div class="errordiv"></div>
            <div class="mb-2">
              <label  class="form-label">Total time</label>
              <input id="total_time" type="text" class="form-control form-control-sm" >
            </div>
            <div class="errordiv"></div>
            <div class="mb-2">
              <label  class="form-label">Servings</label>
              <input id="servings" type="number" min="1" max="100" class="form-control form-control-sm" >
            </div>
            <div class="errordiv"></div>
            <div class="mb-2">
              <label  class="form-label">Cost</label>
              <input id="cost" min="1" type="text" class="form-control form-control-sm" >
            </div>
            <div class="mb-2">
              <label class="form-label">Upload Image</label>
              <input class="form-control form-control-sm" type="file">
            </div>
            <button class=" btn btn-success  shareBtn mt-3  "> SHARE</button>
      
    
     
      </form>
      </div>
   </div>
</div> 


  </div>
</template>

<script>
export default {
  name: 'AddRecipe',
  props: {
    msg: String
  },
   components: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
#share{
  max-width: 700px;
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

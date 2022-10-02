<template>
 <div class=Log>
  <h1 class="title"> Lasang Pinoy </h1>
  <h2 class="title"> a taste of filipino causine at the comfort of youre house </h2>
  <h3 class="title"> share and try</h3>
  <div class="loginbox">
    <h3>Login</h3>
   <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email-add">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" placeholder="password" id="exampleInputPassword1">
  </div>
 
  <button type="submit" class="btn btn-success logBtn" v-on:click="newPage">Login</button>
  <span class="signUp">Sign Up</span>
  
</form>

  </div>

  </div>
</template>

<script>
export default {
  name: 'LogIn',
  props: {
    msg: String
  },
  methods: {
    newPage(){
      this.$emit("changePage")
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Log{
background-image: url("../assets/LogBG.jpg");
height:100vh;
background-size: cover;

}
.loginbox{
   border-radius: 25px;
  border: 2px solid rgb(17, 97, 73);
  padding: 20px;
  width: 300px;
  height: 450px;
  background-color:white;
  position: relative;
  margin-top: 5%;
  margin-left: 38%;
  border-width: 5px;
  text-align: center;
}
.title{
  color: white;
}
.logBtn{
  padding: 1em;
		color: hsl(0 0 100);
		border: none;
		border-radius: 30px;
		font-weight: 600;
    width: 250px;
    margin-top: 20px;
}
.signUp{
margin-top: 50px;
}

</style>

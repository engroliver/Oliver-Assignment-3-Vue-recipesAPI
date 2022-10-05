<template>
 <div class=Log>
  <h3 class="title"> Lasang Pinoy a taste of Filipino cuisine to try or share </h3><br>
 <!-- Login -->
  <div class="loginbox" v-bind:style="{display:loginBox}">
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
  <!-- footer -->
  <div class=footer>

    <span>Not a member yet? <button type="button" class="btn btn-outline-success btn-sm" v-on:click="signPage">SignUp</button></span><br>
   <span>Forgotten password? <a href="#">Reset password</a></span><br>

  </div>
</form>

  </div>
<!-- Sign Up form -->
  <div class="SignupBox" v-bind:style="{display:SignBox}" >
    <form>
      <h3>Create your account</h3>
      <button type="button" class="btn-close closeBtn" aria-label="Close" v-on:click="close"></button>
      <input type="text" class="form-control mt-1"  placeholder="First name">
      <input type="text" class="form-control mt-2"  placeholder="Surname">
      <input type="email" class="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email-add">
      <input type="date" class="form-control mt-2">
      <input type="text" class="form-control mt-2"  placeholder="Username">
      <input type="text" class="form-control mt-2"  placeholder="Password">
      <button type="submit" class="btn btn-success signBtn" v-on:click="close" >Sign up</button>
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
  data: function(){
    return{
      loginBox:"",
      SignBox:"none"
    }
  },
  methods: {
    newPage(){
      this.$emit("changePage")
    },
    signPage(){
      this.loginBox ="none"
      this.SignBox = ""
    },
    close(){
      this.loginBox=""
      this.SignBox="none"
    }
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Recursive&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');

.Log{
background-image: url("../assets/LogBG.jpg");
height:100vh;
background-size: cover;
display: flex;
position: relative;
}
.loginbox{
  border-radius: 25px;
  border: 2px solid rgb(17, 97, 73);
  padding: 20px;
  width: 350px;
  height: 450px;
  background-color:white;
  position: absolute;
  margin-top: 8%;
  margin-left: 38%;
  border-width: 5px;
  text-align: center;
  font-family: 'Oswald', sans-serif;

  
}
.title{
  color:white;
  text-shadow:5px 5px 5px black;
  display: flex;
  position: relative;
  font-size: 3em;
  font-weight: 700;
  text-transform: uppercase;
  font-family: 'Recursive', sans-serif;
    

}
.logBtn{
    padding: 1em;
		border: none;
		border-radius: 30px;
		font-weight: 600;
    width: 250px;
    margin-top: 20px;
}
.signBtn{
    padding: 1em;
    border: none;
		border-radius: 30px;
		font-weight: 600;
    width: 250px;
    margin-top: 20px;
}
.footer{
    margin-top: 60px;
    position: relative;
    text-align: center;
}
.SignupBox{
  border-radius: 25px;
  border: 2px solid rgb(17, 97, 73);
  padding: 20px;
  width: 350px;
  height: 450px;
  background-color:white;
  position: absolute;
  margin-top: 8%;
  margin-left: 38%;
  border-width: 5px;
  text-align: center;
  font-family: 'Oswald', sans-serif;
 
}
.closeBtn{
  position: absolute;
  top:0;
  margin-top: 10px;
  font-size: 20px;  
  right: 14px;
}
#regtitle{
 
  position: relative;
  font-size: 1rem;
 
}

</style>

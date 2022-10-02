<template>
 <div class=Log>
  
  <div class="loginbox">
    <h3>Login</h3>
   <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
 
  <button type="submit" class="btn btn-success ">Submit</button>
</form>

  </div>

  </div>
</template>

<script>
export default {
  name: 'LogIn',
  props: {
    msg: String
  }
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
  height: 300px;
  background-color:white;
  position: absolute;
  margin-top: 10%;
  margin-left: 40%;
  border-width: 5px;
  text-align: center;
}
</style>

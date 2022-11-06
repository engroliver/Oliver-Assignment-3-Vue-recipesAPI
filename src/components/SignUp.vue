<template>
<div>
    <!-- Sign Up form -->
    <div
   
      class="row mx-auto text-center SignupBox"
       v-bind:style="{fontFamily:fontstyle}"
    >
      <div class="container">
        <div class="row mx-auto">
          <form class="text-center p-10">
            <button
              type="button"
              class="btn-close closeBtn"
              aria-label="Close"
              v-on:click="close"
            ></button>
            <h3>Create your account</h3>
            <div v-if="valFirstnameok === 'false'" class="error">PlEASE PROVIDE NAME</div>
            <input
              type="text"
              class="form-control mt-1"
              v-model="FirstName"
              placeholder="First name"
            />
            <div v-if="error === 'surename'" class="error">Surename too short</div>
            <input
              type="text"
              class="form-control mt-2"
              v-model="SurName"
              placeholder="Surname"
            />
            <div v-if="error === 'email'" class="error">invalid email adress</div>
            <input
              type="email"
              class="form-control mt-2"
              v-model="email"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="email-add"
            />
            
            <input
              type="date"
              class="form-control mt-2"
              data-date-format="yyyy-mm-dd"
              v-model="BirthDate"
            />
            <div v-if="error === 'username'" class="error">invalid username</div>
            <input
              type="text"
              class="form-control mt-2"
              v-model="UserNameSignup"
              placeholder="Username"
            />
            
            <div v-if="error === 'password'" class="error">invalid password</div>
            <input
              type="password"
              class="form-control mt-2"
              v-model="PasswordSignup"
              placeholder="Password"
            />
            <button
              type="submit"
              class="btn btn-success signBtn"
              v-on:click="RegisterAccount"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const baseAPIUrl = "http://localhost:3000";

export default {
    
  name: "SignUp",
  props: ["fontstyle"],
  data: function () {
    return {
      FirstName: "",
      SurName: "",
      email: "",
      BirthDate: "",
      UserNameSignup: "",
      PasswordSignup: "",
      error:[]
    };
  },
  computed:{
    valFirstnameOk: function () {
      if (this.FirstName.length >= 7) {
        return true;
      } else {
        return false;
      }

  },
  },
  methods: {
      close() {
      this.$emit("closeSignUpBox")
    },
      validateForm(){
    
      },


    async RegisterAccount() {
      const addAcount = {
        email: this.email,
        name: this.FirstName,
        lastname: this.SurName,
        birthday: this.BirthDate,
        username: this.UserNameSignup,
        password: this.PasswordSignup,
      };
        //    if (!this.FirstName){
        //     this.error.push("name");
        // }
        // if(!this.SurName){
        //   this.error.push("surename");
        // }
        // if(!this.email){
        //     this.error.push("email");
        // }

        // if(!this.UserNameSignup){
        //   this.error.push("username");
        // }
        // if(!this.PasswordSignup){
        //   this.error.push("password");
        // }else if (this.error =""){}
                try {
        await axios.post(baseAPIUrl + "/register", addAcount);
      } catch (e) {
        alert("Registration Failed");
      }
        
       

    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Recursive&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");



.signBtn {
  padding: 1em;
  border: none;
  border-radius: 30px;
  font-weight: 600;
  width: 250px;
  margin-top: 20px;
}
.footer {
  margin-top: 60px;
  position: relative;
  text-align: center;
}
.SignupBox {
  border-radius: 25px;
  border: 2px solid rgb(17, 97, 73);
  padding: 20px;
  width: 350px;
  height: 475px;
  background-color: white;
  border-width: 5px;
  text-align: center;
  max-height: 600px;
 
}
.closeBtn {
  top: 0;
  position: relative;
  font-size: 20px;
  margin-left: 250px;
}
.error{
  color:red
}

</style>

<template>
  <div class="Log">
    <h3 class="title mb-3">
      Lasang Pinoy a taste of Filipino cuisine to try or share
    </h3>
    <br />
    <div
      class="row mx-auto text-center loginbox"
      v-bind:style="{ display: loginBox }"
    >
      <div id="share" class="container">
        <div class="row mx-auto">
          <form class="text-center p-10">
            <h2>LOGIN</h2>
            <div class="mb-3">
              <label class="form-label">Username</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="username"
                v-model="userName"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >Password</label
              >
              <input
                type="password"
                class="form-control"
                placeholder="password"
                id="exampleInputPassword1"
                v-model="password"
              />
            </div>
            <button
              type="submit"
              class="btn btn-success logBtn"
              v-on:click="loginData"
            >
              Login
            </button>
            <!-- footer -->
            <div class="footer">
              <span
                >Not a member yet?
                <button
                  type="button"
                  class="btn btn-outline-success btn-sm"
                  v-on:click="signPage"
                >
                  SignUp
                </button></span
              ><br />
              <span>Forgotten password? <a href="#">Reset password</a></span
              ><br />
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- Sign Up form -->
    <div
      class="row mx-auto text-center SignupBox"
      v-bind:style="{ display: SignBox }"
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
            <input
              type="text"
              class="form-control mt-1"
              v-model="FirstName"
              placeholder="First name"
            />
            <input
              type="text"
              class="form-control mt-2"
              v-model="SurName"
              placeholder="Surname"
            />
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
            <input
              type="text"
              class="form-control mt-2"
              v-model="UserNameSignup"
              placeholder="Username"
            />
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
  name: "LogIn",
  props: {
    msg: String,
  },
  data: function () {
    return {
      loginBox: "",
      SignBox: "none",
      userName: "",
      password: "",
      FirstName: "",
      SurName: "",
      email: "",
      BirthDate: "",
      UserNameSignup: "",
      PasswordSignup: "",
    };
  },
  methods: {
    signPage() {
      this.loginBox = "none";
      this.SignBox = "";
    },
    close() {
      this.loginBox = "";
      this.SignBox = "none";
    },

    async loginData(event) {
      event.preventDefault()
      const loginAccount = {
        username: this.userName,
        password: this.password,
        
      };
      let accountData = await axios.post(baseAPIUrl + "/login", loginAccount);
      console.log(accountData, "my account");
      if (
        accountData.data.accessToken
      ) {
        this.$router.push("/recipes");
      }
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

.Log {
  background-image: url("../assets/LogBG.jpg");
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.loginbox {
  border-radius: 25px;
  border: 2px solid rgb(17, 97, 73);
  padding: 20px;
  width: 350px;
  height: 450px;
  background-color: white;

  border-width: 5px;
  text-align: center;
  font-family: "Oswald", sans-serif;
}
.title {
  color: white;
  text-shadow: 5px 5px 5px black;
  display: flex;
  position: relative;
  font-size: 3em;
  font-weight: 700;
  text-transform: uppercase;
  font-family: "Recursive", sans-serif;
}
.logBtn {
  padding: 1em;
  border: none;
  border-radius: 30px;
  font-weight: 600;
  width: 250px;
  margin-top: 20px;
}
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
  font-family: "Oswald", sans-serif;
}
.closeBtn {
  top: 0;
  position: relative;
  font-size: 20px;
  margin-left: 250px;
}
#regtitle {
  position: relative;
  font-size: 1rem;
}
</style>

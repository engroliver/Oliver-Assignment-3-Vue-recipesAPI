<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />

    <!-- NAVBAR -->
    <nav class="navbar navbar-expand-lg bg-success py-0" v-bind:class=" { 'navbarOpen': show }">
      <div class="container-fluid">
        <a class="navbar-brand mb-0 h1" href="#"
          ><img src="../assets/logo2.png" alt="" width="60" height="48" />LASANG
          PINOY</a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          @click.stop="toggleNavbar()"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent" v-bind:class="{ 'show': show }">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/recipes"
                ><a class="nav-link active navLink" aria-current="page" href="#"
                  >HOME</a
                ></router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/add"
                ><a class="nav-link active navLink">ADD RECIPE</a></router-link
              >
            </li>
          </ul>
          <router-link to="/"
            ><a class="fa fa-sign-out SignOut">Logout</a></router-link
          >
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "NavBar",
  props: [],
  data: function () {
    return {
      visible: false,
       show: true
    };
  },
  methods: {
    addPage() {
      this.$emit("AddPage");
    },
    homePage() {
      this.$emit("mainPage");
    },
    toggleNavbar() {
      this.show = !this.show
    }
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");
.navLink {
  font-family: "Oswald", sans-serif;

  font-size: 1.3rem;
}
.navbar-brand {
  font-family: "Oswald", sans-serif;
  font-weight: bold;
  font-size: 2rem;
}
.SignOut {
  color: black;
  font-family: "Oswald", sans-serif;
  font-size: 1.4rem;
}
</style>
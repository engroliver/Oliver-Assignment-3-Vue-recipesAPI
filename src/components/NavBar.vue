<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />

    <!-- NAVBAR -->
    <nav class="navbar navbar-expand-lg bg-success py-0">
      <div class="container-fluid">
        <a class="navbar-brand mb-0 h1" href="#"
          ><img src="../assets/logo2.png" alt="" width="60" height="48" />LASANG
          PINOY</a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/recipes"
                ><a class="nav-link active navLink" aria-current="page" href="#"
                  >Home</a
                ></router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/add"
                ><a class="nav-link active navLink">Addrecipe</a></router-link
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
  props: {
    msg: String,
  },
  methods: {
    addPage() {
      this.$emit("AddPage");
    },
    homePage() {
      this.$emit("mainPage");
    },
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
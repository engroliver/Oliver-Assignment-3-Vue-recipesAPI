<template>
  <div>
    <NavBar />

    <div class="container-fluid overflow-hidden HomeForm">
      <div class="row vh-100 overflow-auto">
        <div class="col-12 col-sm-3 col-xl-2 px-sm-2 px-0 bg-sucess d-flex">
          <div
            class="
              d-flex
              flex-sm-column flex-row flex-grow-1
              align-items-center align-items-sm-start
              px-3
              pt-2
            "
          >
            <div class="row mx-auto text-center  searchCol">
              <div class="container">
                <div class="row mx-auto">
                  <form class="text-center p-10">
                    <h2>FIND A RECIPE</h2>
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        class="form-control mt-4"
                        placeholder="Food name"
                        v-model="FoodName"
                      />
                      <button class="btn btn-success btn-sm mt-4" type="button">
                        Search
                      </button>
                    </div>
                    <div class="input-group mb-3">
                      <h4>Select Course</h4>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="flexCheckDefault"
                          v-model="BreakFast"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Breakfast
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="flexCheckChecked"
                          checked
                          v-model="MainCourse"
                        />
                        <label class="form-check-label" for="flexCheckChecked">
                          Main Course
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="flexCheckChecked"
                          checked
                          v-model="Dessert"
                        />
                        <label class="form-check-label" for="flexCheckChecked">
                          Dessert
                        </label>
                      </div>
                    </div>
                    <div class="input-group mb-3">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        v-model="recipeCost"
                      >
                        <option value="">preferred cost</option>
                        <option value="250">P250 or lesser</option>
                        <option value="500">P500 or lesser</option>
                        <option value="1000">P1000 or lesser</option>
                      </select>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col d-flex flex-column h-sm-100">
          <div class="row row-cols-1 row-cols-md-2 g-4 mt-4">
            <div class="col mt-4" v-for="r in searchResults" v-bind:key="r._id">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">{{ r.title }}</h5>
                  <img
                    :src="r.url"
                    class="card-img-top"
                    height="400px"
                    width="200px"
                  />
                  <p class="card-text">{{ r.description }}</p>
                  <p class="card-text">Course:{{ r.course }}</p>
                  <p class="card-text">Cost php:{{ r.cost }}</p>
                  <router-link v-bind:to="'/Rdetail/' + r._id">
                    <button class="btn btn-success">show</button></router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- FORM SEARCH  -->
  </div>
</template>


<script>
import NavBar from "./NavBar.vue";
import axios from "axios";
const baseAPIUrl = "http://localhost:3000";
export default {
  name: "HomePage",
  props: {
    msg: String,
  },
  data: function () {
    return {
      recipes: [],
      FoodName: "",
      BreakFast: true,
      MainCourse: true,
      Dessert: true,
      recipeCost: "",
    };
  },

  computed: {
    searchResults() {
      return this.recipes
        .filter((r) => {
          if (r.title) {
            return r.title.toLowerCase().includes(this.FoodName.toLowerCase());
          }
          return true;
        })
        .filter((r) => {
          console.log(r);
          if (this.BreakFast && this.Dessert && this.MainCourse) {
            return (
              r.course.includes("Dessert") ||
              r.course.includes("Breakfast Meal") ||
              r.course.includes("Main Course")
            );
          }
          if (this.MainCourse && this.BreakFast) {
            return (
              r.course.includes("Breakfast Meal") ||
              r.course.includes("Main Course")
            );
          }
          if (this.MainCourse && this.Dessert) {
            return (
              r.course.includes("Dessert") || r.course.includes("Main Course")
            );
          }
          if (this.BreakFast && this.Dessert) {
            return (
              r.course.includes("Dessert") ||
              r.course.includes("Breakfast Meal")
            );
          }
          if (this.BreakFast) {
            return r.course.includes("Breakfast Meal");
          }
          if (this.MainCourse) {
            return r.course.includes("Main Course");
          }
          if (this.Dessert) {
            return r.course.includes("Dessert");
          }
          return true;
        })
        .filter((r) => {
          if (this.recipeCost != "") {
            return Number(r.cost) <= this.recipeCost;
          }
          return true;
        }) ;
    },
  },
  components: { NavBar },
  methods: {},
  async created() {
    const response = await axios.get(baseAPIUrl + "/recipes");
    this.recipes = response.data;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Recursive&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");
.recipes {
  margin-left: 16%;
}
.form {
  width: 15%;
  height: 100vh;
  background-color: rgb(254, 250, 250);
  position: absolute;
}

* {
  margin: 0;
  padding: 0;
}
.HomeForm {
  font-family: "Oswald", sans-serif;
  font-size: 1.2em;
  justify-content: center;
  display: flex;
}
.card-title {
  font-weight: Bold;
}
</style>
const app = Vue.createApp({
  data() {
    return {
      name: "Tom",
      age: 34,
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/e/e3/Harvest_Straw_Bales_in_Schleswig-Holstein.jpg",
    };
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    },
    randomNumber() {
      return Math.random();
    },
  },
});

app.mount("#assignment");

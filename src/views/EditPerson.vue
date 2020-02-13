<template>
  <div>
    <h1>{{ title }}</h1>
    <div>
      <b-form-group>
        <b-form-input
          class="input-field"
          v-model="person.name"
          placeholder="Name"
        ></b-form-input>
        <b-form-input
          class="input-field"
          v-model="person.phone"
          placeholder="Phone"
        ></b-form-input>
        <b-form-input
          class="input-field"
          v-model="person.address.street"
          placeholder="Street"
        ></b-form-input>
        <b-form-input
          class="input-field"
          v-model="person.address.zip"
          placeholder="Zip"
        ></b-form-input>
        <b-form-input
          class="input-field"
          v-model="person.address.city"
          placeholder="City"
        ></b-form-input>
      </b-form-group>
    </div>
    <b-row>
      <b-col lg="6" class="pb-2">
        <b-button variant="success" @click="saveUser">Save</b-button>
      </b-col>

      <b-col lg="6" class="pb-2">
        <b-button variant="outline-primary" @click="cancelChanges"
          >Cancel</b-button
        >
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import router from "@/router";

export default {
  name: "Edit",
  data() {
    return {
      person: undefined,
      tempPerson: undefined,
      title: "Edit person"
    };
  },
  computed: {
    ...mapGetters(["getPersonById"])
  },
  methods: {
    ...mapActions(["savePerson"]),
    saveUser() {
      this.savePerson(this.person);
      router.push({ name: "home" });
    },
    cancelChanges() {
      Object.assign(this.person, this.tempPerson);
      router.push({ name: "home" });
    }
  },
  beforeMount() {
    if (this.$route.params.personId == 0) {
      this.person = {
        id: Math.floor(Math.random() * 100 + 1),
        name: "",
        phone: "",
        address: {
          city: "",
          street: "",
          zip: ""
        }
      };
      this.title = "Add person";
    } else {
      this.person = this.getPersonById(this.$route.params.personId);
      this.tempPerson = Object.assign({}, this.person);
      this.title = "Edit " + this.person.name;
    }
  },
  created() {
    this.tempPerson = this.person;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input-field {
  margin: 10px;
}
</style>

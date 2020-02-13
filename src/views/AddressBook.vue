<template>
  <div class="hello">
    <b-table striped hoved :items="persons" :fields="fields">
      <template v-slot:cell(address)="data">
        <div>{{ data.item.address.street }}</div>
        <div>{{ data.item.address.zip }}</div>
        <div>{{ data.item.address.city }}</div>
      </template>
      <template v-slot:cell(edit)="cell">
        <b-icon icon="pencil" @click="editPerson(cell.item.id)"></b-icon>
      </template>
      <template v-slot:cell(delete)="cell">
        <b-icon
          icon="x-circle"
          @click="deleteSelectedPerson(cell.item.id)"
        ></b-icon>
      </template>
    </b-table>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import router from "@/router";
export default {
  name: "AddressBook",
  data() {
    return {
      persons: undefined,
      fields: [
        {
          key: "name",
          label: "Name"
        },
        {
          key: "address",
          formatter: "returnAddress"
        },
        {
          key: "phone",
          label: "Phone No"
        },
        {
          key: "edit",
          label: "Edit"
        },
        {
          key: "delete",
          label: "Delete"
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["getPersons"])
  },
  methods: {
    /* eslint-disable no-debugger */
    ...mapActions(["deletePerson"]),
    returnAddress(value) {
      return `${value.first}`;
    },
    editPerson(personId) {
      router.push({ name: "edit", params: { personId: personId } });
    },
    deleteSelectedPerson(personId) {
      this.deletePerson(personId);
      this.persons = this.getPersons;
    }
  },
  props: {
    msg: String
  },
  mounted() {
    this.persons = this.getPersons;
  }
};
</script>


import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    persons: [
      {
        id: 1,
        name: "Kristian Winther",
        address: {
          street: "Steinåsen 3A",
          zip: "7049",
          city: "Trondheim"
        },
        phone: "75575577"
      },
      {
        id: 2,
        name: "Terje Winther",
        address: {
          street: "Bamseveien 74",
          zip: "8029",
          city: "Bodø"
        },
        phone: "99889988"
      },
      {
        id: 3,
        name: "Ola McNaboface",
        address: {
          street: "Steinåsen 3B",
          zip: "7049",
          city: "Trondheim"
        },
        phone: "88998899"
      }
    ]
  },
  /* eslint-disable no-debugger */
  mutations: {
    save_person(state, inputPerson) {
      var newUser = true;
      state.persons.find(person => {
        if (person.id.toString() === inputPerson.id.toString()) {
          person = inputPerson;
          newUser = false;
        } else {
          return false;
        }
      });
      if (newUser) {
        state.persons.push(inputPerson);
      }
    },
    delete_person(state, personId) {
      var newList;
      newList = state.persons.filter(person => {
        return person.id.toString() !== personId.toString();
      });
      state.persons = newList;
    }
  },
  getters: {
    getPersonById: state => personId => {
      var returnPerson;
      var person = state.persons.find(
        person => person.id.toString() === personId.toString()
      );
      returnPerson = person;
      return returnPerson;
    },
    getPersons: state => {
      return state.persons;
    }
  },
  actions: {
    savePerson(context, existingPerson) {
      context.commit("save_person", existingPerson);
    },
    addPerson(context, newPerson) {
      context.commit("save_person", newPerson);
    },
    deletePerson(context, personId) {
      context.commit("delete_person", personId);
    }
  },
  modules: {}
});

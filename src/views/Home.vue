<template>
  <div class="home">
    <AddressBook />
  </div>
</template>

<script>
// @ is an alias to /src
import AddressBook from "@/views/AddressBook.vue";

export default {
  name: "home",
  components: {
    AddressBook
  }
};
</script>

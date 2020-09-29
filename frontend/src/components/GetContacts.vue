<template>
  <b-container fluid="sm" class="w-50">
    <div v-for="(contact, idx) in contacts" v-bind:key="contact._id">
      <b-card :title="contact.name" class="mt-3 mb-3">
        <b-card-text>
          {{contact.email}}
          {{contact.phone}}
          {{contact.gender}}
        </b-card-text>

        <b-button variant="primary" size="sm" class="mr-2" @click="editContact(contact._id)">Edit</b-button>
        <b-button variant="danger" size="sm" @click="deleteContact(idx, contact._id)">Delete</b-button>
      </b-card>
    </div>
  </b-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'GetContacts',
  data() {
    return {
      contacts: null
    }
  },
  mounted() {
    axios.get('https://t0ytqu2r81.execute-api.us-east-2.amazonaws.com/production/contacts')
      .then(response => {
        this.contacts = response.data;
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      })
  },
  methods: {
    editContact(id) {
      this.$router.push({ name: 'Edit', params: { id: id } })
    },
    deleteContact(idx, id) {
      this.isLoadingContact = true;
      console.log(idx);
      axios.delete('https://t0ytqu2r81.execute-api.us-east-2.amazonaws.com/production/contacts/' + id)
        .then(response => {
          this.contacts.splice(idx, 1);
          this.isLoadingContact = false;
          console.log(response.data);
        })
        .catch(err => {
          console.log(err);
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  text-align: left
}
</style>

<template>
  <b-container fluid="sm" class="w-50">
    <h3>Edit A Contact</h3>
    <b-spinner v-if="isLoadingContact" variant="primary" label="Loading"></b-spinner>
    <b-form v-else @submit.prevent="updateContact">
        <b-form-input v-model="contact.name" class="mb-3" placeholder="Name" required/>

        <b-form-input v-model="contact.email" class="mb-3" placeholder="user@email.com" required/>

        <b-form-input v-model="contact.phone" class="mb-3" placeholder="91234567" required/>

        <b-form-input v-model="contact.gender" class="mb-3" placeholder="Gender" required/>

        <b-spinner v-if="isLoading" variant="primary" label="Loading"></b-spinner>
        <b-button v-else variant="primary" type="submit">Submit</b-button>
    </b-form>
  </b-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'EditContact',
  data() {
    return {
      isLoadingContact: true,
      isLoading: false,
      contact: null
    }
  },
  mounted() {
    axios.get('https://t0ytqu2r81.execute-api.us-east-2.amazonaws.com/production/contacts/' + this.$route.params.id)
        .then(response => {
            this.contact = response.data;
            this.isLoadingContact = false;
        })
        .catch(err => {
            console.log(err);
        })
  },
  methods: {
    updateContact() {
        this.isLoading = true;
        const newContact = {
            name: this.contact.name,
            email: this.contact.email,
            phone: this.contact.phone,
            gender: this.contact.gender
        }

        axios.put('https://t0ytqu2r81.execute-api.us-east-2.amazonaws.com/production/contacts/' + this.$route.params.id, newContact)
        .then(response => {
            this.data = response;
            console.log(response);
            this.isLoading = false;
            this.contact = {
                name: '',
                email: '',
                phone: '',
                gender: ''
            };
        })
        .catch(err => {
            console.log(err)
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

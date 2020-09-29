<template>
  <b-container fluid="sm" class="w-50">
    <h3>Create A Contact</h3>
    <b-form @submit.prevent="submitData">
        <b-form-input v-model="contact.name" class="mb-3" placeholder="Name" required/>

        <b-form-input v-model="contact.email" class="mb-3" placeholder="user@email.com" required/>

        <b-form-input v-model="contact.phone" class="mb-3" placeholder="91234567" />

        <b-form-input v-model="contact.gender" class="mb-3" placeholder="Gender" />

        <b-spinner v-if="isLoading" variant="primary" label="Loading"></b-spinner>
        <b-button v-else variant="primary" type="submit">Submit</b-button>
    </b-form>
  </b-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'PostContact',
  props: {
    msg: String
  },
  data() {
    return {
      isLoading: false,
      contact: {
          name: '',
          email: '',
          phone: '',
          gender: ''
      }
    }
  },
  methods: {
    submitData() {
        this.isLoading = true;

        axios.post('https://t0ytqu2r81.execute-api.us-east-2.amazonaws.com/production/contacts', this.contact)
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

<template>
  <div>
    <h1>Post Contacts</h1>
    <form>
        <input v-model="contact.name" placeholder="Name" />
        Name is {{contact.name}}
        <p></p>
        <input v-model="contact.email" placeholder="user@email.com" />
        Email is {{contact.email}}
        <p></p>
        <input v-model="contact.phone" placeholder="91234567" />
        Phone number is {{contact.phone}}
        <p></p>
        <input v-model="contact.gender" placeholder="Gender" />
        Gender is {{contact.gender}}
        <input type="button" value="Submit" @click="submitData">
    </form>
  </div>
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
        axios.post('https://t0ytqu2r81.execute-api.us-east-2.amazonaws.com/production/contacts', this.contact)
        .then(response => {
            this.data = response;
            console.log(response);
        })
        .catch(err => {
            console.log(err)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<template>
  <div class="container">
    <ul>
      <li v-for="contact in contacts" v-bind:key="contact._id">
        {{ contact.name }}
      </li>
    </ul>
  </div>
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
        console.log(err)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  text-align: left
}
</style>

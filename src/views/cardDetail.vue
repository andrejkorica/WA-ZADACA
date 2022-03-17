<template>
      <v-container  v-if = "commit.commit">
      <v-card>
                   
              <v-card-title>{{shaID}}</v-card-title>
              <v-card-subtitle>{{ commit.commit.author.name }}</v-card-subtitle>
              <v-card-subtitle>{{ commit.commit.author.email }}</v-card-subtitle>
              <v-card-subtitle>{{ commit.commit.message }}</v-card-subtitle>
              <v-card-subtitle>{{ commit.commit.author.date }}</v-card-subtitle>
              
         <v-btn @click="HomeFun" style="margin: 1rem 1rem;">Nazad</v-btn>
      </v-card>

      
      </v-container>



</template>

<script>
import axios from 'axios'

export default {
name: 'cardDetail',
data(){
    return{
      shaID: this.$route.params.shaID,
      commit: [],
    }
  },
  async mounted(){
    const neka = await axios.get(`https://api.github.com/repos/vuejs/vue/commits/${this.shaID}`)
    this.commit = neka.data
 
  },
    methods:{
        HomeFun(){
            this.$router.push('/')
        }
    }
}

</script>

<style>

</style>
<template>
  <div class="home">
    <card v-for = "commits in commits" :key="commits.sha" :details = "commits.commit.message" :id = "commits.sha"/>
  </div>
</template>

<script>
import axios from 'axios'
import card from '@/components/cards.vue'
export default {
  name: 'Home',
  components: {
    card,
  },
  data(){
    return{
      commits: []
    }
  },
  async mounted(){
    const neka = await axios.get("https://api.github.com/repos/vuejs/vue/commits")
    this.commits = neka.data
    console.log(this.commits)
  }

}
</script>

<template>
  <v-container>
    <v-card>
        <v-card-title> id: {{ id }} </v-card-title>
        <v-card-subtitle> detail: {{ details }} </v-card-subtitle>


      <div class="right">
        <v-card-actions>
          <router-link :to="{ name: 'cardDetail', params: { shaID: id } }">
            <v-btn>Detaljnije</v-btn
          ></router-link>
        </v-card-actions>
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "card",
  props: {
    id: String,
    details: String,
  },
};
</script>

<style>

.right{
    display: flex;
    justify-content: flex-end;


}
a{
    text-decoration: none;
}
</style>
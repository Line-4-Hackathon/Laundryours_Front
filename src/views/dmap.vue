<template>
  <v-container>
    <div id="dmap">
      <v-row>
        <v-col>
          <v-text-field outlined>
          </v-text-field>
        </v-col>
        <v-col>
          <v-btn color="#00BDF9" dark x-large>mark</v-btn>
        </v-col>
        <v-col>
        <KakaoMap />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import KakaoMap from "../components/KakaoMap.vue";

  export default {
    name: 'dmap',

    components: {
      KakaoMap,
    },
    data(){
        return{
        }
    },
    methods: {

    }
  };
</script>

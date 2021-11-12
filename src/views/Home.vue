<template>
  <v-container>
    <v-row style="margin-top:10%">
      <v-col cols="12">
        <v-select
          solo
          v-model="select"
          :items="items"
          item-text="state"
          item-value="abbr"
          label="Select"
          return-object
          single-line>
        </v-select>
        {{select.abbr}}
      </v-col>
      <!-- <v-col  cols="1">
        <v-btn color="#00BDF9" dark large>search</v-btn>
      </v-col> -->
    </v-row>
  </v-container>
</template>

<script>


  export default {
    name: 'Home',

    components: {

    },
    data(){
      return{
        select: { state: '면(코튼)', abbr: '구김이 잘 가고 세탁 시 수축위험. 물에 오래두면 탈색될 가능성 있음.' },
        items: [
          { state: '면(코튼)', abbr: '구김이 잘 가고 세탁 시 수축위험. 물에 오래두면 탈색될 가능성 있음.' },
          { state: '마(린넨)', abbr: '곰팡이가 발생하기 쉬우므로 충분히 건조시켜 보관해야 한다.' },
          { state: '견(실크)', abbr: '가볍고 보온성이 좋으나 땀과 빛에 쉽게 변화할 수 있는 직물이다. 빛과 세제에 쉽게 변색되기 쉽다.' },
          { state: '폴리', abbr: '열에 약해 삶으면 절대 안 된다. 표백제도 좋지 않다.' },
          { state: '나일론', abbr: '수분 흡수가 잘 안 되기 때문에 천연 섬유와 혼방해서 쓰이는 경우가 많다.' },
        ],
        todo : []
      }
    },
    method:{
      fetch_all_todo: function () { 
                // var vm = this;
                // axios.get('/CRUD/postList/')  
                //     .then(function (res) {                         
                //         vm.todoList = res.data;
                //     }) 
                //     .catch(function (err) { 
                //         console.log("GET ERR", err)
                //     }) 
            }
    }
  }
</script>

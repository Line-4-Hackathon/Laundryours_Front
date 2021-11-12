<template>
  <v-card class="mx-auto" max-width="500">
    <v-toolbar color="light-blue" dark>
      <v-toolbar-title>커뮤니티</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-checkbox-marked-circle</v-icon>
      </v-btn>
    </v-toolbar>

    <v-list two-line>
      <v-list-item-group v-model="selected" active-class="pink--text" multiple>
      <template v-for="(item, index) in items">
        <v-list-item :key="item.title">
          <template v-slot:default="{ active }">
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>

              <v-list-item-subtitle
                class="text--primary"
                v-text="item.headline"
              ></v-list-item-subtitle>

              <v-list-item-subtitle
                v-text="item.subtitle"
              ></v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-list-item-action-text
                v-text="item.action"
              ></v-list-item-action-text>

              <v-icon v-if="!active" color="grey lighten-1">
                mdi-star-outline
              </v-icon>

              <v-icon v-else color="yellow darken-3"> mdi-star </v-icon>
            </v-list-item-action>
          </template>
        </v-list-item>

        <v-divider v-if="index < items.length - 1" :key="index"></v-divider>
      </template>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    selected: [2],
    items: [
      {
        action: "15 min",
        headline: "손빨래 하기 너무 귀찮아요",
        subtitle: `빨래왕 김세탁`,
        title: "운동복 세탁기에 돌려도 되나요?",
      },
      {
        action: "2 hr",
        headline: "저는 이틀에 한 번씩 하는데 너무 귀찮아요..",
        subtitle: `BBQ치킨`,
        title: "이불빨래 얼마나 자주 해야 되나요?",
      },
      {
        action: "6 hr",
        headline: "고장났어요",
        subtitle: "곰돌이",
        title: "에어팟을 주머니에서 안 빼고 세탁기 돌렸더니",
      },
      {
        action: "12 hr",
        headline: "흰 옷 입을 때마다 빨간 국물 튀어요",
        subtitle: "카페인이필요해",
        title: "빨간 국물의 저주",
      },
      {
        action: "18hr",
        headline: "너무 귀찮았어요",
        subtitle: "빵순이",
        title: "제가 어제 빨래를 하는데",
      },
    ],
  }),
};
</script>
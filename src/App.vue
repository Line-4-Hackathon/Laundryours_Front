<template>
  <v-app>
    <v-app-bar app extended right color="#00BDF9">
      <p> </p>
      <p style="font-size: 80px;margin-top:50px; color:white">laundryours</p>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
        <v-navigation-drawer
          v-model="drawer"
          class="accent-4"
          color="#8EE4FF"
          absolute
          right
          
          temporary>
            <v-list
              nav
              dense>
              <v-list-item-group
                v-model="group"
                active-class="deep-purple--text text--accent-4"
              >

              <v-list-item class="px-2" link>
                <v-list-item-avatar>
                  <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
                </v-list-item-avatar>
              </v-list-item>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-folder</v-icon>
                </v-list-item-icon>
                <v-list-item-title>
                  <router-link to="/" class="logo">소재별 세탁/보관 방법</router-link>
                </v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-account-multiple</v-icon>
                </v-list-item-icon>
                <v-list-item-title>
                  <router-link to="/dmap" class="logo">주변 세탁소
                  </router-link>
                </v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-star</v-icon>
                </v-list-item-icon>
                <v-list-item-title>
                  <router-link to="/board" class="logo">세탁 꿀팁
                  </router-link>
                </v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>


      <template v-slot:append>
        <div class="pa-2">
          <v-btn block dark>
            Logout
          </v-btn>
        </div>
      </template>

              </v-navigation-drawer>             

          <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>
<script>

export default {
  name: 'App',
    data: () => ({
      drawer: false,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
    method:{

    }
  }
</script>
<style>
  .logo{
    text-decoration: none;
  }
</style>
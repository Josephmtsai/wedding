<template>
  <div id="app">
    <v-app>
      <v-app-bar
        absolute
        app
        color="error"
        hide-on-scroll
        dark
        scroll-target="#main"
      >
        <v-btn icon @click="drawer = !drawer">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
        <v-btn to="/" text>
          <span class="mr-2">Info</span>
          <v-icon>mdi-information</v-icon>
        </v-btn>
        <v-btn to="/maps" text>
          <span class="mr-2">maps</span><v-icon>mdi-google-maps</v-icon>
        </v-btn>
        <v-btn to="/album" text>
          <span class="mr-2">Album</span><v-icon>mdi-album</v-icon>
        </v-btn>
      </v-app-bar>

      <v-main>
        <div id="main">
          <router-view />
        </div>
      </v-main>
      <v-navigation-drawer
        color="error"
        v-model="drawer"
        absolute
        left
        temporary
      >
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item>
              <v-list-item-title
                ><v-btn to="/seat" text>
                  <span class="mr-2">Seat</span
                  ><v-icon>mdi-chart-timeline</v-icon>
                </v-btn></v-list-item-title
              >
            </v-list-item>

            <v-list-item>
              <v-list-item-title
                ><v-btn to="/timeline" text>
                  <span class="mr-2">Timeline</span
                  ><v-icon>mdi-chart-timeline</v-icon>
                </v-btn></v-list-item-title
              >
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-app>
  </div>
</template>
<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    drawer: false,
    group: null,
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

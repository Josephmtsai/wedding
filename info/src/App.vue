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
        <v-btn to="/" text>
          <span class="mr-2">Info</span>
          <v-icon>mdi-information</v-icon>
        </v-btn>

        <v-btn to="/album" text>
          <span class="mr-2">Album</span><v-icon>mdi-album</v-icon>
        </v-btn>

        <v-btn to="/parking" text>
          <span class="mr-2">maps</span><v-icon>mdi-google-maps</v-icon>
        </v-btn>

        <v-btn to="/timeline" text>
          <span class="mr-2">Timeline</span><v-icon>mdi-chart-timeline</v-icon>
        </v-btn>
      </v-app-bar>

      <v-main>
        <div id="main">
          <router-view />
        </div>
      </v-main>
    </v-app>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<template>
  <div class="home">
    <v-container class="grey lighten-5 text-lg-right">
      <v-row no-gutters>
        <v-col class="text-left">
          <v-btn
            href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=N29jZ3VjaTA5b2czNTQ2ZmdkczcxMDhhbmQgbW14MzYyMDAzQG0&amp;tmsrc=mmx362003%40gmail.com"
            target="_blank"
            fab
            dark
            small
            color="pink"
          >
            <v-icon>mdi-calendar</v-icon>
          </v-btn>
        </v-col></v-row
      >
      <v-row no-gutters>
        <img
          alt="WeddingInfo"
          src="../assets/WEDDING_01.png"
          width="100%"
          height="75%"
        />
      </v-row>
      <v-row no-gutters>
        <img
      alt="WeddingInfo"
      src="../assets/WEDDING_02.png"
      width="100%"
      height="75%"
        />
      </v-row>
    </v-container>
  </div>
</template>
<style lang="scss">
.home {
  max-height: 100%;
  max-width: 100%;
}
</style>
<script>
export default {
  name: "WeddingInvite",
  components: {},
  methods: {
    addToCalendar() {
      this.msg = "快來看這裡！我是新訊息！";
    },
  },
};
</script>

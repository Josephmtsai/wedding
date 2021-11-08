<template>
  <div class="home">
    <v-container fluid class="grey lighten-5 text-lg-right">
      <v-row no-gutters>
        <v-col class="text-left">
          <add-to-calendar
            title="Joseph & Ellen 結婚(12點準時入席)"
            location="典華幸福機構(大直店), 10466台灣台北市中山區植福路8號"
            :start="new Date(2021, 11, 4, 12)"
            :end="new Date(2021, 11, 4, 15)"
            details="似錦廳 5F 聯絡電話:0953966053 "
            inline-template
          >
            <google-calendar id="google-calendar">
              <i class="v-icon notranslate mdi mdi-calendar theme--dark"></i>
              Add to Calendar
            </google-calendar>
          </add-to-calendar>
        </v-col></v-row
      >
      <v-row no-gutters>
        <img
          alt="WeddingInfo"
          src="../assets/WEDDING_01.jpg"
          width="100%"
          height="75%"
        />
      </v-row>
      <v-row no-gutters>
        <img
          alt="WeddingInfo"
          src="../assets/WEDDING_02.jpg"
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
  methods: {},
};
</script>

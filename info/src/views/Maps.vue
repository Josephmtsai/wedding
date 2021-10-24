<template>
  <v-app id="maps">
    <v-container fluid class="grey lighten-5 text-lg-right">
      <v-row no-gutters>
        <v-col class="text-left">
          <v-icon> mdi-check-outline</v-icon>
          <span class="text-caption"
            >典華車位有限 請各位盡量提早到場或是搭乘大眾交通工具</span
          ></v-col
        ></v-row
      >
      <v-row no-gutters>
        <v-col class="text-left" cols="1">
          <v-icon mid>mdi-subway</v-icon>
        </v-col>
        <v-col class="text-left" cols="11">
          <span class="text-h6">捷運資訊:</span>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col class="text-left" cols="1"> </v-col>
        <v-col class="text-left" cols="11">
          <span class="body-2">文湖線 劍南路2號出口(步行約3分鐘)</span>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col class="text-left" cols="1">
          <v-icon mid>mdi-bus</v-icon>
        </v-col>
        <v-col class="text-left" cols="11">
          <span class="text-h6 ">公車資訊:</span>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col class="text-left" cols="1"> </v-col>
        <v-col class="text-left" cols="11">
          <span class="text-left body-2" style="word-break: break-word"
            >捷運劍南路站(步行3分鐘)
            28,33,72,208,222,287,247,256,267,268,286,553,620,646,645,902,556,683,957,955,1801,1573,紅2,紅3,棕20,藍7,藍20(區),藍26,綠16</span
          >
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col class="text-left" cols="1">
          <v-icon mid>mdi-parking</v-icon>
        </v-col>
        <v-col class="text-left" cols="11">
          <span class="text-h6 ">停車資訊:</span>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col class="text-left" cols="1"> </v-col>
        <v-col class="text-left" cols="11">
          <span class="text-left body-2"
            >大直典華B2停車場(位置有限)，或下圖標示之附近停車場</span
          >
        </v-col>
      </v-row>
    </v-container>
    <div>
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1yKLHwVkqAziq5_jG12R9fDXcer0t0u0p"
        width="100%"
        height="600px"
      ></iframe>
    </div>
  </v-app>
</template>
<script>
export default {
  name: "Maps",
  components: {},
};
</script>
<style lang="scss">
#maps {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>

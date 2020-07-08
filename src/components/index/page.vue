<template>
  <main class="page">
    <div class="cover-box">
      <v-img
        :src="cover"
        height="360"
        class="cover"
        ><div class="title">{{ title }}</div>
      </v-img>
    </div>

    <div class="content">
      <v-card class="content-card">
        <v-card-text v-if="!loaded">
          <v-skeleton-loader
            v-for="[type, mwidth, sclass] in skeleton"
            :type="type"
            :max-width="mwidth"
            :class="sclass"
          >
          </v-skeleton-loader>
        </v-card-text>

        <v-card-text v-else>
          <div v-html="content">{{ content }}</div>
        </v-card-text>
      </v-card>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Page',
  props: {
    title: String,
    content: String,
    cover: String,
    loaded: Boolean,
    skeleton: Array
  }
};
</script>

<style scoped>
.page {
  min-height: 100vh;
  background-color: rgba(255, 255, 255, 0.98);
}

.cover-box {
  width: 100%;
  height: 100%;
  position: relative;
}

.cover-box .cover::after {
  content: "";
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  position: absolute;
  background-color: rgba(66, 66, 66, 0.85);
}

.cover-box .title {
  top: 100px;
  left: 0;
  right: 0;
  z-index: 20;
  position: absolute;
  color: #fff;
  font-size: 36px;
  text-align: center;
}

.content .content-card {
  width: 90%;
  min-height: 320px;
  margin: auto;
  margin-top: -160px;
  position: relative;
}

.content .content-card .v-card__text {
  line-height: 1.5;
}

@media (max-width: 700px) {
  .content .content-card {
    width: 100%;
    margin-top: 0px;
    box-shadow: unset !important;
  }

  .cover-box .cover {
    height: 220px !important;
  }

  .cover-box .title {
    top: 50%;
    transform: translateY(-35%);
  }
}
</style>

<style>
.page img {
  max-width: 90%;
  border-radius: 3px;
  box-shadow: 0 0 5px 0 rgba(0,0,0,0.3);
}
</style>

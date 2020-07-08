<template>
  <main>
    <div id="bg-ovr"></div>
    <div class="home-title d-flex align-content-center flex-wrap"><span class="obot-title">OBot's Home</span></div>
  </main>
</template>

<script>
export default {
};
</script>

<style scoped>
.home-title {
  top: 50%;
  left: 0;
  right: 0;
  text-align: center;
  position: absolute;
  transform: translateY(-50%);
}

.home-title span {
  color: #ffffff;
  text-shadow: 0 0 5px rgba(66,66,66,0.55);
}

.home-title .obot-title {
  font-size: 36px;
  width: 150px;
}
</style>

<template>
  <div id="OBot">
    <Nav />
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    Nav: () => import("@/components/index/nav"),
  }
};
</script>

<style>
* {
  -webkit-tap-highlight-color: transparent;
}

html {
  overflow-y: auto!important;
}

body {
  overflow: auto;
}

body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -2;
  position: fixed;
  transition: all 0.3s;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: 50% 50%;
  background-image: url(./assets/bg.jpg);
}

#bg-ovr:after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  content: "";
  position: fixed;
  transition: all 0.3s;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: 50% 50%;
  background-image: url(./assets/bg.jpg);
  filter: blur(10px);
}

::-webkit-scrollbar-track-piece {
  background: rgba(255, 255, 255, 1);
}
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-thumb {
  height: 40px;
  background-color: rgba(165, 165, 165, 1);
}
::-webkit-scrollbar-thumb:hover {
  background-color: #bbb;
}
</style>

<template>
  <Page :title="title" :cover="cover" :content="content" :loaded="loaded" :skeleton="skeleton" />
</template>

<script>
import axios from "axios";
import Page from "@/components/index/page";

import markdown from "@/assets/test.md";

export default {
  components: {
    Page,
  },
  data: () => ({
    title: "关于",
    cover: "https://api.ohmyga.cn/wallpaper/",
    content: markdown,
    loaded: false,
    skeleton: [
        ['heading', '40%', 'about-sh'],
        ['text', '100%', 'about-st'],
        ['text', '45%', 'about-st'],
        ['text', '80%', 'about-st'],
        ['text', '60%', 'about-st'],
        ['text', '90%', 'about-st'],
        ['text', '100%', 'about-st'],
        ['text', '35%', 'about-stb'],
        ['heading', '40%', 'about-sh'],
        ['text', '75%', 'about-st'],
        ['text', '80%', 'about-st'],
        ['text', '60%', 'about-st']
    ]
  }),
  mounted() {
      axios({
          method: "GET",
          url: "https://cdn.jsdelivr.net/gh/SuperOBot/resources@0.0.2/markdown/about.md"
      }).then(data => {
          this.content = data.data;
          this.loaded = true;
      })
  },
};
</script>

<style>
.about-sh, .about-stb {
    margin-bottom: 20px;
}

@media(max-width: 650px) {
    .about-sh {
        max-width: 80%!important;
    }
}
</style>

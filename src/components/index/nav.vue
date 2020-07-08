<template>
  <v-app-bar id="home-appbar" dark fixed :class="{ color: isFixed, 'v-toolbar--flat': isFlat }">
    <v-btn
      v-for="(value, key) in items"
      :key="key"
      :to="value.path"
      text
      retain-focus-on-click
      :ripple="false"
      class="nav-page-btn"
      >{{ key }}</v-btn
    >

    <v-spacer></v-spacer>

    <v-btn depressed icon><v-icon>perm_identity</v-icon></v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    items: {
      首页: { path: "/" },
      使用条款: { path: "/tos" },
      关于: { path: "/about" }
    },
    isFixed: false,
    isFlat: true
  }),
  methods: {
    handleScroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop; // 滚动条偏移量
      let offsetTop = document.querySelector("#home-appbar").offsetTop; // 要滚动到顶部吸附的元素的偏移量
      this.isFixed = scrollTop > offsetTop ? true : false; // 如果滚动到顶部了，this.isFixed就为true
      this.isFlat = scrollTop > offsetTop ? false : true;
    }
  },
  mounted() {
    document.querySelector('body').addEventListener("scroll", this.handleScroll); // 监听滚动事件，然后用handleScroll这个方法进行相应的处理
  },
};
</script>

<style scope>
#home-appbar {
  z-index: 1000;
  background-color: rgba(66, 66, 66, 0);
}

#home-appbar:hover {
  background-color: rgba(66, 66, 66, 0.1);
}

#home-appbar .nav-page-btn {
  margin-left: 5px;
}

#home-appbar.color {
  background-color: rgba(66, 66, 66, 1);
}
</style>

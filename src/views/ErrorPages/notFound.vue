<template>
  <main>
    <div id="bg-ovr"></div>
    <div class="not-found-box">
      <div class="text">
        <span class="title">404</span>
        <span class="stitle">Not Found</span>
        <span class="des">你好像来到了一个不存在的地方 (＃°Д°)</span>
      </div>
    </div>
    <div class="not-found-img" pixiv-id="46752399" author-pixiv-userid="138830"></div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
.not-found-box {
  top: 50%;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  position: absolute;
  transition: all 0.3s;
  background-color: rgba(66, 66, 66, 0.55);
  transform: translateY(-50%);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.65);
}

.not-found-box .text {
  width: 600px;
  margin: auto;
  padding: 50px 0 50px 0;
  transform: translateX(-100px);
}

.not-found-box .text span {
  color: #fff;
  display: block;
}

.not-found-box span.title {
  font-size: 46px;
}

.not-found-box span.stitle {
  font-size: 30px;
  color: rgba(255, 255, 255, 0.8);
}

.not-found-box span.des {
  font-size: 18px;
  margin-top: 20px;
}

.not-found-img {
  left: 50%;
  bottom: 0;
  z-index: 200;
  width: 800px;
  height: 800px;
  position: fixed;
  transition: all 0.3s;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(../../assets/sakamotosan.png);
}

@media (max-width: 1500px) {
  .not-found-img {
    left: 40%;
  }
}

@media (max-width: 1250px) {
  .not-found-img {
    bottom: 100px;
    width: 600px;
    height: 600px;
  }
}

@media (max-width: 930px) {
  .not-found-img {
    opacity: 0;
  }
}

@media (max-width: 900px) {
  .not-found-box .text {
    width: 90%;
    height: 100vh;
    transform: translateX(0px);
  }

  .not-found-box span.title {
    margin-top: 30px;
  }

  .not-found-img {
    opacity: 1;
    left: 50%;
    right: 0;
    bottom: -30px;
    z-index: 90;
    background-size: cover;
    transform: translateX(-50%);
    background-repeat: no-repeat;
  }
}

@media(max-height: 720px) {
  .not-found-img {
    bottom: -20px;
  }
}
</style>

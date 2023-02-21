<script setup lang="ts">
import animation from "@/assets/animation";

const nuxtApp = useNuxtApp();
const nuxtRoute = useRoute();

//ローディング開始時
nuxtApp.hook("page:finish", () => {
  const app = new animation(nuxtRoute.name);
  app._setElement().then(() => {
    app.init();
  });
});
</script>

<template>
  <div class="loading">
    <div class="loading-box">
      <h3>NEXT</h3>
      <p class="js-text"></p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loading {
  opacity: 0;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100svh;
  background-color: #222;
  pointer-events: none;
  z-index: 200;
}

.loading-box {
  color: #747474;
  position: absolute;
  bottom: 70px;
  right: 40px;
  h3 {
    font-size: 1vw;
    letter-spacing: -0.01em;
    position: relative;
    top: -20px;
    left: 15px;
    margin-bottom: 10px;
  }
}

.js-text {
  display: flex;
  font-size: 12vw;
  letter-spacing: -0.06em;
  line-height: 0.75;
  position: relative;
  overflow: hidden;
  span {
    display: block;
    transform: translateY(300px);
  }
}

@media (max-width: 800px) {
  .loading-box {
    h3 {
      left: 0px;
      margin-bottom: 0;
    }
  }

  .js-text {
    font-size: 15vw;
  }
}
</style>

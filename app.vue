<script setup lang="ts">
let nextPage: string;

/*-------------------
* リンク配列
--------------------*/
const links = [
  {
    name: "Index",
    path: "/",
  },
  {
    name: "Page02",
    path: "/page02",
  },
  {
    name: "Page03",
    path: "/page03",
  },
];
</script>

<template>
  <div class="site-wrapper">
    <div class="page-index__flex">
      <nuxt-link v-for="(link, index) in links" :to="link.path" :key="index">
        {{ link.name }}
      </nuxt-link>
    </div>
    <NuxtPage />
    <NuxtLoading />
  </div>
</template>

<style lang="scss">
.site-wrapper {
  width: 100%;
  height: 100vh;
  height: 100svh;
  overflow: hidden;
  position: relative;
}

.page-index__flex {
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 2rem;
  z-index: 100;
  a {
    display: block;
    border: 1px solid;
    background-color: #333;
    color: #fff;
    padding: 0.6rem 1rem;
  }
}

@media (max-width: 800px) {
  .page-index__flex {
    right: auto;
    left: 50%;
    transform: translateX(-50%);
    gap: 1.6rem;
  }
}
</style>

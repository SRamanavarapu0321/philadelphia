<template>
    <div>
      <TopHeader></TopHeader>
      <main>
        <slot />
      </main>
      <Footer :addClass="addClass" :addPerk="addPerk" />
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: "DefaultLayout",
  props:["addPerk","addClass"],
  components:{
    TopHeader:Header,
    Footer,
  }
}
</script>
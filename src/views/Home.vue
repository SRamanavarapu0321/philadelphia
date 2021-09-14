<template>
  <DefaultLayout :addClass="useClass" :addPerk="usePerk">
        <section class="hero">
            <div class="hero-inr">
                <div class="container">
                    <div class="bg-color">
                        <div class="bg-img">
                        </div>
                    </div>
                </div>
            </div>
        </section>
  </DefaultLayout>
</template>

<script>

import DefaultLayout from '@/layouts/DefaultLayout.vue';
import { getHomeData } from '@/services/apiData';
export default {
  name: "Home",
  data() {
    return {
     useClass:true,
     usePerk:true,
     page:{}
    }
  },
  head: {
    title: {
      inner: 'It will be a pleasure'
    },
    // Meta tags
    meta: [
      { name: 'application-name', content: 'Name of my application' },
      { name: 'description', content: 'A description of the page', id: 'desc' }, // id to replace intead of create element
    ],
  },
  components: {
   DefaultLayout
  },
  mounted() {
        document.body.classList.add('home')
        document.body.classList.remove('about')
        this.page = getHomeData()
  },
  destroyed() {
    // document.body.classList.remove('home')
  }
};
</script>

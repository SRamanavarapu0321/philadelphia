<template>
  <DefaultLayout :addClass="useClass" :addPerk="usePerk">
    <section class="content">
            <div>
                <div class="container">
                    <div class="bg-color">
                        <div class="section-heading">
                            <h2>{{ page.title }}</h2>
                        </div>
                        <div>
                          <Content :content="parsedHtml" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
  </DefaultLayout>
</template>
<script>
import {decode} from 'html-entities';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import Content from '@/components/Content.vue'
import { getAboutData } from '@/services/apiData';
export default {
  name:"About",
  data() {
    return {
      useClass:true,
      usePerk:true,
      page:{}
    }
  },
  components:{
    DefaultLayout,
    Content
  },
  computed: {
        parsedHtml () {
            return unescape(this.page.content)
        }
    },
  mounted() {
    document.body.classList.add('about')
    document.body.classList.remove('home')
      getAboutData().then((res)=> {
      this.page = res.data
      }).catch((err)=> console.error(err))
  },
  destroyed() {
    // document.body.classList.remove('home')
    // document.body.classList.add('about')
  }
}
</script>
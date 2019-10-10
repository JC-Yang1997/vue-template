<template>
    <div class="home-title">
        Home page
        <span class="scss-test">{{test}}</span>
    </div>
</template>
<script>
import { testApi } from '@/api/test'
export default {
  data() {
    return {
      test: 'scss test'
    }
  },
  mounted() {
    this.testApi()
  },
  methods: {
    testApi() {
      const sendParams = {
        pageIndex: 1,
        pageSize: 100
      }
      testApi(sendParams).then(res => {
        console.log(res)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.home-title{
  font-size: 16rem;
    color: red;
    .scss-test{
      font-size: 16rem;
        color: blue;
    }
}
</style>

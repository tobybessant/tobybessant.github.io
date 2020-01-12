<template>
  <div class="blogs">
		<PageNav />
		<PageHeader text="BLOGS" subheading=""/>
  </div>
</template>

<script>
import PageNav from "@/components/PageNav.vue"
import PageHeader from '@/components/PageHeader.vue'

export default {
  name: 'blogs',
  components: {
		PageNav,
		PageHeader
  }
}
</script>

<style scoped>
.home {
	padding-top: 160px;
}
</style>

<template>
  <div class="contact">
		<PageNav />
		<PageHeader text="CONTACT" subheading=""/>
  </div>
</template>

<script>
import PageNav from "@/components/PageNav.vue"
import PageHeader from '@/components/PageHeader.vue'

export default {
  name: 'contact',
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

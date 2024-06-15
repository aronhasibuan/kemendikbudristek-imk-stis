<!-- src/App.vue -->
<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />

  <div id="app">
    <router-view></router-view>
  </div>

  <ScrolltoTop />
  <Accessibility />
  <Chatbot />
  <Footer />
</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import ScrolltoTop from '@/components/ScrolltoTop.vue'
import Accessibility from '@/components/AccessibilityButton.vue'
import Chatbot from '@/components/Chatbot.vue'

export default {
  name: 'App',
  components: {
      Navbar,
      Footer,
      ScrolltoTop,
      Accessibility,
      Chatbot
    }
}
</script>

<style scoped>
footer {
  margin-top: auto; /* Jarak ke atas auto untuk membuat footer selalu berada di bagian bawah */
}
</style>

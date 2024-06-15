<!-- ScrolltoTop.vue -->
<template>
    <button class="scroll-to-top" @click="scrollToTop">
      <img src="./icons/scrolltotop.svg" alt="Scroll to Top">
    </button>
  </template>
  
  <script>
  export default {
    methods: {
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }
  }
  </script>
  
  <style scoped>
  /* Button styles */
  .scroll-to-top {
    border-radius: 50%;
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #E9E9DD;
    width: 54px;
    height: 54px;
    padding: 8px;
    border: none;
    cursor: pointer;
  }
  
  </style>
  
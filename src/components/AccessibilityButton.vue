<template>
  <div>
    <!-- Trigger Button -->
    <button @click="showPopup = true" class="fixed bottom-5 left-5 bg-[#E9E9DD] rounded-full p-4 shadow-md mb-20">
      <img src="./icons/accessibilitybutton.svg" alt="Accessibility" class="w-7 h-7">
    </button>

    <!-- Popup Overlay -->
    <div v-if="showPopup" class="fixed inset-0 bg-black bg-opacity-50 flex items-center z-50">
      <!-- Popup Box -->
      <div class="bg-[#005689] rounded-lg shadow-lg p-1 w-[355px] h-[674px] relative">
        <!-- Popup Header -->
        <div class="flex justify-between items-center mb-4">
          <!-- Popup Title -->
          <h2 class="text-base font-bold text-white ml-4">MENU AKSESIBILITAS (CTRL + U)</h2>
          <!-- Close Button -->
          <button @click="showPopup = false">
            <img src="./icons/close.svg" alt="Close" class="mt-2">
          </button>
        </div>
        <!-- Popup Content -->
        <img src="../assets/Menu Disabilitas.png" alt="Accessibility Icon" class="w-354 h-532 mb-4 rounded-2xl mt-[-4px]">
        <button class="btn-popup w-306 h-37 flex items-center space-x-2 bg-white">
          <img src="./icons/reset.svg" alt="reset" class="w-6 h-6">
          <p class="text-black font-poppins font-semibold text-sm">Atur Ulang Semua Pengaturan Aksesibilitas</p>
        </button>
      </div>
    </div>

    <!-- Page Blur Effect -->
    <div :class="{ 'blur-sm': showPopup }" class="transition-blur duration-300">
      <!-- Your main page content goes here -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showPopup: false
    };
  }
};
</script>

<style scoped>

/* Styles for the popup button */
.btn-popup {
  background-color: white;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

/* Blur effect for the main page content */
.transition-blur {
  transition: filter 0.3s;
}

.blur-sm {
  filter: blur(5px);
}
</style>

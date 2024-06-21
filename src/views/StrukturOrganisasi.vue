<template>
    <div class="flex items-start ml-10 mt-10">
      <!-- Tanggal dan Jumlah Viewer -->
      <div class="flex flex-col justify-center">
        <div class="bg-[#4D4D4D] rounded-lg shadow-lg w-[70px] h-[70px] flex flex-col justify-center items-center mb-2">
          <p class="text-[27px] text-white">{{ day }}</p>
          <p class="text-[10px] text-white">{{ monthYear }}</p>
        </div>
        <div class="bg-[#4D4D4D] rounded-lg shadow-lg w-[70px] h-[70px] flex flex-col justify-center items-center">
          <img src="../components/icons/eye.svg" alt="Viewer">
          <p class="text-[10px] text-white mt-2">999</p>
        </div>
      </div>
  
      <!-- Path -->
      <div class="flex items-center ml-4">
        <a href="/home">
          <img src="../components/icons/home.svg" alt="Home Icon" class="w-[38px] h-[40px] bg-[#253C80] mr-1 p-2 hover:bg-[#828282] rounded-l">
        </a>
        <a class="text-white bg-[#2980B9] rounded-r p-2 mr-1 hover:bg-[#828282]" href="/strukturorganisasi">STRUKTUR ORGANISASI</a>
      </div>
    </div>
  
    <!-- Content -->
    <div class="flex justify-center mt-[-80px]">
      <img src="../assets/Infografik Struktur Organisasi Permendikbudristek 28 Tahun 2021.jpg" alt="Struktur Organisasi Kemendikbudristek" class="w-[1252px] h-[785px]">
    </div>
  </template>
  
  <script>
export default {
  data() {
    return {
      day: '',
      monthYear: '',
    };
  },
  methods: {
    updateDate() {
      const currentDate = new Date();
      this.day = currentDate.getDate().toString().padStart(2, '0');
      this.monthYear = `${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getFullYear()}`;
      console.log('Updated day:', this.day); // Debugging
      console.log('Updated monthYear:', this.monthYear); // Debugging
    },
  },
  mounted() {
    this.updateDate();
    setInterval(this.updateDate, 1000);
  },
};
</script>
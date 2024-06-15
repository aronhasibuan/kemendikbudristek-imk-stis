<template>

  <div class="bg-white">

    <!-- Kotak Informasi Berganti -->
    <div class="flex flex-col md:flex-row w-full h-auto px-4 mt-2">
      <div class="flex-1 bg-[#B9DBF8] text-[#585858] flex items-center justify-center text-base md:text-xl font-semibold p-2 text-center">
        {{ currentInfo }}
      </div>

      <div class="bg-[#2A7CBF] text-white flex items-center justify-center text-base font-semibold md:p-2">
        INFORMASI TERKINI
      </div>
    </div>

    <!-- Teks Selamat Datang-->
    <div class="mt-10 sm:flex-row sm:items-center">
      <p class="text-3xl sm:text-5xl text-black font-poppins mt-4 md:text-left text-center font-bold sm:ml-8">Selamat datang di Portal Resmi</p>
      <p class="text-3xl sm:text-5xl text-[#005689] font-poppins mt-4 md:text-right text-center font-bold sm:mr-8">Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi</p>
    </div>

    <!-- Gambar Merdeka Belajar-->
    <div class="relative">
      <img src="../assets/MerdekaBelajar.png" alt="Merdeka Belajar" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-96 h-auto">      
      <img src="../assets/background-1-home.svg" alt="" class="w-full h-auto mt-52 md:mt-44">
    </div>

    <!--Judul Highlights-->
    <div class="flex justify-center items-center mt-10">
      <img src="../components/icons/file-image.svg" alt="" class="w-9 h-11">
      <p class="font-bold self-end text-4xl font-poppins text-black opacity-70">Highlights</p>
    </div>

    <CarrouselVue />

    <InformasiPublikePPID />

    <GPR />

    <Bulletin />

    <img src="../assets/background-2-home.svg" alt="" class="w-full">

  </div>

</template>

<script>
import CarrouselVue from '../components/Carousel.vue';
import InformasiPublikePPID from '../components/InformasiPublikdane-PPID.vue';
import GPR from '../components/GPR.vue';
import Bulletin from '../components/Bulletin.vue';

export default {
  name: 'Home',
  components: {
    CarrouselVue,
    InformasiPublikePPID,
    GPR,
    Bulletin,
  },
  data() {
    return {
      infoMessages: [
        "Siap Bertransformasi, Kalangan Pendidikan Tinggi Dukung Kebijakan Baru Standar Nasional",
        "Permendikbudristek PPKSP Diluncurkan sebagai Merdeka Belajar Episode ke-25",
        "Kemendikbudristek Luncurkan Merdeka Belajar Episode ke-24: Transisi PAUD ke SD yang Menyenangkan",
        "Kemendikbudristek Luncurkan Merdeka Belajar Ke-23: Buku Bacaan Bermutu untuk Literasi Indonesia"
      ],
      currentInfo: "Siap Bertransformasi, Kalangan Pendidikan Tinggi Dukung Kebijakan Baru Standar Nasional",
      currentIndex: 0
    };
  },
  mounted() {
    this.startInfoRotation();
  },
  methods: {
    startInfoRotation() {
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.infoMessages.length;
        this.currentInfo = this.infoMessages[this.currentIndex];
      }, 3000); 
    }
  }
};
</script>

<style scoped>
  .absolute {
    position: absolute;
    margin-top: -6.7rem;
  }
</style>
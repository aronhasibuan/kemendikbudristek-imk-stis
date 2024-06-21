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
      <a class="text-white bg-[#2980B9] p-2 mr-1 hover:bg-[#828282]" href="/profil">PROFIL</a>
      <a class="text-white bg-[#253C80] rounded-r p-2 hover:bg-[#828282]" href="/kurikulum">KURIKULUM</a>
    </div>
  </div>

  <!-- Content -->
   <div class="flex items-center mt-[-76px] ml-32 mb-20 konten">

    <div class="flex items-start">

      <div class="border-r-2 border-[#6C6C6C] p-10">

        <div class="mb-20">
          <h2 class="text-[32px] font-semibold mb-4">Standar Nasional Pendidikan pada PAUD, Pendidikan <br>Dasar, dan Pendidikan Menengah</h2>
          <p class="mb-4 text-justify text-[16px]">
            Standar Nasional Pendidikan (SNP) Pendidikan dasar dan menengah adalah kriteria minimal tentang sistem pendidikan di 
            seluruh wilayah hukum Negara Kesatuan Republik Indonesia. SNP terdiri dari 8 (delapan) standar, yaitu: (i) Standar
            Kompetensi Lulusan; (ii) Standar isi; (iii) Standar Proses; (iv) Standar Penilaian Pendidikan; (v) Standar Tenaga
            Kependidikan; (vi) Standar Sarana dan Prasaran; (vii) Standar Pengelolaan; dan (viii) Standar Pembiayaan.
          </p>
          <a href="https://pskp.kemdikbud.go.id/standar-nasional-pendidikan-a/" class="bg-[#005689] text-white px-4 py-2 rounded border border-[#FB923C]">Pelajari Lebih Lanjut</a>
        </div>

        <div class="mb-20">
          <h2 class="text-[32px] font-semibold mb-4">Standar Nasional Pendidikan Tinggi</h2>
          <p class="mb-4 text-justify text-[16px]">
            Standar Nasional Pendidikan Tinggi atau SN Dikti merupakan satuan standar yang mencakup Standar Nasional 
            Pendidikan, Standar Penelitian, dan Standar Pengabdian kepada Masyarakat. Perguruan Tinggi wajib memenuhi SN
            Dikti sebagai upaya untuk mencapai tujuan pendidikan nasional. 
          </p>
          <a href="https://jdih.kemdikbud.go.id/detail_peraturan?main=2146" class="bg-[#005689] text-white px-4 py-2 rounded border border-[#FB923C]">Pelajari Lebih Lanjut</a>
        </div>

        <div class="mb-20">
          <h2 class="text-[32px] font-semibold mb-4">Prinsip Pengembangan Standar Nasional Pendidikan</h2>
          <div class="container mx-auto">
            <div class="grid grid-cols-3 gap-4">
              <div v-for="item in items" :key="item.id" class=" p-4 h-[280px] w-[280px] flex flex-col items-center justify-center shadow-md">
                <img :src="item.image" alt="Image" class="w-16 h-16 object-cover mb-2">
                <span>{{ item.text }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="mb-28">
          <h2 class="text-[32px] font-semibold mb-4">Proses Penyusunan Standar Nasional Pendidikan</h2>
          <p>Standar Nasional Pendidikan disusun melalui berbagai tahapan dan melibatakan para pemangku kepentingan yang terkait. Untuk menjaga relevansi dan kebermanfaatnnya, Standar Nasional Pendidikan juga terus dievaluasi yang hasilnya dapat menjadi bahan perbaikan atau pengembangan standar baru</p>
          <img src="../components/icons/snp.svg" alt="">
        </div>

        <h3 class="font-bold text-2xl text-[#0F1523] mb-16 ml-8">Data Visualisasi Pendidikan Indonesia</h3>

        <div class="flex justify-center items-center mb-10">
          <div class="grid grid-cols-3 gap-20">
            <div v-for="(item, index) in visdat" :key="index" class=" bg-white rounded-lg shadow-md text-center p-10 border shadow-left">
              <div class="text-4xl text-[#58547E] font-bold mb-2">{{ item.largeText }}</div>
              <div class="text-lg text-[#58547E]">{{ item.smallText }}</div>
            </div>
          </div>
        </div>

        <div class="flex flex-col justify-center items-center border shadow-left mb-10">
          <h2 class="text-[#58547E] font-bold text-xl mb-5 mt-5">Persentase Jumlah Sekolah, Kepala Sekolah, dan Guru Sekolah di Indonesia</h2>
          <p class="text-[#58547E] mb-10">Data per tanggal: 25 November 2023</p>
          <img src="../assets/kurikulum/sidebarchart.svg" alt="">
        </div>

        <div class="flex flex-col justify-center items-center border shadow-left mb-10">
          <h2 class="text-[#58547E] font-bold text-xl mb-5 mt-5">Jumlah Sekolah Menurut Jenjang Pendidikan, Tahun Ajaran 2020/2021, 2021/2022, dan 2022/2023 </h2>
          <p class="text-[#58547E] mb-10">Data per tanggal: 25 November 2023</p>
          <img src="../assets/kurikulum/barchart.jpg" alt="">
        </div>

        <div class="flex flex-col justify-center items-center border shadow-left mb-10">
          <h2 class="text-[#58547E] font-bold text-xl mb-5 mt-5">Persebaran Jumlah Guru di Indonesia</h2>
          <p class="text-[#58547E] mb-10">Data per tanggal: 25 November 2023</p>
          <img src="../assets/kurikulum/geovisualitation.svg" alt="">
        </div>

      </div>

      <!-- Dokumen Rujukan-->
      <div class="self-start ml-10 w-full">
        <h3 class="mb-4 text-[#0F1523] font-semibold text-2xl">Dokumen Rujukan</h3>
        <div class="flex items-center space-x-4 mb-2">
          <img src="../components/icons/panahkurikulum.svg" alt="" class="self-start mt-2">
          <a href="" class="text-[#2290E8] ">UU 20/2003 tentang Sistem <br> Pendidikan Nasional</a>
        </div>
        <div class="flex items-center space-x-4 mb-2">
          <img src="../components/icons/panahkurikulum.svg" alt="" class="self-start mt-2">
          <a href="" class="text-[#2290E8]">PP 57/2021 tentang Standar <br> Nasional Pendidikan</a>
        </div>
        <div class="flex items-center space-x-4 mb-2">
          <img src="../components/icons/panahkurikulum.svg" alt="" class="self-start mt-2">
          <a href="" class="text-[#2290E8]">PP 4/2022 tentang <br> Perubahan atas PP 57/2021 <br> tentang Standar Nasional <br> Pendidikan</a>
        </div>
      </div>

    </div>
    
  </div>
   
</template>

<script>
import gambarumum from '@/components/icons/umum.svg';
import gambarholistik from '@/components/icons/holistik.svg';
import gambarfokus from '@/components/icons/fokus.svg';
import gambarinklusif from '@/components/icons/inklusif.svg';
import gambarinisiatif from '@/components/icons/inisiatif.svg';
import gambarringkas from '@/components/icons/ringkas.svg';
export default {
  data() {
    return {
      day: '',
      monthYear: '',
      visdat: [
        { largeText: '522.009', smallText: 'Total Sekolah' },
        { largeText: '516.409', smallText: 'Total Kepala Sekolah' },
        { largeText: '3.376.903', smallText: 'Total Guru' }
      ],
      items: [
        { id: 1, image: gambarumum, text: 'Umum: hanya mengatur hal-hal prinsip' },
        { id: 2, image: gambarholistik, text: 'Holistik: bersifat lintas jalur, jenis, dan jenjang' },
        { id: 3, image: gambarfokus, text: 'Fokus pada kualitas pembelajaran, SKL sebagai acuan standar lainnya' },
        { id: 4, image: gambarinklusif, text: 'Inklusif: mempertimbangkan keragaman karakteristik satuan pendidikan di Indonesia' },
        { id: 5, image: gambarinisiatif, text: 'Memantik inisiatif dan inovasi' },
        { id: 6, image: gambarringkas, text: 'Ringkas: mudah dipahami dan dijadikan kompas' }
      ],
    };
  },
  methods: {
    updateDate() {
      const currentDate = new Date();
      this.day = currentDate.getDate().toString().padStart(2, '0');
      this.monthYear = `${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getFullYear()}`;
    },
  },
  mounted() {
    this.updateDate();
    setInterval(this.updateDate, 1000);
  },
};
</script>

<style scoped>
.shadow-left {
  box-shadow: -10px 0px 15px -3px rgba(0, 0, 0, 0.1), -4px 0px 6px -2px rgba(0, 0, 0, 0.1);
}

@media(max-width: 1280px){
  .konten{
    margin-left: 84px;
    margin-top: -120px;
  }
  }
</style>
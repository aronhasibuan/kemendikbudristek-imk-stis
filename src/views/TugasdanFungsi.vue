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
        <a class="text-white bg-[#2980B9] rounded-r p-2 mr-1 hover:bg-[#828282]" href="/tugasdanfungsi">TUGAS DAN FUNGSI</a>
      </div>
    </div>

    <!--Content-->
    <div class="mt-[-76px] ml-32 mr-32 mb-32">

        <h3 class="mb-16 font-bold text-xl md:text-[32px] text-center">
            Tugas dan Fungsi Kemendikbudristek Berdasarkan Peraturan Presiden Republik Indonesia Nomor 62 tahun 2021
            tentang Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi (Kemendikbudristek)
        </h3>

        <div class="mb-10">
            <h2 class="text-xl md:text-[32px] font-semibold mb-4">
                Tugas Kemendikbudristek
            </h2>
            <p class="mb-4 text-justify text-sm md:text-[16px]">
                Kemendikbudristek mempunyai tugas menyelenggarakan urusan pemerintahan di bidang pendidikan, 
                kebudayaan, ilmu pengetahuan, dan teknologi untuk membantu Presiden dalam menyelenggarakan pemerintahan negara.
            </p>
        </div>

        <div class="mb-10">
          <h2 class="text-xl md:text-[32px] font-semibold mb-4"> 
            Fungsi Kemendikbudristek
          </h2>
          <ol class="list-decimal list-outside ml-5 text-sm md:text-[16px] text-justify">
            <li>Perumusan dan penetapan kebijakan di bidang pendidik dan tenaga kependidikan, pendidikan anak usia dini, pendidikan dasar, pendidikan menengah, pendidikan vokasi, pendidikan tinggi, dan kebudayaan;</li>
            <li>Perumusan dan penetapan kebijakan di bidang ilmu pengetahuan dan teknologi;</li>
            <li>Koordinasi dan sinkronisasi pelaksanaan kebijakan di bidang ilmu pengetahuan dan teknologi di perguruan tinggi dalam rangka melaksanakan tridharma perguruan tinggi;</li>
            <li>Pelaksanaan kebijakan di bidang pengendalian formasi pendidik, pemindahan pendidik, dan pengembangan karir pendidik serta pemindahan pendidik dan tenaga kependidikan lintas daerah provinsi;</li>
            <li>Penyusunan standar, kurikulum, dan asesmen di bidang pendidikan;</li>
            <li>Penetapan standar nasional pendidikan dan kurikulum nasional pendidikan menengah, pendidikan dasar, pendidikan anak usia dini, dan pendidikan nonformal;</li>
            <li>Pelaksanaan kebijakan di bidang pendidikan tinggi;</li>
            <li>Pelaksanaan kebijakan di bidang ilmu pengetahuan dan teknologi di perguruan tinggi dalam rangka melaksanakan tridharma perguruan tinggi;</li>
            <li>Pelaksanaan fasilitasi pendidik dan tenaga kependidikan dan penyelenggaraan pendidikan anak usia dini, pendidikan dasar, pendidikan menengah, pendidikan vokasi, pendidikan tinggi, riset, teknologi, dan kebudayaan;</li>
            <li>Pelaksanaan kebijakan di bidang pelestarian cagar budaya dan pemajuan kebudayaan;</li>
            <li>Pelaksanaan kebijakan di bidang pembinaan perfilman nasional;</li>
            <li>Pelaksanaan pengembangan, pembinaan, dan pelindungan bahasa dan sastra;</li>
            <li>Pelaksanaan pengelolaan sistem perbukuan;</li>
            <li>Pelaksanaan bimbingan teknis dan supervisi atas pelaksanaan urusan pendidikan dan kebudayaan di daerah;</li>
            <li>Koordinasi pelaksanaan tugas, pembinaan, dan pemberian dukungan administrasi kepada seluruh unsur organisasi di lingkungan Kementerian;</li>
            <li>Pengelolaan barang milik/kekayaan negara yang menjadi tanggung jawab Kementerian;</li>
            <li>Pengawasan atas pelaksanaan tugas di lingkungan Kementerian; dan</li>
            <li>Pelaksanaan dukungan substantif untuk mendukung pencapaian tujuan dan sasaran strategis Kementerian.</li>
          </ol>
        </div>

        <p class="font-bold text-lg">Unduh Peraturan Terkait</p>
        <a href="https://www.kemdikbud.go.id/main/files/download/13582cb2b825a01" class="hover:text-[#005689]">Presiden Republik Indonesia Nomor 62 tahun 2021 tentang Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi</a>
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
    },
  },
  mounted() {
    this.updateDate();
    setInterval(this.updateDate, 1000);
  },
};
</script>
<template>
  <div>
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
        <a class="text-white bg-[#253C80] rounded-r p-2 hover:bg-[#828282]" href="/visimisi">VISI MISI</a>
      </div>
    </div>
    
    <!-- Content -->
    <div class="max-w-6xl mx-auto p-5 font-popins mb-48 md:mt-[-80px] mt-4 lg:ml-28">
      <div class="mb-10 p-4 text-style rounded-3xl shadow-md relative">
        <div class="inline-block text-center font-bold text-xl custom-judul judul-style py-2 px-10 rounded-2xl absolute -top-6 left-8 lg:left-16">
          VISI
        </div>
        <p class="custom-text font-bold mt-8 ml-4 lg:ml-6">
          "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi mendukung Visi dan Misi Presiden untuk mewujudkan Indonesia Maju yang berdaulat, mandiri, dan berkepribadian melalui terciptanya Pelajar Pancasila yang bernalar kritis, kreatif, mandiri, beriman, bertakwa kepada Tuhan Yang Maha Esa, dan berakhlak mulia, bergotong royong, dan berkebinekaan global"
        </p>
      </div>

      <div class="mb-10 p-4 text-style boxs rounded-3xl shadow-md relative mt-14">
        <div class="inline-block text-center font-bold text-xl custom-judul judul-style py-2 px-10 rounded-2xl absolute -top-6 left-8 lg:left-16">
          MISI
        </div>
        <ol class="list-decimal list-inside space-y-2 custom-text font-bold text-lg mt-8 ml-4 lg:ml-6">
          <li>Menyediakan pendidikan yang relevan dan berkualitas tinggi, merata dan berkelanjutan, didukung oleh infrastruktur dan teknologi.</li>
          <li>Mewujudkan pelestarian dan pemajuan kebudayaan serta pengembangan bahasa dan sastra.</li>
          <li>Mengoptimalkan peran serta seluruh pemangku kepentingan untuk mendukung transformasi dan reformasi pengelolaan pendidikan dan kebudayaan.</li>
        </ol>
      </div>

      <div class="mt-20 lg:ml-12 flex flex-col items-center">
        <h2 class="text-center text-2xl font-bold text-black mb-10">
          <img src="@/assets/visimisi/poin-tujuan.svg" alt="Point Icon" class="inline-block mr-2" />
          Tujuan Kemendikbudristek
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-20">
          <div class="bg-white p-4 rounded-xl shadow-md box-tujuan mx-auto w-full max-w-xs md:max-w-none">
            <h3 class="text-xl judul-tujuan">Pendidikan Bermutu</h3>
            <p class="custom-text">Peluasan akses pendidikan bermutu bagi peserta didik yang berkeadilan dan inklusif.</p>
          </div>
          <div class="bg-white p-4 rounded-xl shadow-md box-tujuan mx-auto w-full max-w-xs md:max-w-none">
            <h3 class="text-xl judul-tujuan">Perkembangan Peserta Didik</h3>
            <p class="custom-text">Penguatan mutu dan relevansi pendidikan yang berpusat pada perkembangan peserta didik.</p>
          </div>
          <div class="bg-white p-4 rounded-xl shadow-md box-tujuan mx-auto w-full max-w-xs md:max-w-none">
            <h3 class="text-xl judul-tujuan">Berkarakter</h3>
            <p class="custom-text">Pengembangan potensi peserta didik yang berkarakter.</p>
          </div>
          <div class="bg-white p-4 rounded-xl shadow-md box-tujuan mx-auto w-full max-w-xs md:max-w-none">
            <h3 class="text-xl judul-tujuan">Budaya, Bahasa, dan Sastra</h3>
            <p class="custom-text">Pelestarian dan pemajuan budaya, bahasa dan sastra serta pengarus-utamaannya dalam pendidikan.</p>
          </div>
        </div>
        <div class="bg-white p-4 rounded-xl shadow-md box-tujuan mx-auto w-full max-w-xs md:max-w-none mt-4">
          <h3 class="text-xl judul-tujuan">Penguatan Sistem</h3>
          <p class="custom-text">Penguatan sistem tata kelola pendidikan dan kebudayaan yang partisipatif, transparan, dan akuntabel.</p>
        </div>
      </div>
    </div>
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
    }
  },
  mounted() {
    this.updateDate();
    setInterval(this.updateDate, 1000);
  },
};
</script>

<style scoped>
.max-w-6xl {
  max-width: 72rem;
}

.custom-text {
  font-size: 14px;
  color: #4D4D4D;
  justify-content: center;
  align-items: start;
  line-height: 21px;
  font-weight: 500;
}

.custom-judul {
  font-size: 20px;
  color: #4D4D4D;
  align-content: center;
}

.judul-style {
  background-color: #B5D9F8;
  border: 3px solid #005689;
  border-radius: 30px;
  width: 146px;
  height: 43.64px;
}

.text-style {
  border-radius: 30px;
  background-color: #B5D9F8;
  border: 3px solid #005689;
}

.boxs {
  border-radius: 30px;
}

.box-tujuan {
  border-radius: 10px;
  border: 1px solid #005689;
  width: 447px;
  height: 144px;
}

.judul-tujuan {
  font-size: 16px;
  color: #2A7CBF;
  font-weight: 700;
}
</style>

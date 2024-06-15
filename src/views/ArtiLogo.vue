<template>
  <div class="mb-96">
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
          <img src="../components/icons/home.svg" alt="Home Icon" class="w-[38px] h-[40px] bg-[#253C80] mr-1 p-2 hover:bg-[#828282]">
        </a>
        <a class="text-white bg-[#2980B9] rounded-lg p-2 mr-1 hover:bg-[#828282]" href="/profil">PROFIL</a>
        <a class="text-white bg-[#253C80] rounded-lg p-2 hover:bg-[#828282]" href="/artilogo">LOGO</a>
      </div>
    </div>

    <!--Content-->
    <div>
      <!-- Logo and Color Codes Section -->
      <div class="relative flex items-center justify-center mt-[-70px] mb-40 ml-[-285px]" style="height: 321px;">
        <div class="absolute inset-0 flex justify-center">
          <img src="@/assets/artiLogo/logobox.svg" alt="Background Logo" class="[w-1154px] h-[321px] object-cover">
        </div>
        <div class="relative flex items-center">
          <img src="../assets/logo.png" alt="Logo Kemdikbud" class="block mx-auto w-[350px] h-[238px]">
          <div class="grid grid-cols-2 gap-4 mr-40">
            <div class="flex items-start space-x-2 rounded-md p-2">
              <div class="w-[55px] h-[55px] bg-[#297BBF]"></div>
              <div>
                <p class="text-sm font-medium ml-2">C : 95 <br>M : 25 <br>Y : 0 <br>K : 0</p>
              </div>
              <div>
                <p class="text-sm font-medium ml-10">R : 41 <br>G : 123 <br>B : 191</p>
              </div>
            </div>

            <div class="flex items-start space-x-2 rounded-md p-2 ml-10">
              <div class="w-[55px] h-[55px] bg-[#000000]"></div>
              <div>
                <p class="text-sm font-medium ml-2">C : 0 <br>M : 0 <br>Y : 0 <br>K : 100</p>
              </div>
              <div>
                <p class="text-sm font-medium ml-10">R : 0 <br>G : 0 <br>B : 0</p>
              </div>
            </div>

            <div class="flex items-start space-x-2 rounded-md p-2">
              <div class="w-[55px] h-[55px] bg-[#FBD206]"></div>
              <div>
                <p class="text-sm font-medium ml-2">C : 2 <br>M : 15 <br>Y : 100 <br>K : 0</p>
              </div>
              <div>
                <p class="text-sm font-medium ml-10">R : 251 <br>G : 210 <br>B : 6</p>
              </div>
            </div>

            <div class="flex items-start space-x-2 rounded-md p-2 ml-10">
              <div class="w-[55px] h-[55px] bg-white border border-black"></div>
              <div>
                <p class="text-sm font-medium ml-2">C : 0 <br>M : 0 <br>Y : 0 <br>K : 0</p>
              </div>
              <div>
                <p class="text-sm font-medium ml-10">R : 255 <br>G : 255 <br>B : 255</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Uraian Lambang -->
    <div class="relative flex items-center justify-center mb-44" style="height: 321px;">
      <div class="absolute inset-0 flex justify-center"></div>
      <div class="flex flex-col items-center p-8 bg-white font-poppins arti-style mx-auto" style="max-width: 1300px;">
        <div class="w-full mt-8 space-y-4 text-justify">
          <div class="text-center font-bold text-xl judul-style whitespace-nowrap">Uraian Lambang</div>
          
          <div class="flex items-start">
            <div class="w-8 h-8 flex justify-center items-center rounded-full bg-blue-200 text-center font-bold border border-blue-500">1</div>
            <div class="flex-1 ml-4">
              <p>Bidang Segi Lima (Biru Muda) menggambarkan alam kehidupan Pancasila.</p>
            </div>
          </div>

          <div class="flex items-start">
            <div class="w-8 h-8 flex justify-center items-center rounded-full bg-blue-200 text-center font-bold border border-blue-500">2</div>
            <div class="flex-1 ml-4">
              <p>Semboyan Tut Wuri Handayani digunakan oleh Ki Hajar Dewantara dalam melaksanakan sistem pendidikan. Pencantuman semboyan ini berarti melengkapi penghargaan dan penghormatan kita terhadap alm Ki Hajar Dewantara yang hari lahirnya telah dijadikan Hari Pendidikan Nasional.</p>
            </div>
          </div>

          <div class="flex items-start">
            <div class="w-8 h-8 flex justify-center items-center rounded-full bg-blue-200 text-center font-bold border border-blue-500">3</div>
            <div class="flex-1 ml-4">
              <p>Belenceng Menyala Bermotif Garuda Belenceng (menyala) merupakan lampu yang khusus dipergunakan pada pertunjukan wayang kulit. Cahaya belenceng membuat pertunjukan menjadi hidup.</p>
            </div>
          </div>

          <div class="flex items-start">
            <div class="w-8 h-8 flex justify-center items-center rounded-full bg-blue-200 text-center font-bold border border-blue-500">4</div>
            <div class="flex-1 ml-4">
              <p>Burung Garuda (yang menjadi motif belenceng) memberikan gambaran sifat dinamis, gagah perkasa, mampu dan berani mandiri mengarungi angkasa luas. Ekor dan sayap garuda digambarkan masing-masing lima, yang berarti: 'satu kata dengan perbuatan Pancasila'.</p>
            </div>
          </div>

          <div class="flex items-start">
            <div class="w-8 h-8 flex justify-center items-center rounded-full bg-blue-200 text-center font-bold border border-blue-500">5</div>
            <div class="flex-1 ml-4">
              <p>Buku merupakan sumber bagi segala ilmu yang dapat bermanfaat bagi kehidupan manusia.</p>
            </div>
          </div>

          <div class="flex items-start">
            <div class="w-8 h-8 flex justify-center items-center rounded-full bg-blue-200 text-center font-bold border border-blue-500">6</div>
            <div class="flex-1 ml-4">
              <p>Warna: Warna putih pada ekor dan sayap garuda dan buku berarti suci, bersih tanpa pamrih. Warna kuning emas pada nyala api berarti keagungan dan keluhuran pengabdian. Warna biru muda pada bidang segi lima berarti pengabdian yang tak kunjung putus dengan memiliki pandangan hidup yang mendalam (pandangan hidup Pancasila).</p>
            </div>
          </div>
        </div>

        <div class="w-full mt-6 text-left text-sm relative" style="font-weight: 700; font-size: 14px;">
          <hr class="h-px my-8 mx-auto garis1">
          <hr class="h-px my-6 mx-auto garis2">
          <p>Sumber:</p>
          <p>
            Keputusan Menteri Pendidikan dan Kebudayaan tanggal 6 September 1977, No.: 0398/M/1977
            tentang penetapan Lambang Departemen Pendidikan dan Kebudayaan
          </p>
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
    },
  },
  mounted() {
    this.updateDate();
    setInterval(this.updateDate, 1000);
  },
};
</script>

<style scoped>
.arti-style {
  font-size: 14px;
  color: #4D4D4D;
  font-weight: 500;
}

.text-justify {
  text-align: justify;
}

.garis1 {
  border: 2px solid #297BBF;
  width: 400px;
  margin-left: auto;
  margin-right: auto;
}

.garis2 {
  border: 2px solid #297BBF;
  width: 330px;
  margin-left: auto;
  margin-right: auto;
}

.judul-style {
  background-color: #B5D9F8;
  border: 3px solid #005689;
  border-radius: 30px;
  width: 360px;
  height: 38px;
  margin: 0 auto;
}
</style>

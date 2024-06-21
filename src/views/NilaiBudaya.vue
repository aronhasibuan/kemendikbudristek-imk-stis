<template>
  <div>
    <!-- Header Section -->
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
      <div class="flex items-center ml-4 rounded-l">
        <a href="/home">
          <img src="../components/icons/home.svg" alt="Home Icon" class="w-[38px] h-[40px] bg-[#253C80] mr-1 p-2 hover:bg-[#828282] rounded-l">
        </a>
        <a class="text-white bg-[#2980B9] p-2 mr-1 hover:bg-[#828282]" href="/profil">PROFIL</a>
        <a class="text-white bg-[#253C80] rounded-r-lg p-2 hover:bg-[#828282]" href="/artilogo">NILAI BUDAYA KERJA</a>
      </div>
    </div>

    <!-- Content Section -->
    <div class="flex flex-col items-center md:mt-[-80px] mt-5 font-poppins px-4">
      <h2 class="text-2xl custom-judul mb-20">Nilai Budaya Kerja Kemendikbudristek</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-x-20">

        <div class="bg-white p-4 rounded-xl shadow-md box-tujuan relative">
          <img :src="vektorTurun" alt="Vektor Turun" class="absolute top-2 right-2 cursor-pointer" width="30" height="20" @click="toggleCtpVisible">
          <h3 class="text-xl judul-tujuan">Tanpa Pamrih</h3>
          <div v-if="CtpVisible">
            <p>
              Contoh Perilaku <br>
              Positif <br>
              1. Bekerja sesuai dengan SKP yang direncanakan <br>
              2. Mengatur tamu yang berkunjung ke kantor dengan hati yang ikhlas <br>
              3. Saling menghormati antar sesama pegawai <br>
              Negatif <br>
              1. Menyelesaikan pekerjaan tanpa cek dan ricek <br>
              2. Sulit menjalin kerjasama dengan rekan kerja dalam mencari solusi terbaik <br>
            </p>
          </div>
          <div v-else>
            <p class="custom-text">Bekerja dengan tulus ikhlas dan penuh dedikasi.</p>
          </div>
        </div>

        <div class="bg-white p-4 rounded-xl shadow-md box-tujuan relative">
          <img :src="vektorTurun" alt="Vektor Turun" class="absolute top-2 right-2 cursor-pointer" width="30" height="20" @click="toggleCiVisible">
          <h3 class="text-xl judul-tujuan">Inisiatif</h3>
          <div v-if="CiVisible">
            <p>
              Contoh Perilaku <br>
              Positif <br>
              1. Responsif melayani kebutuhan stakeholder <br>
              2. Bersikap proaktif terhadap kebutuhan organisasi <br>
              3. Memiliki dorongan untuk mengidentifikasikan masalah atau peluang dan mampu mengambil tindakan nyata untuk menyelesaikan masalah <br>
              Negatif <br>
              1. Hanya mengerjakan tugas yang diminta oleh atasan <br>
              2. Mencari suara terbanyak, berlindung dari kegagalan, beragumentasi bahwa apa yang anda lakukan telah disetujui oleh semua anggota tim <br>
            </p>
          </div>
          <div v-else>
            <p class="custom-text">Kemampuan seseorang untuk bertindak melebihi yang dibutuhkan atau yang dituntut dari pekerjaan.</p>
          </div>
        </div>

        <div class="bg-white p-4 rounded-xl shadow-md box-tujuan relative">
          <img :src="vektorTurun" alt="Vektor Turun" class="absolute top-2 right-2 cursor-pointer" width="30" height="20" @click="toggleCmiVisible">
          <h3 class="text-xl judul-tujuan">Memiliki Integritas</h3>
          <div v-if="CmiVisible">
            <p>
              Contoh Perilaku <br>
              Positif <br>
              1. Berani menyampaikan pendapat bila terjadi hal yang menyimpang (fraud) <br>
              2. Melakukan perjalanan dinas/workshop sesuai dengan durasi kebutuhan organisasi <br>
              3. Melaksanakan pengadaan barang dan jasa sesuai ketentuan yang berlaku <br>
              4. Masuk kerja tepat waktu <br>
              5. Memakai seragam sesuai ketentuan <br>
              Negatif <br>
              1. Membuat laporan pengeluaran fiktif <br>
              2. Mengajak keluarga dengan menggunakan biaya perjalanan dinas <br>
              3. Mengutip biaya di luar tarif yang berlaku <br>
              4. Menerima hadiah dari vendor/hotel/masyarakat
            </p>
          </div>
          <div v-else>
            <p class="custom-text">Keselarasan antara pikiran, perkataan, dan perbuatan.</p>
          </div>
        </div>

        <div class="bg-white p-4 rounded-xl shadow-md box-tujuan relative">
          <img :src="vektorTurun" alt="Vektor Turun" class="absolute top-2 right-2 cursor-pointer" width="30" height="20" @click="toggleCpVisible">
          <h3 class="text-xl judul-tujuan">Pembelajaran</h3>
          <div v-if="CpVisible">
            <p>
              Contoh Perilaku <br>
              Positif <br>
              1. Mengikuti seminar/pelatihan/workshop dengan antusias <br>
              2. Melakukan introspeksi terhadap diri sendiri <br>
              3. Membuat resume pelatihan dan mengirimkan kepada rekan kerja; berdiskusi baik formal/informal terkait program kerja <br>
              Negatif <br>
              1. Malas membaca buku <br>
              2. Tidak mengikuti pelatihan secara penuh <br>
              3. Malas menghadiri undangan sosialisasi program kerja dari K/L lain <br>
            </p>
          </div>
          <div v-else>
            <p class="custom-text">Selalu berusaha untuk mengembangkan kompetensi dan profesionalisme.</p>
          </div>
        </div>

        <div class="bg-white p-4 rounded-xl shadow-md box-tujuan relative">
          <img :src="vektorTurun" alt="Vektor Turun" class="absolute top-2 right-2 cursor-pointer" width="30" height="20" @click="toggleCmmVisible">
          <h3 class="text-xl judul-tujuan">Menjunjung Meritokrasi</h3>
          <div v-if="CmmVisible">
            <p>
              Contoh Perilaku <br>
              Positif <br>
              1. Mendorong rekan kerja mengikuti seleksi terbuka <br>
              2. Memberikan penilaian SKP secara obyektif <br>
              3. Memberikan peluang kepada pegawai untuk mengembangkan kompetensi <br>
              4. Menghindari diskriminasi terhadap perbedaan etnis, ras, agama, dan usia <br>
              5. Menutup informasi untuk pengembangan karir pegawai lain <br>
              Negatif <br>
              1. Melakukan praktik nepotisme dalam melantik pegawai <br>
              2. Melakukan seleksi pegawai tidak berdasar pada kompetensi <br>
            </p>
          </div>
          <div v-else>
            <p class="custom-text">Menjunjung tinggi keadilan dalam pemberian penghargaan bagi karyawan yang kompeten.</p>
          </div>
        </div>

        <div class="bg-white p-4 rounded-xl shadow-md box-tujuan relative">
          <img :src="vektorTurun" alt="Vektor Turun" class="absolute top-2 right-2 cursor-pointer" width="30" height="20" @click="toogleCtaVisible">
          <h3 class="text-xl judul-tujuan">Terlibat Aktif</h3>
          <div v-if="CtaVisible">
            <p>
              Contoh Perilaku <br>
              Positif <br>
              1. Mengikuti peringatan upacara hari besar nasional <br>
              2. Mengikuti upacara bendera <br>
              3. Bersosialisasi dengan masyarakat untuk menciptakan public trust <br>
              4. Sebagai atasan, memberikan teladan bagi bawahan <br>
              5. Sebagai bawahan, loyal dan disiplin terhadap setiap tugas yang diberikan <br>
              Negatif <br>
              1. Malas untuk mematikan AC, komputer dan perangkat elektronik lainnya yang tidak digunakan <br>
              2. Mengisi form aktivitas harian setelah diminta <br>
            </p>
          </div>
          <div v-else>
            <p class="custom-text">Senantiasa berpartisipasi dalam setiap pekerjaan.</p>
          </div>
        </div>

        <div class="sm:col-span-2 flex justify-center" style="margin-bottom: 400px;">
          <div class="bg-white p-4 rounded-xl shadow-md box-tujuan relative">
            <img :src="vektorTurun" alt="Vektor Turun" class="absolute top-2 right-2 cursor-pointer" width="30" height="20" @click="toogleCkiVisible">
            <h3 class="text-xl judul-tujuan">Kreatif dan Inovatif</h3>
            <div v-if="CkiVisible">
              <p>
                Contoh Perilaku <br>
                Positif <br>
                1. Membuat SOP yang dapat mempercepat proses kerja <br>
                2. Membuat notulansi rapat secara langsung dengan laptop <br>
                3. Mendengarkan pendapat peserta rapat secara bijak <br>
                4. Mendistribusikan surat secara paperless <br>
                5. Menggunakan surat secara paperless <br>
                Negatif <br>
                1. Tidak melakukan evaluasi pekerjaan untuk pengembangan selanjutnya <br>
                2. Menggunakan pola kerja yang sama/rutin (business as usual) <br>
                3. Menyusun program kerja yang sama dengan tahun sebelumnya
              </p>
            </div>
            <div v-else>
              <p class="custom-text">Memiliki daya cipta, memiliki kemampuan untuk menciptakan hal baru yang berbeda dari yang sudah ada atau sudah dikenal sebelumnya (gagasan, metode, alat).</p>
            </div>
          </div>
        </div>

      </div>
    </div>
    
  </div>
</template>

<script>
import vektorTurun from '@/assets/nilaibudaya/vektorturun.svg';

export default {
  data() {
    return {
      CtpVisible: false,
      CiVisible: false,
      CmiVisible: false,
      CpVisible: false,
      CmmVisible: false,
      CtaVisible: false,
      CkiVisible: false,
      vektorTurun,
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
    toggleCtpVisible() {
      this.CtpVisible = !this.CtpVisible;
      this.CiVisible = false;
      this.CmiVisible = false;
      this.CpVisible = false;
      this.CmmVisible = false;
      this.CtaVisible = false;
      this.CkiVisible = false;
    },
    toggleCiVisible(){
      this.CiVisible = !this.CiVisible;
      this.CtpVisible = false;
      this.CmiVisible = false;
      this.CpVisible = false;
      this.CmmVisible = false;
      this.CtaVisible = false;
      this.CkiVisible = false;
    },
    toggleCmiVisible(){
      this.CmiVisible = !this.CmiVisible;
      this.CtpVisible = false;
      this.CiVisible = false;
      this.CpVisible = false;
      this.CmmVisible = false;
      this.CtaVisible = false;
      this.CkiVisible = false;
    },
    toggleCpVisible(){
      this.CpVisible = !this.CpVisible;
      this.CtpVisible = false;
      this.CiVisible = false;
      this.CmiVisible = false;
      this.CmmVisible = false;
      this.CtaVisible = false;
      this.CkiVisible = false;
    },
    toggleCmmVisible(){
      this.CmmVisible = !this.CmmVisible;
      this.CtpVisible = false;
      this.CiVisible = false;
      this.CmiVisible = false;
      this.CpVisible = false;
      this.CtaVisible = false;
      this.CkiVisible = false;
    },
    toogleCtaVisible(){
      this.CtaVisible = !this.CtaVisible;
      this.CtpVisible = false;
      this.CiVisible = false;
      this.CmiVisible = false;
      this.CpVisible = false;
      this.CmmVisible = false;
      this.CkiVisible = false;
    },
    toogleCkiVisible(){
      this.CkiVisible = !this.CkiVisible;
      this.CtpVisible = false;
      this.CiVisible = false;
      this.CmiVisible = false;
      this.CpVisible = false;
      this.CmmVisible = false;
      this.CtaVisible = false;
    }
  },
  mounted() {
    this.updateDate();
    setInterval(this.updateDate, 1000);
  },
};
</script>

<style scoped>
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
  font-weight: 700;
}

.box-tujuan {
  border-radius: 10px;
  border: 1px solid #005689;
  width: 100%;
  max-width: 447px;
}

.judul-tujuan {
  font-size: 16px;
  color: #2A7CBF;
  font-weight: 700;
}
</style>

<template>

  <div class="flex mt-10 items-start">
    
     <!-- Sidebar Menu -->
    <div class="flex flex-col items-center w-full sm:w-[241px] h-auto md:ml-32 rounded-xl overflow-hidden mt-5 sm:mt-0">
      <div
        v-for="(item, index) in items"
        :key="index"
        :class="[
          'w-full p-4 text-center cursor-pointer font-bold',
          index % 2 === 0 ? 'bg-[#B9DBF8]' : 'bg-[#005689]',
          selected === index ? 'bg-[#F5F5F5] text-black' : ''
        ]"
        @click="selectItem(index)"
      >
        {{ item }}
      </div>
    </div>

    <!-- Content Display -->
    <div class="flex flex-col items-start ml-4 space-y-4 w-[940px]">
      <div
        v-for="(content, index) in displayedContent"
        :key="index"
        class="w-full p-4 bg-white border border-gray-300 rounded-lg shadow"
      >
        <p class="text-left text-[#2A7CBF] font-Poppins self-start">{{ content.text }}</p>
        <p class="text-right text-sm text-[#4D4D4D]">{{ content.date }}</p>
      </div>
      <p class="font-medium text-20px text-[#005689] text-left mb-10 selengkapnya hover:cursor-pointer">Selengkapnya</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ["Siaran Pers", "Menteri Menyapa", "Berita", "Pengumuman"],
      contents: {
        "Siaran Pers": [
          { text: "Kemendikbudristek Terus Wujudkan Generasi Sehat, Kuat, Cerdas, dan Berkarakter Melalui Gebyar GSS", date: "28-05-2024 19:22" },
          { text: "Keterhubungan Budaya Antar Bangsa di Asia Tenggara melalui Rempah", date: "27-05-2024 18:22" },
          { text: "Pemda Harus Pahami Filosofi Kurikulum Merdeka sebagai Penyelenggara dan Pembina Kurikulum di Satuan", date: "25-05-2024 17:12" },
          { text: "Setelah Kenaikan UKT Dibatalkan, Mendikbudristek Minta PTN Rangkul Calon Mahasiswa Baru Terdampak", date: "24-05-2024 10:20" }
        ],
        "Menteri Menyapa": [
          { text: "Pidato Mendikbudristek dalam Peringatan Hari Pendidikan Nasional 2023", date: "27-05-2024 17:21" },
          { text: "Mendikbudristek Mengajak Masyarakat Ikuti Beasiswa Pendidikan Indonesia", date: "26-05-2024 17:10" },
          { text: "Pidato Peringatan Hari Kesaktian Pancasila 2021", date: "25-05-2024 16:12" },
          { text: "Pidato Mendikbudristek dalam rangka Hari Guru Sedunia 2021", date: "23-05-2024 15:10" }
        ],
        "Berita": [
          { text: "Kemendikbudristek Menjadi 10 Kementerian Terbaik dalam Penerapan SPBE Tahun 2024", date: "27-05-2024 15:10" },
          { text: "Antusiasme Warga Malaysia Keturunan Jawa Kembangkan Bahasa Jawa di Muar, Johor Bahru, Malaysia", date: "26-05-2024 14:22" },
          { text: "Mahasiswa Humboldt Universität Berlin Eksplorasi Kebudayaan Indonesia di RBI Berlin", date: "25-05-2024 16:12" },
          { text: "Semangat Provinsi Yogyakarta Melanjutkan Merdeka Belajar", date: "13-05-2024 13:20" }
        ],
        "Pengumuman": [
          { text: "Pedoman Penyelenggaraan Upacara Bendera Peringatan Hari Lahir Pancasila Tahun 2024", date: "28-05-2024 19:10" },
          { text: "Seleksi Calon Atase Pendidikan dan Kebudayaan Tahun 2024", date: "24-05-2024 18:22" },
          { text: "Pidato Mendikbudristek Dalam Rangka Memperingati Hari Pendidikan Nasional 2024", date: "23-05-2024 21:12" },
          { text: "Partisipasi Hari Kesiapsiagaan Bencana Tahun 2024", date: "22-05-2024 15:25" }
        ]
      },
      selected: 0
    };
  },
  computed: {
    displayedContent() {
      return this.contents[this.items[this.selected]];
    }
  },
  methods: {
    selectItem(index) {
      this.selected = index;
    }
  }
};
</script>
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
        <a href="/home" class="rounded-l">
          <img src="../components/icons/home.svg" alt="Home Icon" class="w-[38px] h-[40px] bg-[#253C80] mr-1 p-2 hover:bg-[#828282] rounded-l">
        </a>
        <a class="text-white bg-[#2980B9] p-2 mr-1 hover:bg-[#828282]" href="/profil">PROFIL</a>
        <a class="text-white bg-[#253C80] rounded-r p-2 hover:bg-[#828282]" href="/sejarah">SEJARAH</a>
      </div>
    </div> 

    <!-- Content -->
    <div class="container mx-auto px-4 py-8 mt-[-100px] konten">
      <div class="relative">
        <div v-for="(event, index) in events" :key="index" class="mb-8 flex flex-col md:flex-row justify-between items-center w-full relative">
          <div :class="['flex', index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse', 'flex-col']">
            <div class="flex items-center justify-center space-x-4 md:mr-4 mb-4 md:mb-0">
              <div class="w-32 h-32 flex items-center justify-center rounded-lg">
                <img :src="event.image" alt="Event Image" class="object-contain rounded-lg w-full h-full">
              </div>
              <div v-if="event.additionalImages && event.additionalImages.length" class="flex items-center space-x-4">
                <div v-for="(additionalImage, imgIndex) in event.additionalImages" :key="imgIndex" class="flex items-center justify-center rounded-lg">
                  <img :src="additionalImage.src" :alt="'Additional Image ' + (imgIndex + 1)" class="object-cover rounded-lg" :style="{ width: additionalImage.width + 'px', height: additionalImage.height + 'px' }">
                </div>
              </div>
            </div>
            <div class="bg-white p-4 w-full">
              <h3 class="mb-2 font-bold text-lg kepala-teks">{{ event.title }}</h3>
              <p class="mb-2 font-bold kepala-teks text-sm">{{ event.period }}</p>
              <p class="text-gray-600 isi-teks text-sm">{{ event.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import image1 from '@/assets/sejarah/gambar1.svg';
import image2 from '@/assets/sejarah/gambar2.svg';
import image3 from '@/assets/sejarah/gambar3.svg';
import image4 from '@/assets/sejarah/gambar4.svg';
import image5 from '@/assets/sejarah/gambar5.svg';
import image6 from '@/assets/sejarah/gambar6.svg';
import image7 from '@/assets/sejarah/gambar7.svg';

export default {
  data() {
    return {
      day: '',
      monthYear: '',
      events: [
        {
          title: "Awal Kemerdekaan",
          period: "(1945 - 1950)",
          description: "Pada Kabinet Syahrir II, Menteri Pengajaran dijabat Muhammad Sjafei sampai tanggal 2 Oktober 1946. Selanjutnya Menteri Pengajaran dipercayakan kepada Mr. Soewandi hingga 27 Juni 1947. Pada era kepemimpinan Mr. Soewandi ini terbentuk Panitia Penyelidik Pengajaran Republik Indonesia yang diketua Ki Hadjar Dewantara. Panitia ini bertujuan meletakkan dasar-dasar dan susunan pengajaran baru.",
          image: image1,
          additionalImages: []
        },
        {
          title: "Era Demokrasi Liberal",
          period: "(1951 - 1959)",
          description: "Pada periode ini, kebijakan pendidikan merupakan kelanjutan kebijakan menteri periode sebelumnya. Yang menonjol pada era ini adalah lahirnya payung hukum legal formal di bidang pendidikan yaitu UU Pokok Pendidikan Nomor 4 Tahun 1950.",
          image: image2,
          additionalImages: []
        },
        {
          title: "Era Demokrasi Terpimpin",
          period: "(1959 - 1966)",
          description: "Dalam Kabinet Kerja I, 10 Juli 1959–18 Februari 1960, status kementerian diubah menjadi menteri muda. Kementerian yang mengurusi pendidikan dibagi menjadi tiga menteri muda, di antaranya: Menteri Muda Bidang Sosial Kultural dipegang Dr. Prijono, Menteri Muda PP dan K dipegang Sudjibjo, dan Menteri Muda Urusan Pengerahan Tenaga Rakyat dipegang Sujono.",
          image: image3,
          additionalImages: []
        },
        {
          title: "Era Orde Baru",
          period: "(1966 - 1998)",
          description: "Kebijakan pada era ini antara lain kewajiban penataran P4 bagi peserta didik, normalisasi kehidupan kampus, bina siswa melalui OSIS, ejaan Bahasa Indonesia yang disempurnakan atau EYD, kuliah kerja nyata (KKN) bagi mahasiswa, merintis sekolah pembangunan, dan lain-lain.",
          image: image4,
          additionalImages: []
        },
        {
          title: "Era Reformasi",
          period: "(1998 - 2011)",
          description: "Kebijakan pendidikan di era reformasi antara lain perubahan IKIP menjadi universitas, reformasi undang-undang pendidikan dengan lahirnya Undang-Undang Nomor 20 Tahun 2003, Ujian Nasional (UN), sertifikasi guru dan dosen, Bantuan Operasional Sekolah (BOS), pendidikan karakter, dan lain-lain.",
          image: image5,
          additionalImages: []
        },
        {
          title: "Era 2011 - Sekarang",
          period: "(2011 - sekarang)",
          description: "Pada 23 Oktober 2019, Presiden Joko Widodo melantik Nadiem Anwar Makarim sebagai Mendikbud di era Kabinet Indonesia Maju Presiden Joko Widodo dan Wakil Presiden Ma’ruf Amin. Pada tahun 2021, Kementerian Riset dan Teknologi digabungkan ke Kementerian Pendidikan dan Kebudayaan menjadi Kementerian Pendidikan, Kebudayaan, Riset dan Teknologi (Kemendikbudristek). Kementerian ini dipimpin oleh Nadiem Anwar Makarim yang dilantik oleh Presiden Joko Widodo pada 28 April 2021.",
          image: image6,
          additionalImages: [
            { src: image7, width: 72, height: 107 }
          ]
        }
      ]
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
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}

.kepala-teks {
  font-size: 20px;
  color: #4D4D4D;
}

.isi-teks {
  font-size: 14px;
  color: #4D4D4D;
}

  @media(max-width: 1280px){
    .konten{
      margin-top: -100px;
      max-width: 1000px;
    }
  }
</style>
 

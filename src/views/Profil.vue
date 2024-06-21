<template>
    <div class="flex items-center ml-20 mt-10">
      <a href="/home" class="rounded-l">
        <img src="../components/icons/home.svg" alt="Home Icon" class="w-[38px] h-[40px] bg-[#253C80] mr-1 p-2 hover:bg-[#828282] rounded-l">
      </a>
      <a class="text-white bg-[#2980B9] rounded-r p-2 mr-1 hover:bg-[#828282]" href="/profil">PROFIL</a>
    </div>
  
    <div class=" p-4 mb-10">
      <div class="p-4">
        <h1 class="text-3xl mb-4 ml-4 md:ml-12" style="color: #282E45; font-size: 45px; font-weight: 700; letter-spacing: -0.45px;">PROFIL</h1>
        <p class="mb-4 ml-4 md:ml-12 text-justify profil-custom">
          Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi (Kemendikbudristek) sebagai lembaga pemerintahan
          yang bertanggung jawab atas penyelenggaraan urusan di bidang pendidikan, kebudayaan, riset, dan teknologi.
          Dengan visi mewujudkan Indonesia maju yang berdaulat, mandiri, dan berkepribadian, Kemendikbudristek
          menjalankan berbagai program untuk meningkatkan kualitas pendidikan dan kebudayaan. Struktur organisasi
          yang terdiri dari beberapa direktorat jenderal dan biro, serta berbagai program inovatif seperti Merdeka Belajar
          dan Program Indonesia Pintar, mencerminkan komitmen Kemendikbudristek dalam menciptakan sistem
          pendidikan yang inklusif dan berdaya saing tinggi.
        </p>
      </div>
      <div class="container-box mx-auto space-y-4 p-4 md:p-0">
        <a href="/sejarah" class="p-4">
          <div class="p-4 box-bawah shadow-sm">
            <h2 class="text-xl container-judul mb-2 text-justify">Sejarah Kemendikbudristek</h2>
            <p class="text-justify teks-bawah">
              Visi dan misi mencerminkan komitmen untuk memajukan pendidikan, kebudayaan, riset, dan teknologi di Indonesia secara holistik dan berkelanjutan, dengan memperhatikan kebutuhan serta potensi masyarakat.
            </p>
          </div>
        </a>
        <a href="/nilaibudaya" class="p-4">
          <div class="p-4 box-bawah shadow-sm">
            <h2 class="text-xl container-judul mb-2 text-justify">Nilai Budaya Kerja Kemendikbudristek</h2>
            <p class="text-justify teks-bawah">
              Menguraikan nilai-nilai utama dan prinsip-prinsip kerja yang dianut oleh Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi
            </p>
          </div>
        </a>      
        <a href="/artilogo" class="p-4">
          <div class="p-4 box-bawah shadow-sm ">
            <h2 class="text-xl container-judul mb-2 text-justify">Logo Kemendikbudristek</h2>
            <p class="text-justify teks-bawah">
              Menjelaskan makna, simbolisme, dan elemen desain dari logo resmi Kementerian, termasuk filosofi yang mendasarinya dan bagaimana elemen visualnya mencerminkan visi dan misi kementerian
            </p>
          </div>
        </a>
        <a href="" class="p-4">
          <div class="p-4 box-bawah shadow-sm">
            <h2 class="text-xl container-judul mb-2 text-justify">Akuntabilitas Kinerja</h2>
            <p class="text-justify teks-bawah">
              Memberikan informasi tentang pengukuran dan pelaporan kinerja kementerian, termasuk indikator kerja utama, laporan kinerja tahunan, serta mekanisme pemantauan dan evaluasi
            </p>
          </div>
        </a>
        <a href="" class="p-4">
          <div class="p-4 box-bawah shadow-sm">
            <h2 class="text-xl container-judul mb-2 text-justify">Informasi pengaduan</h2>
            <p class="text-justify teks-bawah">
              Menyediakan saluran bagi masyarakat untuk mendapatkan informasi terkait layanan kementerian dan menyampaikan pengaduan atau keluhan, serta prosedur pengaduan dan kontak yang bisa dihubungi
            </p>
          </div>  
        </a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Profil'
  }
  </script>
  
  <style scoped>
  .container-box {
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .box-bawah {
    border: 1px solid #D4D5D9;
    border-radius: 4px;
  }
  
  .text-justify {
    text-align: justify;
  }
  
  .profil-custom {
    font-family: Lora, serif;
    font-size: 26px;
    font-style: italic;
    font-weight: 400;
    line-height: 41px;
    letter-spacing: -0.26px;
    color: #53576A;
  }
  
  .container-judul {
    font-family: Poppins, sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 41px;
    letter-spacing: -0.39px;
    text-align: left;
    color: #006AFB;
  }
  
  .teks-bawah {
    font-family: Lato, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 27px;
    text-align: justify;
    color: #53576A;
  }
  </style>
  
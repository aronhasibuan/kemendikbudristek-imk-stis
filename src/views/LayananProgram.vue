<template>
    <div class="flex items-center ml-20 mt-10">
      <a href="/home">
        <img src="../components/icons/home.svg" alt="Home Icon" class="w-[38px] h-[40px] bg-[#253C80] mr-1 p-2 hover:bg-[#828282]">
      </a>
      <a class="text-white bg-[#2980B9] rounded-lg p-2 mr-1 hover:bg-[#828282]" href="/profil">LAYANAN & PROGRAM</a>
    </div>
  
    <div class=" p-4 mb-10">
      <div class="p-4">
        <h1 class="text-3xl mb-4 ml-4 md:ml-12" style="color: #282E45; font-size: 45px; font-weight: 700; letter-spacing: -0.45px;">LAYANAN & PROGRAM</h1>
        <p class="mb-4 ml-4 md:ml-12 text-justify profil-custom">
          Layanan dan program adalah inisiatif, dukungan, serta fasilitas yang disediakan oleh Kemendikbudristek untuk
          berbagai pemangku kepentingan seperti siswa, mahasiswa, guru, dosen, orang tua, sekolah, kampus, masyarakat, 
          dan pemerintah daerah. Layanan ini mencakup berbagai aspek seperti bantuan pendidikan, pelatihan profesional, 
          dukungan infrastruktur, dan pengembangan budaya. Program-program tersebut dirancang untuk meningkatkan
          kualitas pendidikan dan kebudayaan di Indonesia serta memastikan akses yang adil dan merata bagi semua pihak.
        </p>
      </div>
      <div class="container-box mx-auto space-y-4 p-4 md:p-0">
        <a href="" class="p-4">
          <div class="p-4 box-bawah shadow-sm">
            <h2 class="text-xl container-judul mb-2 text-justify">Siswa & Mahasiswa</h2>
            <p class="text-justify teks-bawah">
              Layanan dan program ini mencakup berbagai bantuan dan fasilitas untuk mendukung
              proses belajar mengajar, seperti beasiswa, bantuan pendidikan, akses ke materi
              pembelajaran, program bimbingan, dan kegiatan ekstrakurikuler.
            </p>
          </div>
        </a>
        <a href="" class="p-4">
          <div class="p-4 box-bawah shadow-sm">
            <h2 class="text-xl container-judul mb-2 text-justify">Guru & Dosen</h2>
            <p class="text-justify teks-bawah">
              Inisiatif ini fokus pada peningkatan kompetensi dan kesejahteraan guru dan dosen
              melalui pelatihan professional, program sertifikasi, peningkatan kapasistas,
              pengembangan karir, dan intensif untuk tenaga pengajar.
            </p>
          </div>
        </a>      
        <a href="" class="p-4">
          <div class="p-4 box-bawah shadow-sm ">
            <h2 class="text-xl container-judul mb-2 text-justify">Orang Tua</h2>
            <p class="text-justify teks-bawah">
              Layanan ini menyediakan informasi dan sumber daya yang membantu orang tua
              dalam mendukung pendidikan anak-anak mereka, termasuk panduan pendidikan,
              workshop, dan program keterlibatan orang tua dalam proses belajar mengajar.
            </p>
          </div>
        </a>
        <a href="" class="p-4">
          <div class="p-4 box-bawah shadow-sm">
            <h2 class="text-xl container-judul mb-2 text-justify">Sekolah & Kampus</h2>
            <p class="text-justify teks-bawah">
              Program yang mendukung pengembangan institusi pendidikan melalui akreditasi, 
              bantuan infrastruktur, program peningkatan mutu, manajemen sekolah, dan dukungan
              operasional serta pengembangan kurikulum.
            </p>
          </div>
        </a>
        <a href="" class="p-4">
          <div class="p-4 box-bawah shadow-sm">
            <h2 class="text-xl container-judul mb-2 text-justify">Budaya & Bahasa</h2>
            <p class="text-justify teks-bawah">
              Inisiatif ini meliputi program pelestarian dan pengembangan budaya dan bahasa
              daerah, kegiatan seni budaya, pelestarian cagar budaya, pendidikan budaya, dan
              pembinaan bahasa lokal serta nasional.
            </p>
          </div>  
        </a>
        <a href="" class="p-4">
          <div class="p-4 box-bawah shadow-sm">
            <h2 class="text-xl container-judul mb-2 text-justify">Pemerintah Daerah</h2>
            <p class="text-justify teks-bawah">
              Layanan dan program yang mendukung pemerintah daerah dalam mengelola sektor
              pendidikan dan kebudayaan di wilayahnya, termasuk bantuan teknis, pendanaan,
              kolaborasi, dan program-program pengembangan daerah.
            </p>
          </div>  
        </a>
        <a href="" class="p-4">
          <div class="p-4 box-bawah shadow-sm">
            <h2 class="text-xl container-judul mb-2 text-justify">Masyarakat & Mitra</h2>
            <p class="text-justify teks-bawah">
              Program kemitraan yang melibatkan berbagai elemen masyarakat dan mitra strategis,
              seperti organisasi non-pemerintahan, sektor swasta, dan komunitas lokal 
              untuk mendukung pendidikan dan kebudayaan melalui kerjasama dan partisipasi aktif.
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
  
<template>

  <!-- Navigation Bar -->
  <nav class="bg-backgroundNavbar p-4 flex justify-between items-center shadow-lg w-full z-10">

    <!-- Hamburger Menu For Small Screen -->
    <span class="absolute md:hidden left-2 cursor-pointer text-2xl" @click="menuOpen">
      <i :class="[open ? 'bi bi-x' : 'bi bi-filter-left']"></i>
    </span>

    <!-- Logo & Nama Kementerian -->
    <div class="flex items-center md:ml-0 ml-10">
      <a href="/home">
        <img src="@/assets/logo.png" alt="Logo" class="md:w-28 w-10 h-auto md:ml-0 ml-6">
      </a>
      <div class="text-biruKemdikbudristek font-poppins font-bold text-sm md:text-xl">
        <p class="hidden md:block">
          Kementerian<br>
          Pendidikan, Kebudayaan,<br>
          Riset, dan Teknologi
        </p>
      </div>
    </div>

    <!-- Menu -->
    <div class="md:ml-12">
      <ul class="md:flex md:items-center md:px-0 px-3 md:pb-0 pb-10 md:static absolute bg-backgroundNavbar w-full top-14 duration-700 ease-in border-t-2 md:border-t-0" :class="[open ? 'left-0' : 'left-[-100%]']">
        <li class="md:mr-14 md:my-0 my-6 relative" v-for="(link, index) in Links" :key="index">
          <div class="flex items-center">
            <img :src="link.image" alt="" class="mr-1 w-3 h-3">
              <a :href="link.link" class="text-black font-bold text-base font-poppins hover:text-[#005689] hover:underline">{{ link.name }}</a>
            <img v-if="link.subLinks" src="../components/icons/panahkanan.svg" alt="" class="md:hidden ml-auto w-6 h-6 cursor-pointer" @click="toggleSublink(index)">
          </div>


          <!-- Sub Menu Untuk Screen Sedang -->
          <ul v-if="link.subLinks" class="top-full absolute left-0 hidden bg-[#D8E9F6] shadow-md w-max md:group-hover:block">
            <li v-for="(subLink, subIndex) in link.subLinks" :key="subIndex" class="relative group flex hover:bg-white items-center">
              <a :href="subLink.link" class="block px-4 py-2 text-black font-medium font-poppins hover:text-[#005689]">{{ subLink.name }}</a>
              <img v-if="subLink.subsublink" src="../components/icons/panahkananbiru.svg" alt="" class="ml-auto w-4 h-4 cursor-pointer">
              <ul v-if="subLink.subsublink" class="absolute left-full top-0 hidden bg-[#D8E9F6] shadow-md mt-0 w-max group-hover:block">
                <li v-for="(subSubLink, subSubIndex) in subLink.subsublink" :key="subSubIndex">
                  <a :href="subSubLink.link" class="block px-4 py-2 text-black font-medium font-poppins hover:bg-white hover:text-[#005689]">{{ subSubLink.name }}</a>
                </li>
              </ul>
            </li>
          </ul>

          <!-- Sub Menu Untuk Screen Kecil -->
          <ul v-show="link.expanded" class="md:hidden ml-6">
            <!-- Sub Link -->
            <li v-for="(subLink, subIndex) in link.subLinks" :key="subIndex" class="md:hidden">
              <div class="flex items-center hover:bg-white">
                <a :href="subLink.link" class="block py-2 px-4 text-black font-medium font-poppins">{{ subLink.name }}</a>
                <img v-if="subLink.subsublink" src="../components/icons/panahkanan.svg" alt="" @click="toggleSubsublink(index, subIndex)" class="ml-auto w-6 h-6 cursor-pointer">
              </div>
              <ul v-show="subLink.expanded" class="md:hidden ml-6">
                <!-- Subsublink -->
                <li v-for="(subsublink, subSubIndex) in subLink.subsublink" :key="subSubIndex" class="md:hidden hover:bg-white">
                  <a :href="subsublink.link" class="block py-2 px-4 text-[#005689] font-medium font-poppins">{{ subsublink.name }}</a>
                </li> 
              </ul>
            </li>
          </ul>

        </li>
      </ul>
    </div>

    <!-- Search Box -->
    <div class="flex items-center md:ml-0 ml-2 mr-4">
      <input type="text" placeholder="Pencarian" class="md:px-4 md:py-2 py-1 rounded-l-full placeholder-black md:w-44 w-full md:text-lg text-xs text-center focus:outline-none" id="pencarian" name="pencarian">
      <div class="bg-white md:px-4 md:py-2 rounded-r-full hover:bg-gray-200 md:w-30 md:h-11 w-auto h-6 flex items-center justify-center">
        <img src="../components/icons/kacapembesar.svg" alt="Search" class="w-full h-full md:p-0 p-1">
      </div>
    </div>

    <!-- Language Selector -->
    <div>
      <select v-model="selectedOption" class="cursor-pointer md:w-24 w-12 bg-white rounded-lg border border-gray-300 text-gray-700 md:p-2 font-bold text-center md:text-lg text-xs p-1">
        <option :style="{ backgroundColor: selectedOption === 'ID' ? '#005689' : '#D8E9F6', color: selectedOption === 'ID' ? '#ffffff' : '#005689' }" value="ID" selected>ID</option>
        <option :style="{ backgroundColor: selectedOption === 'EN' ? '#005689' : '#D8E9F6', color: selectedOption === 'EN' ? '#ffffff' : '#005689' }" value="EN">EN</option>
      </select>
    </div>

  </nav>

</template>

<script>
  export default {
    name: 'Navbar',
    data() {
      return {
        selectedOption: 'ID',
        open: false,
        Links: [
          {
            name: "PROFIL",
            link: "/profil",
            image: 'src/components/icons/info.svg',
            expanded: false,
            subLinks: [
              { name: "Sejarah Kemendikbudristek", link: "/sejarah", expanded: false },
              { name: "Nilai Budaya Kerja Kemendikbudristek", link: "/nilaibudaya", expanded: false },
              { name: "Logo Kemendikbudristek", link: "/artilogo", expanded: false },
              { name: "Akuntabilitas Kinerja", link: "/akuntabilitaskinerja", expanded: false },
            ]
          },
          { name: "KURIKULUM", link: "/kurikulum", image: 'src/components/icons/toga.svg', expanded: false },
          {
            name: "LAYANAN & PROGRAM",
            link: "/layananprogram",
            image: 'src/components/icons/bag.svg',
            expanded: false,
            subLinks: [
              {
                name: "Siswa & Mahasiswa",
                expanded: false,
                subsublink: [
                  { name: "Beasiswa Unggulan", link: "https://beasiswaunggulan.kemdikbud.go.id/" },
                  { name: "Perpustakaan", link: "https://perpustakaan.kemdikbud.go.id/" },
                  { name: "Darmasiswa", link: "https://darmasiswa.kemdikbud.go.id/darmasiswa-president-university-the-exciting-journey-of-students-in-discovering-the-culture-and-indonesian-language/" },
                  { name: "Kamus Besar Bahasa Indonesia (KBBI)", link: "https://kbbi.kemdikbud.go.id/" },
                  { name: "Pembinaan Kursus dan Pelatihan", link: "https://kursus.kemdikbud.go.id/webkursus/" },
                  { name: "Nomor Induk Siswa Nasional", link: "https://nisn.data.kemdikbud.go.id/" },
                ]
              },
              {
                name: "Guru & Dosen",
                expanded: false,
                subsublink: [
                  { name: "Layanan Sumber Daya Dikti", link: "https://dikti.kemdikbud.go.id/layanan-sumber-daya/" },
                  { name: "Rumah Belajar", link: "https://belajar.kemdikbud.go.id/" },
                  { name: "NUPTK", link: "https://gtk.data.kemdikbud.go.id/" },
                  { name: "Layanan Informasi, Pengaduan, dan Saran", link: "https://ult.kemdikbud.go.id/"}
                ]
              },
              {
                name: "Orang Tua",
                expanded: false,
                subsublink: [
                { name: "Sistem Informasi Perbukuan Indonesia", link: "https://buku.kemdikbud.go.id/"},
                  { name: "Sekolah Kita", link: "https://sekolah.data.kemdikbud.go.id/" },
                ]
              },
              {
                name: "Sekolah & Kampus",
                expanded: false,
                subsublink: [
                  { name: "Bantuan Operasional Sekolah", link: "https://bos.kemdikbud.go.id/portal/welcome" },
                  { name: "Pembinaan Kursus dan Pelatihan", link: "https://kursus.kemdikbud.go.id/" },
                  { name: "Majalah Jendela", link: "https://jendela.kemdikbud.go.id/" },
                  { name: "Penguatan Pendidikan Karakter", link: "https://cerdasberkarakter.kemdikbud.go.id/" },
                  { name: "Penyaluran Siswa", link: "https://e-layanan.dikdasmen.kemdikbud.go.id/elayanan/" },
                ]
              },
              {
                name: "Budaya & Bahasa",
                expanded: false,
                subsublink: [
                  { name: "Bahasa Indonesia bagi Penutur Asing (BIPA)", link: "https://bipa.kemdikbud.go.id/portal" },
                  { name: "Penyuluhan Bahasa", link: "https://rumahpusbin.kemdikbud.go.id/" },
                  { name: "Registrasi Koleksi Museum", link: "https://museum.kemdikbud.go.id/" },
                  { name: "Uji Kemahiran Berbahasa Indonesia (UKBI)", link: "https://ukbi.kemdikbud.go.id/" },
                  { name: "Kamus Besar Bahasa Indonesia (KBBI)", link: "https://kbbi.kemdikbud.go.id/" },
                ]
              },
              {
                name: "Pemerintah Daerah",
                expanded: false,
                subsublink: [
                  { name: "Bantuan Teknis Bahasa", link: "https://badanbahasa.kemdikbud.go.id/" },
                  { name: "Helpdesk Dapodik PAUD dan Dikmas", link: "#" },
                  { name: "Jurnal Dikbud", link: "http://jurnaldikbud.kemdikbud.go.id/index.php/jpnk" },
                  { name: "Produk Hukum", link: "https://jdih.kemdikbud.go.id/" },
                  { name: "Registrasi Koleksi Museum", link: "https://museum.kemdikbud.go.id/" },
                ]
              },
              {
                name: "Masyarakat & Mitra",
                expanded: false,
                subsublink: [
                  { name: "Bantuan Operasional Sekolah", link: "https://bos.kemdikbud.go.id/portal/welcome" },
                  { name: "Bantuan Teknis Bahasa", link: "https://badanbahasa.kemdikbud.go.id/" },
                  { name: "Beasiswa Unggulan", link: "https://beasiswaunggulan.kemdikbud.go.id/" },
                  { name: "Data Referensi Pendidikan dan Kebudayaan", link: "https://referensi.data.kemdikbud.go.id/index.php" },
                  { name: "Penyuluhan Bahasa", link: "https://badanbahasa.kemdikbud.go.id/" },
                  { name: "Layanan Pengadaan Secara Elektronik", link: "https://lpse.kemdikbud.go.id/eproc4" },
                  { name: "Seleksi CPNS Kemendikbud", link: "https://cpns.kemdikbud.go.id/"}
                ]
              }
            ]
          },
          { name: "KEBIJAKAN", link: "/kebijakan", image: 'src/components/icons/building.svg' }
        ]
      };
    },
    methods: {
      menuOpen() {
        this.open = !this.open;
      },
      toggleSublink(index) {
        this.Links.forEach((link, i) => {
          if (i !== index) {
            link.expanded = false;
          }
        });
        this.Links[index].expanded = !this.Links[index].expanded;
      },
      toggleSubsublink(index, subIndex) {
        this.Links[index].subLinks.forEach((subLink, i) => {
          if (i !== subIndex) {
            subLink.expanded = false;
          }
        });
        this.Links[index].subLinks[subIndex].expanded = !this.Links[index].subLinks[subIndex].expanded;
      }
    }
  };
</script>

<style scoped>
  select {
    text-align-last: center;  
  }

  .placeholder-black::placeholder {
      color: black;
  }

  @media (min-width: 768px) {
    .relative:hover > ul {
      display: block;
    }

    .group:hover > ul {
      display: block;
    }

    .group:hover > img {
      transform: rotate(180deg);
    }
  }
</style>

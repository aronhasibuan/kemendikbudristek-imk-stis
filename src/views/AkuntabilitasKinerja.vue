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
          <img src="../components/icons/home.svg" alt="Home Icon" class="w-[38px] h-[40px] bg-[#253C80] mr-1 p-2 hover:bg-[#828282]">
        </a>
        <a class="text-white bg-[#2980B9] rounded-lg p-2 mr-1 hover:bg-[#828282]" href="/profil">PROFIL</a>
        <a class="text-white bg-[#253C80] rounded-lg p-2 hover:bg-[#828282]" href="/rencanastrategis">RENCANA STRATEGIS</a>
      </div>
    </div>

    <!--Content-->
    <div class="mt-[-76px] ml-32 mr-32 mb-32">

        <div class="mb-20">
            <h2 class="text-[32px] font-semibold mb-4">
                Rencana Strategis (Renstra) Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi
            </h2>
            <p class="mb-4 text-justify text-[16px]">
                Rencana Strategis (Renstra) Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi 
                (Kemendikbudristek) diatur dalam Peraturan Menteri Pendidikan, Kebudayaan, Riset, dan 
                Teknologi (Permendikbudristek) Nomor 13 Tahun 2022 Tentang Perubahan Atas Peraturan Menteri 
                Pendidikan dan Kebudayaan Nomor 22 Tahun 2020 Tentang Rencana Strategis Kementerian 
                Pendidikan dan Kebudayaan Tahun 2020-2024. Dokumen rencana strategis dapat di unduh pada
                link di bawah ini:
            </p>
            <ul class="list-disc ml-4">
                <li>
                    <a href="https://www.kemdikbud.go.id/main/files/download/2021343872258a2" class="hover:text-[#005689]">Rencana Strategis (Renstra) Tahun 2020-2024 (.pdf)</a>
                </li>
                <li>
                    <a href="https://jdih.kemdikbud.go.id/arsip/Permendikbud%2012%20Tahun%202018.pdf" class="hover:text-[#005689]">Rencana Strategis (Renstra) Tahun 2015-2019 (.pdf)</a>
                </li>
                <li>
                    <a href="https://www.kemdikbud.go.id/dokumen/renstra-2010-2014/renstra20102014.rar" class="hover:text-[#005689]">Rencana Strategis (Renstra) Tahun 2010-2014 (.rar)</a>
                </li>
            </ul>
        </div>

        <div>
          <h2 class="text-[32px] font-semibold mb-4"> 
              Laporan Akuntabilitas Kinerja Kemendikbudristek
          </h2>
          <p class="mb-4 text-justify text-[16px]">
            Berikut adalah informasi tentang Laporan Akuntabilitas Kinerja Kementerian Pendidikan, 
            Kebudayaan, Riset, dan Teknologi (Kemendikbudristek):
          </p>
          <ul class="list-disc ml-4">
              <li>
                  <a href="https://www.kemdikbud.go.id/main/files/download/7b4ec2ba683abd9" class="hover:text-[#005689]">Laporan Kinerja Kemendikbudristek Tahun 2023</a>
              </li>
              <li>
                  <a href="https://www.kemdikbud.go.id/main/files/download/9addd82b6ae0104" class="hover:text-[#005689]">Laporan Kinerja Kemendikbudristek Tahun 2022</a>
              </li>
              <li>
                  <a href="https://kemdikbud.go.id/main/files/download/8504073353c0656" class="hover:text-[#005689]">Laporan Kinerja Kemendikbudristek Tahun 2021</a>
              </li>
              <li>
                  <a href="https://www.kemdikbud.go.id/main/files/download/c5213072293e0db" class="hover:text-[#005689]">Laporan Hasil Monitoring dan Evaluasi Pelaksanaan Quick Wins Kemendikbudristek Semester I Tahun 2022</a>
              </li>
              <li>
                  <a href="https://www.kemdikbud.go.id/main/files/download/8b81c6c50214ecf" class="hover:text-[#005689]">Laporan Hasil Monitoring dan Evaluasi Pelaksanaan Quick Wins Kemendikbudristek Triwulan IV Tahun 2021</a>
              </li>
              <li>
                  <a href="https://www.kemdikbud.go.id/main/files/download/4bd5f2e699ddcbd" class="hover:text-[#005689]">Perjanjian Kinerja Mendikbudristek Tahun 2024</a>
              </li>
              <li>
                  <a href="https://www.kemdikbud.go.id/main/files/download/1ceeeca861ee57f" class="hover:text-[#005689]">Perjanjian Kinerja Mendikbudristek Tahun 2023</a>
              </li>
              <li>
                  <a href="https://www.kemdikbud.go.id/main/files/download/2a1b96a67800811" class="hover:text-[#005689]">Perjanjian Kinerja Mendikbudristek Tahun 2022</a>
              </li>
              <li>
                  <a href="https://www.kemdikbud.go.id/main/files/download/f6de92fe3d8ac6a" class="hover:text-[#005689]">Perjanjian Kinerja Mendikbud Tahun 2021</a>
              </li>
              <li>
                  <a href="https://www.kemdikbud.go.id/main/files/download/b7f142c3258e1d7" class="hover:text-[#005689]">Lakip Kemendikbud Tahun 2023</a>
              </li>
              <li>
                  <a href="https://kemdikbud.go.id/main/files/download/910adf0f768fbfa" class="hover:text-[#005689]">Lakip Kemendikbud Tahun 2020</a>
              </li>
              <li>
                  <a href="https://kemdikbud.go.id/main/files/download/92dd0855b08b068" class="hover:text-[#005689]">Lakip Kemendikbud Tahun 2019</a>
              </li>
              <li>
                  <a href="https://kemdikbud.go.id/main/files/download/9899b657b50db1a" class="hover:text-[#005689]">Lakip Kemendikbud Tahun 2018</a>
              </li>
              <li>
                  <a href="https://www.kemdikbud.go.id/main/files/download/26b16c7b8e170c2" class="hover:text-[#005689]">Lakip Kemendikbud Tahun 2017</a>
              </li>
              <li>
                  <a href="http://simpandata.kemdikbud.go.id/index.php/s/sgEontFFXr9ESHX" class="hover:text-[#005689]">Lakip Kemendikbud Tahun 2016</a>
              </li>
              <li>
                  <a href="http://www.kemdikbud.go.id/main/uploads/default/documents/Informasi%20Publik/LAKIP%20KEMENDIKBUD%202015.pdf" class="hover:text-[#005689]">Lakip Kemendikbud Tahun 2015</a>
              </li>
              <li>
                  <a href="http://www.kemdikbud.go.id/kemdikbud/dokumen/pdf/LAKIP%20KEMENTERIAN%202014.pdf" class="hover:text-[#005689]">Lakip Kemendikbud Tahun 2014</a>
              </li>
              <li>
                  <a href="http://www.kemdikbud.go.id/kemdikbud/dokumen/pdf/LAKIP-kemendikbud-2013.pdf" class="hover:text-[#005689]">Lakip Kemendikbud Tahun 2013</a>
              </li>
              <li>
                  <a href="http://www.kemdikbud.go.id/kemdikbud/dokumen/kipweb/lakip2012/LAKIPKEMDIKBUD2012.pdf" class="hover:text-[#005689]">Lakip Kemendikbud Tahun 2012</a>
              </li>
              <li>
                  <a href="https://www.kemdikbud.go.id/main/files/download/7f6aa51b2cbf99b" class="hover:text-[#005689]">Lakip Kemendikbud Tahun 2011</a>
              </li>
              <li>
                  <a href="https://www.kemdikbud.go.id/main/files/download/5d81f1ac48eb1c0" class="hover:text-[#005689]">Lakip Kemendikbud Tahun 2010</a>
              </li>
          </ul>
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
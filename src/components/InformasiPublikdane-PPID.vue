<template>

  <!-- Informasi Publik dan e-PPID -->
  <div class="flex flex-col md:flex-row mt-20 ml-5 md:ml-20 space-y-10 md:space-y-0 md:space-x-10">
    
    <!-- Informasi Publik-->
    <div class="p-6 w-full md:w-[570px] h-auto md:h-[304px] rounded-r-xl space-y-4 border border-gray-200">
      <div class="flex items-center space-x-4">
        <img src="../components/icons/megaphone.svg" alt="Megaphone Logo" class="w-[40px] h-[39px]">
        <h1 class="text-xl font-bold opacity-70">Informasi Publik</h1>
      </div>
      <ul class="list-none space-y-2 ml-3">
        <li><a href="https://merdekabelajar.kemdikbud.go.id/" class="text-black hover:underline font-medium">Merdeka Belajar</a></li>
        <li><a href="https://ppid.kemdikbud.go.id/" class="text-black hover:underline font-medium">e-PPID (Pejabat Pengelola Informasi dan Dokumentasi)</a></li>
        <li><a href="/visimisi" class="text-black hover:underline font-medium">Visi dan Misi</a></li>
        <li><a href="/tugasdanfungsi" class="text-black hover:underline font-medium">Tugas dan Fungsi</a></li>
        <li><a href="/strukturorganisasi" class="text-black hover:underline font-medium">Struktur Organisasi</a></li>
      </ul>
      <p class="text-[#005689] font-medium hover:cursor-pointer">Selengkapnya</p>
    </div>

    <!-- e-PPID -->
    <div class="p-6 w-full md:w-[734px] h-auto rounded-2xl space-y-4 bg-[#B9DBF7]">
      <div class="flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0">
        <p class="text-xl md:text-2xl md:text-left text-center">
          Layanan e-PPID adalah layanan daring 
          <br class="hidden md:block"> 
          dari Pejabat Pengelola Informasi dan 
          <br class="hidden md:block"> 
          Dokumen (PPID) Kementerian 
          <br class="hidden md:block">
          Pendidikan, Kebudayaan, Riset, dan 
          <br class="hidden md:block">
          Teknologi (Kemendikbudristek)
        </p>
        <img src="../components/icons/eppid.svg" alt="e-PPID Logo" class="w-[163px] h-[200px]">
      </div>
      <div class="flex items-start">
        <img src="../components/icons/panah.svg" alt="Panah Logo" class="w-[41px] h-[31px] hover:cursor-pointer">
      </div>
    </div>

  </div>

</template>
<template>

    <footer class="bg-[#005689] text-white py-8">

      <div class="container mx-auto px-4">

        <div class="flex flex-col md:flex-row justify-between items-start">

          <!-- Logo dan Nama Kementerian -->
          <div class="flex flex-col md:flex-row md:items-start items-center mr-auto flex-grow ml-4">
            <img src="../assets/logo.png" alt="Logo Kemdikbud" class="h-54 w-60 mr-4">
            <div  class="font-bold text-4xl text-center md:text-left">
              <p>Kementerian <br>
                 Pendidikan, Kebudayaan, <br>
                 Riset, dan Teknologi</p>
            </div>
          </div>

          <!-- Detail Kontak -->
          <div class="mt-4 md:mt-0 md:ml-8 mr-20">
            <p class="text-lg font-semibold">Detail Kontak</p>

            <p>Alamat:</p>
            <div class="mt-2">
                <div class="flex items-center">
                    <img src="./icons/location.svg" alt="Alamat" class="h-4 w-4 mr-2">
                    <p>Komplek Kemendikbudristek Gedung A, Jl. Jendral Sudirman Lantai 2, Senayan, </p>
                </div>
                <p class="ml-6">Kecamatan Tanah Abang, Kota Jakarta Pusat</p>
            </div>
            
            <p>Telp:</p>
            <div class="flex items-center">
                <img src="./icons/telp.svg" alt="Telepon" class="h-4 w-4 mr-2">
                <p>(021) 5703303</p>
            </div>


            <p>Pengaduan:</p>
            <div class="flex items-center">
                <img src="./icons/mail.svg" alt="Pengaduan" class="h-4 w-4 mr-2">
                <p>pengaduan@kemdikbud.go.id</p>
            </div>

          </div>

        </div>

        <!--Garis Lurus-->
        <hr class="my-4 border-t border-gray-400 ml-16 mr-20">

        <div class="flex flex-col md:flex-row justify-between items-center">

          <!-- Copy Right -->
          <div class="text-center md:text-left">
            <p class="font-semibold text-lg ml-16">&copy; Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi - Republik Indonesia Tahun 2015</p>
          </div>

          <!-- Media Sosial -->
          <div class="flex space-x-4 mt-4 md:mt-0 mr-20">
            <a href="https://x.com/Kemdikbud_RI">
              <div class="mt-1 bg-white rounded-full">
                <img src="./icons/twitter-2.svg" alt="Twitter" class="h-6 w-6 rounded-full">
              </div>
            </a>
            <a href="https://www.facebook.com/Kemdikbud.RI">
              <img src="./icons/facebook.svg" alt="Twitter" class="h-8 w-8">
            </a>
            <a href="https://www.youtube.com/channel/UCH9AFSwY4WqgHoCLG2XIveg">
              <img src="./icons/youtube.svg" alt="Youtube" class="h-8 w-8">
            </a>
            <a href="https://www.instagram.com/kemdikbud.ri">
              <img src="./icons/instagram.svg" alt="Instagram" class="h-8 w-8">
            </a>
          </div>
          
        </div>
        
      </div>

    </footer>

</template>
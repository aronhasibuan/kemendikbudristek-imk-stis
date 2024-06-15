<template>
  <div class="relative bg-background-gpr-1 bg-left-top bg-no-repeat">
    <div class="bg-background-gpr-2 bg-left-top bg-no-repeat">
      <div class="flex flex-col items-center mt-20 w-1139 h-579">
        <!-- Header -->
        <div class="flex items-center justify-center space-x-2 mb-4">
          <img src="./icons/gpr.svg" alt="GPR Kemkominfo" class="w-38 h-47">
          <p class="text-xl font-bold font-poppins text-[#4D4D4D] self-end">GPR Kemkominfo</p>
        </div>

        <!-- Artikel -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <!-- Artikel 1 -->
          <div class="bg-backgroundArticle rounded-2xl p-4">
            <h2 class="font-poppins text-[#4D4D4D] font-extrabold text-center text-sm">
              World Water Forum ke-10 Sepakati Perkuat <br> Manajemen Pengurangan Risiko Bencana
            </h2>
            <p class="font-poppins text-xs text-[#4D4D4D] text-right">24-05-2024 16.51</p>
            <div class="flex items-center justify-center mb-2">
              <img src="../assets/GPR/article1.svg" alt="Gambar Artikel 1" class="w-384 h-327 object-cover">
            </div>
            <div class="flex justify-center">
                <a href="https://www.kominfo.go.id/content/detail/56743/world-water-forum-ke-10-sepakati-perkuat-manajemen-pengurangan-risiko-bencana/0/artikel_gpr" class="text-center text-[#005689] text-poppins text-sm">
                    Baca Artikel GPR
                </a>
            </div>
          </div>

          <!-- Artikel 2 -->
          <div class="bg-backgroundArticle rounded-2xl p-4">
            <h2 class="font-poppins text-[#4D4D4D] font-extrabold text-center text-sm">
              Sebelum Closing Ceremony, World Water Forum <br> ke-10 Bahas Dampak Perubahan Iklim
            </h2>
            <p class="font-poppins text-xs text-[#4D4D4D] text-right">24-05-2024 10.53</p>
            <div class="flex items-center justify-center mb-2">
              <img src="../assets/GPR/article2.svg" alt="Gambar Artikel 2" class="w-384 h-327 object-cover">
            </div>
            <div class="flex justify-center">
                <a href="https://www.kominfo.go.id/content/detail/56739/sebelum-closing-ceremony-world-water-forum-ke-10-bahas-dampak-perubahan-iklim-pada-pertanian/0/artikel_gpr" class="text-center text-[#005689] text-poppins text-sm">
                    Baca Artikel GPR
                </a>
            </div>
          </div>

          <!-- Artikel 3 -->
          <div class="bg-backgroundArticle rounded-2xl p-4">
            <h2 class="font-poppins text-[#4D4D4D] font-extrabold text-center text-sm">
              Water Forum ke-10 Sepakati Komitmen baru <br> Pengelolaan Wilayah Sungai
            </h2>
            <p class="font-poppins text-xs text-[#4D4D4D] text-right">24-05-2024 10.48</p>
            <div class="flex items-center justify-center mb-2">
              <img src="../assets/GPR/article3.svg" alt="Gambar Artikel 3" class="w-384 h-327 object-cover">
            </div>
            <div class="flex justify-center">
                <a href="https://www.kominfo.go.id/content/detail/56738/water-forum-ke-10-sepakati-komitmen-baru-pengelolaan-wilayah-sungai/0/artikel_gpr" class="text-center text-[#005689] text-poppins text-sm">
                    Baca Artikel GPR
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Selengkapnya -->
    <p class="font-medium text-lg text-[#005689] text-left mb-10 selengkapnya hover:cursor-pointer">Selengkapnya</p>
  </div>
</template>

<script>
export default {
  name: 'GPRKemkominfo',
  // Data, methods, etc. goes here
}
</script>

<style scoped>
.selengkapnya {
  margin-left: 120px;
}

/* Custom Background Classes */
.bg-background-gpr-1 {
  background-image: url('../assets/GPR/background-gpr-1.svg');
  background-position: left top;
  background-repeat: no-repeat;
}

.bg-background-gpr-2 {
  background-image: url('../assets/GPR/background-gpr-2.svg');
  background-position: left 200px;
  background-repeat: no-repeat;
}
</style>

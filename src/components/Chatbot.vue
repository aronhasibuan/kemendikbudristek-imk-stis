<template>
    <div>
      <!-- Floating Button -->
      <button class="fixed bottom-5 left-5 bg-[#E9E9DD] rounded-full p-4 shadow-md" @click="toggleChatbot">
        <img src="./icons/chatbotbutton.svg" alt="Chatbot" class="w-7 h-7">
      </button>
  
      <!-- Chat Pop-up -->
    <div v-if="showChatbot" class="fixed inset-0 w-[425px] h-full shadow-lg z-50 bg-[#EDF3F8]">   

      <div class="mt-20">
        <div v-if="showLogin" class="flex flex-col items-center justify-center">    

            <button @click="showChatbot = false" class="absolute top-0 right-0 m-4">
                <img src="./icons/closechatbot.svg" alt="Close" class="w-5 h-5">
            </button>

            <div class="border border-[#005689] p-2 rounded-full w-10 h-10 flex items-center justify-center mb-7">
                <img src="./icons/chatbotbutton.svg" alt="Chatbot" class="w-7 h-7">
            </div>

            <h2 class="font-bold text-[#005689] text-xl mb-8">SahabatEdu</h2>
            <p class="font-poppins text-[#005689] text-center mb-10">Selamat datang di Chatbot Kemendikbudristek!</p>

            <form @submit.prevent="handleSubmit" class=" w-full">
                <div class="ml-4 mr-4 mb-8">
                    <label for="name" class="block font-bold text-lg text-[#005689] font-poppins mb-2">Nama</label>
                    <input type="text" id="name" v-model="name" placeholder="Masukkan nama Anda" required class="w-full p-2 border border-gray-300 rounded" style="border-radius: 12px;"/>
                </div>
                <div class="ml-4 mr-4 mb-20">
                    <label for="email" class="block font-bold text-lg text-[#005689] font-poppins mb-2">E-mail</label>
                    <input type="email" id="email" v-model="email" placeholder="Masukkan e-mail Anda" required class="w-full p-2 border border-gray-300 rounded" style="border-radius: 12px;"/>
                </div>
                
                <div class="flex justify-center">
                    <button type="submit" class="bg-white text-black rounded w-[200px] h-[65px] flex items-center justify-center">
                        <img src="./icons/panahchatbot.svg" alt="" class="w-6 h-6 ml-4">
                        <span class="font-bold text-lg flex-1">Lanjutkan</span>
                    </button>
                </div>
                
            </form>

        </div>

        <div v-else>

            <!--Header-->
            <div class="bg-[#F9F9FB] flex absolute top-0 w-full p-4 h-auto">
                <img src="./icons/avatar.svg" alt="">
                <div class="ml-4">
                    <p class="font-bold">Asisten Virtual SahabatEdu</p>
                    <p class="text-gray-400 text-sm">Automated chat</p>
                </div>
                <button @click="showChatbot = false" class="absolute right-0 m-4">
                    <img src="./icons/closechatbot.svg" alt="Close" class="w-5 h-5">
                </button>
            </div>

            <!--Chat-->
            <div class="p-4 overflow-y-auto" style="max-height: 585px;">

                <!-- Auto Chat Bot-->
                <div class="bg-white p-2 shadow-md rounded-xl mb-10">
                    <p>
                        Selamat datang di SahabatEdu, asisten virtual 
                        dari Kemendikbudristek! Saya di sini untuk 
                        membantu Anda. Pilih salah satu opsi berikut
                        agar saya memberikan informasi yang 
                        Anda butuhkan: 
                    </p>
                    <div class="flex">
                        <p>1. </p>
                        <p>📚 Informasi tentang pendidikan (kurikulum, beasiswa, dll)</p>
                    </div>
                    <div class="flex">
                        <p>2. </p>
                        <p>🎭 Informasi tentang kebudayaan (acara, kegiatan, dll)</p>
                    </div>
                    <div class="flex">
                        <p>3. </p>
                        <p>📋 Informasi tentang layanan Kemendikbudristek</p>
                    </div>
                    <div class="flex">
                        <p>4. </p>
                        <p>❓ Pertanyaan lainnya</p>
                    </div>
                </div>

                <!--User Response-->
                <div v-if="userResponse" class="bg-[#B5D9F8] p-2 float-right shadow-md rounded-md mr-2">
                        {{ userResponse }}
                </div>

                <!--Bot Response-->
                <div v-if="userResponse" class="bg-white p-2 shadow-md rounded-xl mt-24">
                    
                    <div v-if="userResponse == 1">
                        Anda memilih 📚 Informasi tentang pendidikan. Berikut adalah topik utama yang relevan.
                        <ul class="list-disc ml-4">
                            <li>Kurikulum <br>
                                Kurikulum terbaru mencakup perubahan signifikan untuk meningkatkan kualitas pendidikan.
                                Anda bisa mengakses panduan kurikulum lengkap di <a href="#" class="text-[#19679a]">Panduan Kurikulum Kemendikbud</a>.
                            </li>
                            <li>Beasiswa <br>
                                Ada berbagai program beasiswa untuk pelajar dan mahasiswa, termasuk beasiswa prestasi
                                dan beasiswa bantuan biaya. Informasi lebih lanjut bisa anda temukan di <a href="#" class="text-[#19679a]">Beasiswa Kemdikbud</a>.
                            </li>
                            <li>Program Merdeka Belajar <br>
                                Inisiatif merdeka belajar bertujuan untuk memberikan kebebasan kepada institusi
                                pendidikan dalam menentukan metode pengajaran yang sesuai. Detail program bisa dibaca
                                di <a href="#" class="text-[#19679a]">Program Merdeka Belajar</a>.
                            </li>
                            <li>Sekolah dan Universitas <br>
                                Daftar Sekolah dan Universitas unggulan serta informasi penerimaan siswa baru tersedia di
                                <a href="#" class="text-[#19679a]">Sekolah dan Universitas Unggulan</a>
                            </li>
                        </ul>
                    </div>

                    <div v-else-if="userResponse == 2">
                        Anda memilih 🎭 Informasi tentang kebudayaan. Berikut adalah beberapa topik utama yang terkait dengan program pendidikan.
                        <ul class="list-disc ml-4">
                            <li>Pelestarian Budaya dalam pendidikan <br>
                                Inisiatif untuk melestarikan warisan budaya dengan melibatkan pelajar dan institusi
                                pendidikan. Baca lebih lanjut di <a href="#" class="text-[#19679a]">Pelestarian Budaya</a>.
                            </li>
                            <li>Museum dan Situs Sejarah untuk Pembelajaran <br>
                                Panduan mengunjungi museum dan situs sejarah sebagai bagian dari kegiatan
                                belajar mengajar. Informasi lebih lanjut dapat dilihat di <a href="#" class="text-[#19679a]">Museum dan Situs Sejarah</a>.
                            </li>
                            <li>Materi edukasi kebudayaan <br>
                                Sumber daya dan materi pembelajaran mengenai kebudayaan Indonesia yang bisa
                                digunakan oleh guru dan siswa. Akses materi di <a href="#" class="text-[#19679a]">Materi Edukasi Kebudayaan</a>.
                            </li>
                        </ul>
                    </div>

                    <div v-else-if="userResponse == 3">
                        Anda memilih 📋 Informasi tentang layanan Kemendikbudristek. Berikut adalah beberapa layanan utama.
                        <ul class="list-disc ml-4">
                            <li>e-PPID<br>
                                Layanan informasi publik digital yang memudahkan akses ke berbagai dokumen dan
                                informasi resmi. Kunjungi <a href="#" class="text-[#19679a]">e-PPID</a> untuk informasi lebih lanjut.
                            </li>
                            <li>Layanan Aduan dan Konsultasi <br>
                                Anda dapat mengajukan aduan atau mendapatkan konsultasi terkait layanan
                                Pendidikan dan Kebudayaan melalui <a href="#" class="text-[#19679a]">Informasi dan Pengaduan</a>.
                            </li>
                            <li>Informasi Struktural dan Fungsi <br>
                                Penjelasan tentang struktur organisasi dan fungsi masing-masing departemen di
                                di kemendikbudristek dapat dilihat di <a href="#" class="text-[#19679a]">Struktur Organisasi</a>.
                            </li>
                            <li>Program dan Inisiatif <br>
                                Informasi tentang program-program dan inisiatif terbaru dari emendikbudristek 
                                tersedia di <a href="#" class="text-[#19679a]">Layanan & Program</a>.
                            </li>
                        </ul>
                    </div>

                    <div v-else-if="userResponse == 4">
                        Anda memilih 'Pertanyaan lainnya'. Silahkan ketik 
                        pertanyaan Anda di bawah ini, dan saya akan 
                        berusaha memberikan jawaban terbaik untuk 
                        Anda
                    </div>

                    <div v-else>
                        <p>Maaf, saya tidak mengenali jawaban anda, mohon pilih 1 - 4</p>

                    </div>

                </div>

                <div v-if="userResponse == 4" class="flex mt-4 float-right">
                    <p class="text-[#005689] text-xs font-poppins font-bold border-2 border-[#005689] rounded-lg bg-white p-2 m-1 cursor-pointer">Data Visualisasi Pendidikan</p>
                    <p class="text-[#005689] text-xs font-poppins font-bold border-2 border-[#005689] rounded-lg bg-white p-2 m-1 cursor-pointer">Akreditasi</p>
                    <p class="text-[#005689] text-xs font-poppins font-bold border-2 border-[#005689] rounded-lg bg-white p-2 m-1 cursor-pointer">Sertifikasi</p>
                </div>

            </div>

            <!--User Input-->
            <form @submit.prevent="handleUserResponse" class="flex bg-white p-5 absolute bottom-0 w-full justify-between border-t border-gray-300">
                <input type="text" id="userResponse" placeholder="Tulis di sini..." class="w-full focus:outline-none">
                <button type="submit">
                    <img src="./icons/sendchatbot.svg" alt="Send">
                </button>
            </form>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chatbot",
  data() {
    return {
      showChatbot: false,
      showLogin: true,
      name: "",
      email: "",
      userResponse: "",
      botResponse: "",
    };
  },
  methods: {
    toggleChatbot() {
      this.showChatbot = !this.showChatbot;
      this.showLogin = true;
    },
    handleSubmit() {
      this.showLogin = false;
    },
    handleUserResponse() {
      this.userResponse = document.getElementById('userResponse').value;
    },  
  }
};
</script>

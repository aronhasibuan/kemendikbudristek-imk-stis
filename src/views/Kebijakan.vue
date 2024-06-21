<template>
    <div class="ml-20 mr-10 mb-20">
    
        <!--Path-->
        <div class="flex items-center mt-10 ml-2">
            <a href="/home">
                <img src="../components/icons/home.svg" alt="Home Icon" class="w-[38px] h-[40px] bg-[#253C80] mr-1 p-2 hover:bg-[#828282] rounded-l">
            </a>
            <a class="text-white bg-[#2980B9] p-2 mr-1 hover:bg-[#828282]" href="/profil">PROFIL</a>
            <a href="/kebijakan" class="text-white bg-[#253C80] rounded-r p-2 hover:bg-[#828282]">KEBIJAKAN</a>
        </div>

        <!--Pencarian-->
        <div class="mt-10 flex justify-between">
            
            <!--Kotak Pencarian-->
            <div class="flex items-center border border-[#005689] w-[331px] h-[54px] rounded-2xl">
                <input type="text" v-model="searchQuery" placeholder="Cari dokumen" class="px-4 py-2 rounded-l-full rounded-r-none placeholder-black focus:outline-none" style="flex: 1;"> 
                <a href="#" class="block bg-white px-4 py-2 rounded-r-full hover:bg-gray-200" style="width: 60px; height: 40px;"> 
                    <img src="../assets/kacapembesar.png" alt="Search" class="h-full w-full object-cover">
                </a>
            </div>


            <!--Kotak Filter dan Sort-->
            <div class="flex">
                <div class="flex items-center border border-[#005689] rounded-md mr-5 w-[250px] h-[51px] justify-between">
                    <p class="ml-8">Urutkan</p>
                    <img src="../components/icons/sellectarrow.svg" alt="" class="w-[10px] h-[6px] mr-3">
                </div>
                <div class="flex items-center border border-[#005689] rounded-md w-[250px] h-[51px] justify-between">
                    <p class="ml-8">Tahun Terbit</p>
                    <img src="../components/icons/sellectarrow.svg" alt="" class="w-[10px] h-[6px] mr-3">
                </div>
            </div>
        </div>
        
        <!--Konten Utama-->
        <div class="mt-10 flex">
            <!--Side Bar-->
            <div class="mr-14">
                <div v-for="(item, index) in items" :key="index" :class="['cursor-pointer p-4 text-[#4D4D4D]', selected === index ? 'text-customBlue font-bold' : '']" @click="selectItem(index)">
                    {{ item }}
                </div>
            </div>

            <!--Dokumen-->
            <div class="border-l-3 border-[#C3C4C8] ml-4">
                <h3 class="ml-4 font-bold text-2xl mb-4">Menampilkan {{ displayedDocuments.length }} dari {{ filteredDocuments.length }} hasil pencarian</h3>

                <!--Tampilkan pesan jika tidak ada dokumen yang ditemukan-->
                <div v-if="displayedDocuments.length == 0" class="text-center  text-xl text-gray-500 mt-10 mb-10">
                    Dokumen yang Anda cari tidak tersedia. Silakan coba kata kunci lain.
                </div>

                <div v-if="selected === 0">
                    <div v-for="document in displayedDocuments" :key="document.id" class="mb-4 flex pr-32">
                        <img :src="document.image" alt="Document Image" class="w-60 h-auto mb-2">
                        <div class="ml-6">
                            <h4 class="text-4xl font-bold mb-2">{{ document.title }}</h4>
                            <p class="text-gray-600 mb-2">{{ document.date }}</p>
                            <p class="mb-2 text-xl">{{ document.description }}</p>
                            <div class="flex flex-row items-center mt-4">
                                <a :href=document.seeMoreLink>
                                    <img src="../components/icons/unduh.svg" alt="">
                                </a>
                                <p class="text-gray-600 ml-7">{{ document.downloads }} downloads</p>
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-center">
                        <div v-for="index in Math.ceil(hitungBanyakPage(filteredDocuments.length))" 
                            :key="index" 
                            @click="myCallback(index), selectPage(index)" 
                            :class="['cursor-pointer p-4', selectedPage === index ? 'text-[#2290E8] underline' : 'text-[#787B83]']">            
                            {{ index }}
                        </div>
                    </div>
                    
                </div>

                <div v-if="selected === 1">
                    <div v-for="document in displayedDocuments" :key="document.id" class="mb-4 flex pr-32">
                        <img :src="document.image" alt="Document Image" class="w-60 h-auto mb-2">
                        <div class="ml-6">
                            <h4 class="text-4xl font-bold mb-2">{{ document.title }}</h4>
                            <p class="text-gray-600 mb-2">{{ document.date }}</p>
                            <p class="mb-2 text-xl">{{ document.description }}</p>
                            <div class="flex flex-row items-center mt-4">
                                <a :href=document.seeMoreLink>
                                    <img src="../components/icons/unduh.svg" alt="">
                                </a>    
                                <p class="text-gray-600 ml-7">{{ document.downloads }} downloads</p>
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-center">
                        <div v-for="index in Math.ceil(hitungBanyakPage(filteredDocuments.length))" 
                            :key="index" 
                            @click="myCallback(index), selectPage(index)" 
                            :class="['cursor-pointer p-4', selectedPage === index ? 'text-[#2290E8] underline' : 'text-[#787B83]']">            
                            {{ index }}
                        </div>
                    </div>
    
                </div>

                <div v-if="selected === 2">
                    <div v-for="document in displayedDocuments" :key="document.id" class="mb-4 flex pr-32">
                        <img :src="document.image" alt="Document Image" class="w-60 h-auto mb-2">
                        <div class="ml-6">
                            <h4 class="text-4xl font-bold mb-2">{{ document.title }}</h4>
                            <p class="text-gray-600 mb-2">{{ document.date }}</p>
                            <p class="mb-2 text-xl">{{ document.description }}</p>
                            <div class="flex flex-row items-center mt-4">
                                <a :href=document.seeMoreLink>
                                    <img src="../components/icons/unduh.svg" alt="">
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-center">
                        <div v-for="index in Math.ceil(hitungBanyakPage(filteredDocuments.length))" 
                            :key="index" 
                            @click="myCallback(index), selectPage(index)" 
                            :class="['cursor-pointer p-4', selectedPage === index ? 'text-[#2290E8] underline' : 'text-[#787B83]']">            
                            {{ index }}
                        </div>
                    </div>
                    
                </div>

                <div v-if="selected === 3"> 
                    <div class="grid grid-cols-3 gap-4">
                        <div v-for="infographic in displayedDocuments" :key="infographic.id">
                            <img :src="infographic.image" alt="Infographic Image" class="w-full h-auto mb-2 cursor-pointer" @click="showImageModal(infographic.image)">
                            <h4 class="text-lg font-bold ml-5">{{ infographic.title }}</h4>
                        </div>
                    </div>

                    <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center z-50" style="background-color: rgba(0, 0, 0, 0.3);" @click="closeModal">
                        <img :src="modalImage" alt="Infographic Image" class="h-full">
                    </div>

                    <div class="flex justify-center">
                        <div v-for="index in Math.ceil(hitungBanyakPage(filteredDocuments.length))" 
                            :key="index" 
                            @click="myCallback(index), selectPage(index)" 
                            :class="['cursor-pointer p-4', selectedPage === index ? 'text-[#2290E8] underline' : 'text-[#787B83]']">            
                            {{ index }}
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>

    </div>
</template>

<script>
import Pagination from 'v-pagination-3';
import buku1 from '@/assets/Kebijakan/Buku 1.svg';
import buku2 from '@/assets/Kebijakan/Buku 2.svg';
import buku3 from '@/assets/Kebijakan/Buku 3.svg';
import buku4 from '@/assets/Kebijakan/Buku 4.svg';
import buku5 from '@/assets/Kebijakan/Buku 5.svg';
import buku6 from '@/assets/Kebijakan/Buku 6.svg';
import buku7 from '@/assets/Kebijakan/Buku 7.svg';
import buku8 from '@/assets/Kebijakan/Buku 8.svg';
import buku9 from '@/assets/Kebijakan/Buku 9.svg';
import risalah1 from '@/assets/Kebijakan/Risalah 1.svg';
import risalah2 from '@/assets/Kebijakan/Risalah 2.svg';
import risalah3 from '@/assets/Kebijakan/Risalah 3.svg';
import risalah4 from '@/assets/Kebijakan/Risalah 4.svg';
import risalah5 from '@/assets/Kebijakan/Risalah 5.svg';
import risalah6 from '@/assets/Kebijakan/Risalah 6.svg';
import risalah7 from '@/assets/Kebijakan/Risalah 7.svg';
import risalah8 from '@/assets/Kebijakan/Risalah 8.svg';
import risalah9 from '@/assets/Kebijakan/Risalah 9.svg';
import jurnal1 from '@/assets/Kebijakan/Jurnal 1.svg';
import jurnal2 from '@/assets/Kebijakan/Jurnal 2.svg';
import jurnal3 from '@/assets/Kebijakan/Jurnal 3.svg';
import infografis1 from '@/assets/Kebijakan/Infografis 1.svg';
import infografis2 from '@/assets/Kebijakan/Infografis 2.svg';
import infografis3 from '@/assets/Kebijakan/Infografis 3.svg';
import infografis4 from '@/assets/Kebijakan/Infografis 4.svg';
import infografis5 from '@/assets/Kebijakan/Infografis 5.svg';
import infografis6 from '@/assets/Kebijakan/Infografis 6.svg';
import infografis7 from '@/assets/Kebijakan/Infografis 7.svg';
import infografis8 from '@/assets/Kebijakan/Infografis 8.svg';

export default {
    data() {
        return {
            items: ["Buku dan Kajian Akademik", "Risalah Kebijakan", "Jurnal (JPKP)", "Infografis"],
            selected: 0,
            selectedPage: 1,
            page: 1,
            limit: 6,
            searchQuery: '',
            isModalOpen: false,
            modalImage: '',
            documents: [
                {
                    id: 1,
                    image: buku1,
                    title: 'Extended Abstract: Forum on Education and Learning Transformation',
                    date: '22 Mei 2024',
                    description: 'Dokumen ini merupakan kompilasi hasil diskusi dari Forum on Education and Learning Transformation (FELT) yang diadakan pada bulan November 2023. Forum ini merupakan kerjasama antara Pusat Standar dan Kebijakan...',
                    seeMoreLink: 'https://pskp.kemdikbud.go.id/service/download.php?kategori=kebijakan&id=514',
                    downloads: 39
                },
                {
                    id: 2,
                    image: buku2,
                    title: 'Menavigasi Tantangan Pembelajaran Bahasa Inggris di Sekolah Menuju Literasi Global',
                    date: '08 Mei 2024',
                    description: 'Menavigasi Tantangan Pembelajaran Bahasa Inggris di Sekolah Menuju Literasi Global',
                    seeMoreLink: 'https://pskp.kemdikbud.go.id/service/download.php?kategori=kebijakan&id=512',
                    downloads: 55
                },
                {
                    id: 3,
                    image: buku3,
                    title: "Laying the Foundations of Systemic Change in Education: Reflections on Indonesia's Merdeka Belajar Reform",
                    date: '06 Mei 2024',
                    description: "Laying the Foundations of Systemic Change in Education: Reflections on Indonesia's Merdeka Belajar Reform",
                    seeMoreLink: 'https://pskp.kemdikbud.go.id/service/download.php?kategori=kebijakan&id=511',
                    downloads: 28
                },
                {
                    id: 4,
                    image: buku4,
                    title: "Membuka Pintu Sekolah untuk Semua: Perubahan Kebijakan PPDB dan Dampaknya bagi Pemerataan Kualitas Pendidikan",
                    date: '19 Maret 2024',
                    description: "Membuka Pintu Sekolah untuk Semua: Perubahan Kebijakan PPDB dan Dampaknya bagi Pemerataan Kualitas Pendidikan",
                    seeMoreLink: 'https://pskp.kemdikbud.go.id/service/download.php?kategori=kebijakan&id=510',
                    downloads: 42
                },
                {
                    id: 5,
                    image: buku5,
                    title: "Menuju Terang Literasi: Ketika Membaca Membuat Anak-anak Bahagia",
                    date: '06 Desember 2023',
                    description: "Buku ini berisi kumpulan tulisan yang menceritakan hasil pengamatan terhadap pembelajaran di beberapa sekolah di Bali. Sekolah-sekolah tersebut mendapat pendampingan dari Yayasan Literasi Anak Indonesai (YLAI), sebu...",
                    seeMoreLink: 'https://pskp.kemdikbud.go.id/service/download.php?kategori=kebijakan&id=496',
                    downloads: 24
                },
                {
                    id: 6,
                    image: buku6,
                    title: "Sekolah Tangguh di Indonesia: Laporan Rapor Pendidikan Tahun 2023",
                    date: '10 November 2023',
                    description: "Sekolah Tangguh di Indonesia: Laporan Rapor Pendidikan Tahun 2023",
                    seeMoreLink: 'https://pskp.kemdikbud.go.id/service/download.php?kategori=kebijakan&id=495',
                    downloads: 32
                },
                {
                    id: 7,
                    image: buku7,
                    title: "Praktik-praktik Baik Lingkungan Belajar dan Capaian Pembelajaran: Laporan Rapor Pendidikan Tahun 2023",
                    date: '09 November 2023',
                    description: "Praktik-praktik Baik Lingkungan Belajar dan Capaian Pembelajaran: Laporan Rapor Pendidikan Tahun 2023",
                    seeMoreLink: 'https://pskp.kemdikbud.go.id/service/download.php?kategori=kebijakan&id=494',
                    downloads: 35
                },
                {
                    id: 8,
                    image: buku8,
                    title: "[STUDI KESENJANGAN PEMBELAJARAN - 4] Bangkit Lebih Kuat: Pemulihan Pembelajaran Pasca Pandemi COVID 19 Studi Kasus INOVASI",
                    date: '19 Oktober 2023',
                    description: "Bangkit Lebih Kuat: Pemulihan Pembelajaran Pasca Pandemi COVID 19 Studi Kasus INOVASI",
                    seeMoreLink: 'https://pskp.kemdikbud.go.id/service/download.php?kategori=kebijakan&id=493',
                    downloads: 35
                },
                {
                    id: 9,
                    image: buku9,
                    title: "[STUDI KESENJANGAN PEMBELAJARAN - 3] Kesenjangan yang Semakin Meleber: Dampak Pandemi COVID-19 pada Siswa dari Kelompok Paling Rentan di Indonesia",
                    date: '18 Oktober 2023',
                    description: "[STUDI KESENJANGAN PEMBELAJARAN - 3] Kesenjangan yang Semakin Meleber: Dampak Pandemi COVID-19 pada Siswa dari Kelompok Paling Rentan di Indonesia",
                    seeMoreLink: 'https://pskp.kemdikbud.go.id/service/download.php?kategori=kebijakan&id=492',
                    downloads: 35
                },
            ],
            risalah: [
                {
                    id: 1,
                    image: risalah1,
                    title: 'Transformasi Standar pada Lembaga Kursus dan Pelatihan',
                    date: '30 April 2024',
                    description: 'Transformasi Standar pada Lembaga Kursus dan Pelatihan',
                    seeMoreLink: 'https://pskp.kemdikbud.go.id/assets_front/images/produk/1-gtk/kebijakan/Risalah_Kebijakan_03_Maret_2024_Transformasi_Standar_pada_Kursus.pdf',
                    downloads: 18
                },
                {
                    id: 2,
                    image: risalah2,
                    title: 'Optimalisasi Komunitas Belajar di Sekolah Guna Menyukseskan Implementasi Kurikulum Merdeka',
                    date: '13 Februari 2024',
                    description: 'Optimalisasi Komunitas Belajar di Sekolah Guna Menyukseskan Implementasi Kurikulum Merdeka',
                    seeMoreLink: 'https://pskp.kemdikbud.go.id/service/download.php?kategori=kebijakan&id=348',
                    downloads: 21
                },
                {
                    id: 3,
                    image: risalah3,
                    title: 'Tantangan Penguatan Otonomi dan Agensi Guru dalam Implementasi Kurikulum Merdeka',
                    date: '23 Januari 2024',
                    description: 'Tantangan Penguatan Otonomi dan Agensi Guru dalam Implementasi Kurikulum Merdeka',
                    seeMoreLink: 'https://pskp.kemdikbud.go.id/assets_front/images/produk/1-gtk/kebijakan/Risalah_Kebijakan_Tantangan_Penguatan_Otonomi_dan_Agensi_Guru_dalam_IKM_No__1_Januari_2024.pdf',
                    downloads: 21
                },
                {
                    id: 4,
                    image: risalah4,
                    title: 'Optimalisasi Program Buku bacaan bermutu untuk Penguatan Literasi Indonesia',
                    date: '07 November 2023',
                    description: 'Optimalisasi Program Buku bacaan bermutu untuk Penguatan Literasi Indonesia',
                    seeMoreLink: 'https://pskp.kemdikbud.go.id/service/download.php?kategori=kebijakan&id=346',
                    downloads: 20
                },
                {
                    id: 5,
                    image: risalah5,
                    title: 'Tantangan Penerapan Pembelajaran yang Sesuai dan Iklim Keamanan di Jenjang Pendidikan Anak Usia Dini',
                    date: '06 November 2023',
                    description: 'Tantangan Penerapan Pembelajaran yang Sesuai dan Iklim Keamanan di Jenjang Pendidikan Anak Usia Dini',
                    seeMoreLink: 'https://pskp.kemdikbud.go.id/assets_front/images/produk/1-gtk/kebijakan/Risalah_Kebijakan_No_7_Oktober_2023_Tantangan_Penerapan_Pembelajaran_yang_sesuai_dan_Iklim_Keamanan_di_Jenjang_PAUD.pdf',
                    downloads: 10
                },
                {
                    id: 6,
                    image: risalah6,
                    title: 'Urgensi Pendekatan Asimetris dalam Program Sekolah Penggerak',
                    date: '16 Oktober 2023',
                    description: 'Urgensi Pendekatan Asimetris dalam Program Sekolah Penggerak',
                    seeMoreLink: 'https://pskp.kemdikbud.go.id/assets_front/images/produk/1-gtk/kebijakan/No__6_September_2023_Urgensi_Pendekatan_Asimetris_dalam_Program_Sekolah_Penggerak_(OK).pdf',
                    downloads: 10
                },
                {
                    id: 7,
                    image: risalah7,
                    title: 'Perbaikan Lingkungan Belajar Untuk Meningkatkan Capaian Pembelajaran',
                    date: '09 Oktober 2023',
                    description: 'Perbaikan Lingkungan Belajar Untuk Meningkatkan Capaian Pembelajaran',
                    seeMoreLink: 'https://pskp.kemdikbud.go.id/assets_front/images/produk/1-gtk/kebijakan/Risalah_Kebijakan_PSKP__No__4_September_2023_Perbaikan_Lingkungan_Belajar_(OK).pdf',
                    downloads: 6
                },
                {
                    id: 8,
                    image: risalah8,
                    title: 'Urgensi Perbaikan Regulasi Sekolah Rumah Sebagai Bentuk Pemenuhan Hak Pendidikan Anak',
                    date: '09 Oktober 2023',
                    description: 'Urgensi Perbaikan Regulasi Sekolah Rumah Sebagai Bentuk Pemenuhan Hak Pendidikan Anak',
                    seeMoreLink: 'https://pskp.kemdikbud.go.id/assets_front/images/produk/1-gtk/kebijakan/Risalah_Kebijakan_PSKP_No_5_September_2023_Urgensi_Perbaikan_Regulasi_Sekolah_Rumah_(1).pdf',
                    downloads: 4
                },
                {
                    id: 9,
                    image: risalah9,
                    title: 'Buku Bacaan Digital Untuk Meningkatkan Literasi Anak',
                    date: '11 September 2023',
                    description: 'Buku Bacaan Digital Untuk Meningkatkan Literasi Anak',
                    seeMoreLink: 'https://pskp.kemdikbud.go.id/assets_front/images/produk/1-gtk/kebijakan/Risalah_Kebijakan_PSKP_Buku_Bacaan_Digital_untuk_Meningkatkan_Literasi_Anak_(OK).pdf',
                    downloads: 5
                },
            ],
            jurnal: [
                {
                    id: 1,
                    image: jurnal1,
                    title: 'Vol. 16 No. 2 (2023)',
                    date: '06 Mei 2024',
                    description: 'The publication of this edition was delayed due to the OJS upgrading process and a hacking incident. After maintenance were completed, the JPKP editorial team continued the article selection process in accordance to the SOP, and..',
                    seeMoreLink: 'https://jurnalpuslitjakdikbud.kemdikbud.go.id/index.php/litjak/issue/view/38',
                    downloads: 18
                },
                {
                    id: 2,
                    image: jurnal2,
                    title: 'Vol. 16 No. 1 (2023)',
                    date: '21 November 2023',
                    description: 'The publication of this edition was delayed due to the OJS upgrading process and a hacking incident. As a result, Jurnal Penelitian Kebijakan Pendidikan was unable to run the OJS from August to October 2023. In this edition, we...',
                    seeMoreLink: 'https://jurnalpuslitjakdikbud.kemdikbud.go.id/index.php/litjak/issue/view/36',
                    downloads: 18
                },
                {
                    id: 3,
                    image: jurnal3,
                    title: 'Vol. 15 No. 2 (2022)',
                    date: '21 Februari 2023',
                    description: 'Jurnal Penelitian Kebijakan Pendidikan Volume 15 No. 2, 2022 consists 6 (six) articles with the theme of education policy. The first article is written by Dina Rahma Fadlilah and Yanti Herlanti about a review of Biology learning at...',
                    seeMoreLink: 'https://jurnalpuslitjakdikbud.kemdikbud.go.id/index.php/litjak/issue/view/35',
                    downloads: 18
                },
            ],
            infographics: [
                {
                    id: 1,
                    image: infografis1,
                    title: 'Hasil Survei Kepuasan Masyarakat Penerbitan Jurnal Penelitian Kebijakan Pendidika...',
                    description:'Hasil Survei Kepuasan Masyarakat Penerbitan Jurnal Penelitian Kebijakan Pendidika...'
                },
                {
                    id: 2,
                    image: infografis2,
                    title: 'Maklumat Pelayanan Pusat Standar dan Kebijakan Pendidikan',
                    description: 'Maklumat Pelayanan Pusat Standar dan Kebijakan Pendidikan'
                },
                {
                    id: 3,
                    image: infografis3,
                    title: 'Tolak Gratifikasi dan Laporkan',
                    description: 'Tolak Gratifikasi dan Laporkan'
                },
                {
                    id: 4,
                    image: infografis4,
                    title: 'Wilayah Bebas dari Korupsi (WBK) dan Wilayah Birokrasi Bersih dan Melayani (WBBM)',
                    description: 'Wilayah Bebas dari Korupsi (WBK) dan Wilayah Birokrasi Bersih dan Melayani (WBBM)'
                },
                {
                    id: 5,
                    image: infografis5,
                    title: 'Survei Tayangan Program Belajar dari Rumah (BDR) melalui TVRI Periode Januari-..',
                    description: 'Survei Tayangan Program Belajar dari Rumah (BDR) melalui TVRI Periode Januari-..'
                },
                {
                    id: 6,
                    image: infografis6,
                    title: 'Usulan Koleksi Perpustakaan Kemendikbud Tahun 2020',
                    description: 'Usulan Koleksi Perpustakaan Kemendikbud Tahun 2020',
                },
                {
                    id: 7,
                    image: infografis7,
                    title: 'Alur Proses Penelitian Puslitjakdikbud',
                    description: 'Alur Proses Penelitian Puslitjakdikbud',
                },
                {
                    id: 8,
                    image: infografis8,
                    title: 'Peningkatan Literasi Membaca',
                    description: 'Peningkatan Literasi Membaca',
                }
            ]
        };
    },
    components: {
        Pagination
    },
    computed: {
        totalDocumentsCount() {
            return this.filteredDocuments.length;
        },
        displayedDocuments() {
            const startIndex = (this.page - 1) * this.limit;
            const endIndex = this.page * this.limit;
            return this.filteredDocuments.slice(startIndex, endIndex);
        },
        filteredDocuments() {
            this.myCallback(1);
            let documents = [];
            if (this.selected === 0) documents = this.documents;
            else if (this.selected === 1) documents = this.risalah;
            else if (this.selected === 2) documents = this.jurnal;
            else if (this.selected === 3) documents = this.infographics;

            if (!this.searchQuery) return documents;

            return documents.filter(doc => 
                doc.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                doc.description.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        },
    },
    methods: {
        selectItem(index) {
            this.selected = index;
            this.page = 1;
            this.selectedPage = 1;
        },
        selectPage(index) {
            this.selectedPage = index;
        },
        downloadDocument(document) {
            console.log('Downloading', document);
        },
        myCallback(newPage) {
            this.page = newPage;
        },
        hitungBanyakPage(x){
            let jumlahhalaman =  x/6;
            if (Number.isInteger(jumlahhalaman)) {
                return jumlahhalaman;
            } else {
                return Math.ceil(jumlahhalaman); 
            }
        },
        showImageModal(imageSrc) {
            this.modalImage = imageSrc;
            this.isModalOpen = true;
        },
        closeModal() {
            this.isModalOpen = !this.isModalOpen;
        },
    }
};
</script>

<style scoped>
.modal-image {
  width: auto;
  display: block;
  margin: 0 auto;
  height: 10px
}
</style>
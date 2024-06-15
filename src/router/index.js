import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import VisionMission from '../views/VisionMission.vue'
import ProfileSejarah from '../views/ProfileSejarah.vue'
import ArtiLogo from '../views/ArtiLogo.vue'
import NilaiBudaya from '../views/NilaiBudaya.vue'
import Profil from '../views/Profil.vue'
import StrukturOrganisasi from '../views/StrukturOrganisasi.vue'
import Kurikulum from '../views/Kurikulum.vue'
import Kebijakan from '@/views/Kebijakan.vue'
import LayananProgram from '@/views/LayananProgram.vue'
import Navbar from '@/components/Navbar.vue'
import AkuntabilitasKinerja from '@/views/AkuntabilitasKinerja.vue'
import TugasdanFungsi from '@/views/TugasdanFungsi.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/visimisi',
    name: 'VisionMission',
    component: VisionMission
  },
  {
    path: '/sejarah',
    name: 'ProfileSejarah',
    component: ProfileSejarah
  },
  {
    path: '/artilogo',
    name: 'ArtiLogo',
    component: ArtiLogo
  },
  {
    path: '/nilaibudaya',
    name: 'NilaiBudaya',
    component: NilaiBudaya
  },
  {
    path: '/profil',
    name: 'Profil',
    component: Profil
  },
  {
    path: '/strukturorganisasi',
    name: 'StrukturOrganisasi',
    component: StrukturOrganisasi
  },
  {
    path: '/kurikulum',
    name: 'Kurikulum',
    component: Kurikulum
  },
  {
    path: '/kebijakan',
    name: 'Kebijakan',
    component: Kebijakan
  },
  {
    path: '/layananprogram',
    name: 'LayananProgram',
    component: LayananProgram
  },
  {
    path: '/akuntabilitaskinerja',
    name: 'AkuntabilitasKinerja',
    component: AkuntabilitasKinerja
  },
  {
    path: '/tugasdanfungsi',
    name: 'TugasdanFungsi',
    component: TugasdanFungsi
  }

  // Uncomment to see the components
  // {
  //   path: '/navbar',
  //   name: 'Navbar',
  //   component: Navbar
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

<template>
  <section class="bg-white">
    <ProfileHeader />
    <section class="profile-sections" style="margin-top:-25px;">
      <ProfileSection v-for="(section, i) in sections" :key="i" :img="section.img" :title="section.title" :subtitle="section.subtitle" :active="section.active" :link_to="section.link_to"/>
    </section>
    <footer style="height: 60px;">
      <FooterNavbar/>
    </footer>
  </section>
</template>

<script>
import ProfileHeader from '../components/ProfileHeader.vue'
import ProfileSection from '../components/ProfileSection.vue'
import FooterNavbar from '../components/FooterNavbar.vue'

import bell from '../assets/bell.svg'
import meet from '../assets/meet.svg'
import tagOutline from '../assets/tag-outline.svg'
import discount from '../assets/discount.svg'
import lock from '../assets/lock.svg'
import settings from '../assets/settings.svg'
import whoAreWe from '../assets/who-are-we.svg'
import clockDotted from '../assets/clock-dotted.svg'
import savedOutline from '../assets/saved-outline.svg'
import phoneSend from '../assets/phone-send.svg'
import mailSend from '../assets/mail-send.svg'
import addShop from '../assets/add-shop.svg'
import rateApp from '../assets/rate-app.svg'

export default {
  name: 'Profile',
  components: {
    ProfileHeader,
    FooterNavbar,
    ProfileSection
  },
  data () {
    return {
      sections:[
        {
          title: 'Ver/Crear Alertas',
          subtitle: 'Podrás ver tu lista de alertas y crear nuevas',
          img: bell,
          link_to: '/alerts',
          active: true
        },
        {
          title: 'Mis tallas favoritas',
          subtitle: 'Modificar tus tallas y nuestra página las resaltará en las ofertas',
          img: meet,
          link_to: '/favourite-sizes'
        },
        {
          title: 'Ofertas guardadas',
          subtitle: 'Ver y modificar tus ofertas guardadas',
          img: tagOutline,
          link_to: ''
        },
        {
          title: 'Sorteos',
          subtitle: 'Aquí puedes ver los sorteos de moda activos en la app',
          img: discount,
          link_to: ''
        },
        {
          title: 'Perfil y seguridad',
          subtitle: 'Modificar foto de perfil y datos de acceso',
          img: lock,
          link_to: ''
        },
        {
          title: 'Ajustes',
          subtitle: 'Para quién buscas ropa y las modificaciones',
          img: settings,
          link_to: ''
        },
        {
          title: '¿Quiénes somos?',
          subtitle: 'Cómo funciona la app, reglas de la comunidad',
          img: whoAreWe,
          link_to: ''
        },
        {
          title: 'Mi actividad',
          subtitle: 'Estadísticas, seguidores, medallas, chollos enviados',
          img: clockDotted,
          link_to: ''
        },
        {
          title: 'Hilos guardados',
          subtitle: 'Ver y modificar hilos de comentarios guardados',
          img: savedOutline,
          link_to: ''
        },
        {
          title: 'Mis ofertas enviadas',
          subtitle: 'Ver y revisar ofertas enviadas',
          img: phoneSend,
          link_to: ''
        },
        {
          title: 'Invitaciones',
          subtitle: 'Revisar si tienes invitaciones a la APP y compartirlas',
          img: mailSend,
          link_to: ''
        },
        {
          title: 'Marcas y tiendas seguidas',
          subtitle: 'Revisa las marcas y tiendas que tienes en follow',
          img: addShop,
          link_to: ''
        },
        {
          title: 'Valorar la APP',
          subtitle: 'Nos ayudarías mucho valorando nuestra app',
          img: rateApp,
          link_to: ''
        }   
      ]
    }
  }
}
</script>
